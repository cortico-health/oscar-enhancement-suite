import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
const url = "PrintPDF.do";
const params = [
  {
    key: "segmentID",
    value: "160006",
  },
  {
    key: "multiID",
    value: "160006",
  },
  {
    key: "providerNo",
    value: "385",
  },
  {
    key: "status",
    value: "",
  },
  {
    key: "comment",
    value: "",
  },
  {
    key: "labType",
    value: "HL7",
  },
  {
    key: "lab_no",
    value: "160006",
  },
  {
    key: "label",
    value: "",
  },
];

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
  const data = new FormData();
  params.map((param) => data.append(param.key, param.value));

  const result = useQuery("labResults", () => {
    return fetch(url, {
      method: "POST",
      body: new URLSearchParams(data),
    }).then((response) => {
      if (!response.ok) throw Error("Network response was not ok");
      return response;
    });
  });

  if (result.data) {
    const contentDisposition = result.data.headers.get("Content-Disposition");
    const { fileName, extension } = getFileInfo(contentDisposition);

    const { data: blob } = useQuery("labResultsBlob", () => {
      return result.data.blob();
    });

    if (blob) {
      const { data: dataUrl } = useQuery("labResultsDataUrl", () => {
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
      });

      if (dataUrl) {
        onSuccess(dataUrl, fileName, extension);
        dispatch({
          type: "messenger/setAll",
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
