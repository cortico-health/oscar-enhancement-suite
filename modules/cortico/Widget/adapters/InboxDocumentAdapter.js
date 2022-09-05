import { useEffect, useState } from "preact/hooks";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getFileInfo } from "../../../Utils/Utils";
import { nanoid } from "nanoid";

function url(strings, docNo) {
  return `ManageDocument.do?method=display&doc_no=${docNo}`;
}

const urlParams = new URLSearchParams(window.location.search);
const segmentId = urlParams.get("segmentID");

export default function InboxDocument({ onSuccess, onError, ...props }) {
  if (!segmentId) {
    return <></>;
  }

  console.log("Re-rendering");

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
      retry: false,
    }
  );

  if (result.data) {
    const contentDisposition = result.data.headers.get("Content-Disposition");
    const { fileName, extension } = getFileInfo(contentDisposition);
    console.log("File name", fileName);

    const { data: blob } = useQuery(
      `inboxDocument${segmentId}Blob`,
      () => {
        return result.data.blob();
      },
      {
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
          retry: false,
        }
      );

      if (dataUrl) {
        const dispatch = useDispatch();
        dispatch({
          type: "messenger/addAttachment",
          payload: {
            id: nanoid(),
            name: fileName,
            data: dataUrl,
            type: "dataUrl",
            extension,
          },
        });
      }
    }
  }

  console.log("Inbox document Result", result);
}
