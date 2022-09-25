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
  if (!segmentId) {
    return <></>;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    let fileName,
      extension = null;
    fetch(url`${segmentId}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw Error("Network response was not ok");

        const contentDisposition = response.headers.map["content-disposition"];
        const { fileName: _fileName, extension: _extension } =
          getFileInfo(contentDisposition);
        fileName = _fileName;
        extension = _extension;
        return response.blob();
      })
      .then((blob) => {
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
      })
      .then((dataUrl) => {
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
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      dispatch({
        type: "messenger/deleteAttachment",
        payload: {
          id,
        },
      });
    };
  }, []);
}
