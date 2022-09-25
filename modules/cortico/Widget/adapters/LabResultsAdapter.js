import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getFileInfo } from "../../../Utils/Utils";
import { nanoid } from "nanoid";
import { useEffect } from "preact/hooks";
const url = window.location.href.replace(/[^\/]+$/, "") + "/PrintPDF.do";
const id = nanoid();

export default function LabResultsAdapter() {
  const urlParams = new URLSearchParams(window.location.search);
  const segmentId = urlParams.get("segmentID");
  const dispatch = useDispatch();

  if (!segmentId) {
    return <></>;
  }

  const form = document.querySelector(
    `form[name="acknowledgeForm_${segmentId}"]`
  );

  const params = [
    {
      key: "segmentID",
      value: form["segmentID"]?.value,
    },
    {
      key: "multiID",
      value: form["multiID"]?.value,
    },
    {
      key: "providerNo",
      value: form["providerNo"]?.value,
    },
    {
      key: "status",
      value: form["status"]?.value,
    },
    {
      key: "comment",
      value: form["comment"]?.value,
    },
    {
      key: "labType",
      value: form["labType"]?.value,
    },
    {
      key: "lab_no",
      value: form["lab_no"]?.value,
    },
    {
      key: "label",
      value: form["label"]?.value,
    },
  ];

  const data = new FormData();
  params.map((param) => data.append(param.key, param.value));

  let fileName,
    extension = null;

  useEffect(() => {
    fetch(url, {
      method: "POST",
      body: new URLSearchParams(data),
    })
      .then((response) => {
        if (!response.ok) throw Error("Network response was not ok");
        console.log("Response came through", response);
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

  return <></>;
}
