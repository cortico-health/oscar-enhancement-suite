import { useSelector } from "react-redux";

export default function PatientPanel() {
  const { info } = useSelector((state) => state.patient);

  return (
    <div className="tw-w-[225px] tw-text-gray-700 tw-p-4 tw-font-sans">
      <div className="tw-p-2 tw-bg-gray-100 tw-rounded-md tw-text-center">
        <p className="tw-text-2xs">
          {info["First Name"]} {info["Last Name"]}
        </p>
        <p className="tw-text-2xs">{info["Age"]}</p>
        <p className="tw-text-2xs">{info["email"]}</p>
      </div>
    </div>
  );
}
