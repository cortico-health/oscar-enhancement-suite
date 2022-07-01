import { useQuery } from "react-query";
import { getPatientInfo } from "../../../cortico";
import { useDispatch, useSelector } from "react-redux";

export default function PatientPanel() {
  const dispatch = useDispatch();
  const result = useQuery("patient", async () => {
    return await getPatientInfo();
  });

  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  if (result.isSuccess) {
    dispatch({
      type: "app/setPatientInfo",
      payload: result.data,
    });

    const { data: patientInfo } = result;

    return (
      <div className="tw-w-[225px] tw-text-gray-700 tw-p-4 tw-font-sans">
        <div className="tw-p-2 tw-bg-gray-100 tw-rounded-md tw-text-center">
          <p className="tw-text-2xs">
            {patientInfo["First Name"]} {patientInfo["Last Name"]}
          </p>
          <p className="tw-text-2xs">{patientInfo["Age"]}</p>
          <p className="tw-text-2xs">{patientInfo["email"]}</p>
        </div>
      </div>
    );
  }
}
