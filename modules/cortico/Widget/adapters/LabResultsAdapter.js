import { useQuery } from "react-query";

const url = "/PrintPDF.do";
export default function LabResultsAdapter() {
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

  const data = new FormData();
  params.map((param) => data.append(param.key, param.value));

  const result = useQuery("labResults", () => {
    return fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  });

  console.log("Lab Result", result.data);

  return <></>;
}
