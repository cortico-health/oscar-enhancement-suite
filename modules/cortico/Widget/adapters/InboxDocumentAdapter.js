import { useEffect, useState } from "preact/hooks";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getFileInfo } from "../../../Utils/Utils";
import { nanoid } from "nanoid";

function url(strings, docNo) {
  return (
    window.location.href.replace(/[^\/]+$/, "") +
    `ManageDocument.do?method=display&doc_no=${docNo}`
  );
}

const urlParams = new URLSearchParams(window.location.search);
const segmentId = urlParams.get("segmentID");
const id = nanoid();

export default function InboxDocument({ onSuccess, onError, ...props }) {
  const dispatch = useDispatch();
  if (!segmentId) {
    return <></>;
  }

  useEffect(() => {
    return () => {
      dispatch({
        type: "messenger/deleteAttachment",
        payload: {
          id,
        },
      });
    };
  }, []);

  const result = useQuery(
    `inboxDocument${segmentId}`,
    () => {
      return fetch(url`${segmentId}`, {
        method: "GET",
      }).then((response) => {
        if (!response.ok) throw Error("Network response was not ok");
        return response;
      });
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    }
  );

  if (result.data) {
    const contentDisposition = result.data.headers.get("Content-Disposition");
    const { fileName, extension } = getFileInfo(contentDisposition);

    const { data: blob } = useQuery(
      `inboxDocument${segmentId}Blob`,
      () => {
        return result.data.blob();
      },
      {
        staleTime: Infinity,
        cacheTime: Infinity,
        retry: false,
      }
    );

    if (blob) {
      const { data: dataUrl } = useQuery(
        `inboxDocument${segmentId}DataUrl`,
        () => {
          return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.addEventListener("load", (evt) => {
              resolve(reader.result);
            });
            reader.addEventListener("error", (evt) => {
              reject(evt);
            });
            reader.readAsDataURL(blob);
          });
        },
        {
          staleTime: Infinity,
          cacheTime: Infinity,
          retry: false,
        }
      );

      if (dataUrl) {
        dispatch({
          type: "messenger/addAttachment",
          payload: {
            id: id,
            name: fileName,
            data: dataUrl,
            type: "dataUrl",
            extension,
          },
        });
      }
    }
  }
}
