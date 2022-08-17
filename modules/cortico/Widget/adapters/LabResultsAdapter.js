import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
const url = "PrintPDF.do";

const getFileInfo = (contentDisposition) => {
  let fileName = null;
  let extension = null;
  if (contentDisposition.includes("filename")) {
    fileName = contentDisposition
      .match(/(?:"[^"]*"|^[^"]*$)/)[0]
      .replace(/"/g, "");

    if (fileName) {
      extension = fileName.split(".").pop();
    }

    return {
      fileName,
      extension,
    };
  }
};

export default function LabResultsAdapter() {
  const urlParams = new URLSearchParams(window.location.search);
  const segmentId = urlParams.get("segmentID");

  if (!segmentId) {
    return;
  }

  const form = document.querySelector(
    `form[name="acknowledgeForm_${segmentId}"]`
  );
  const params = [
    {
      key: "segmentID",
      value: form["segmentID"].value,
    },
    {
      key: "multiID",
      value: form["multiID"].value,
    },
    {
      key: "providerNo",
      value: form["providerNo"].value,
    },
    {
      key: "status",
      value: form["status"].value,
    },
    {
      key: "comment",
      value: form["comment"].value,
    },
    {
      key: "labType",
      value: form["labType"].value,
    },
    {
      key: "lab_no",
      value: form["lab_no"].value,
    },
    {
      key: "label",
      value: form["label"].value,
    },
  ];

  const data = new FormData();
  params.map((param) => data.append(param.key, param.value));

  const result = useQuery(
    "labResults",
    () => {
      return fetch(url, {
        method: "POST",
        body: new URLSearchParams(data),
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

    const { data: blob } = useQuery(
      "labResultsBlob",
      () => {
        return result.data.blob();
      },
      {
        retry: false,
      }
    );

    if (blob) {
      const { data: dataUrl } = useQuery(
        "labResultsDataUrl",
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
            attachment: {
              name: fileName,
              data: dataUrl,
              extension,
            },
            document: true,
          },
        });
      }
    }
  }
  return <></>;
}
