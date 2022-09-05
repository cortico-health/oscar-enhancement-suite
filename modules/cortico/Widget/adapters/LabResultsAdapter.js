import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getFileInfo } from "../../../Utils/Utils";
import { nanoid } from "nanoid";
const url = "PrintPDF.do";
const id = nanoid();

export default function LabResultsAdapter() {
  const urlParams = new URLSearchParams(window.location.search);
  const segmentId = urlParams.get("segmentID");
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

  const result = useQuery(
    `labResults${segmentId}`,
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
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    }
  );

  if (result.data) {
    const contentDisposition = result.data.headers.get("Content-Disposition");
    const { fileName, extension } = getFileInfo(contentDisposition);

    const { data: blob } = useQuery(
      `labResults${segmentId}Blob`,
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
        `labResults${segmentId}DataUrl`,
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
  return <></>;
}
