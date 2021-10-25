import { render } from "preact";

function To({ patient, ...props }) {
  return (
    <div className="tw-flex tw-items-center">
      <div>
        <p className="tw-text-xs">To</p>
      </div>
      <div className="tw-pl-2">
        <p className="tw-text-xs tw-text-opacity-80 text-gray-700 tw-tracking-wider tw-rounded-xl tw-p-2 tw-break-words">
          {[patient["First Name"], patient["Last Name"]].join(" ")}(
          {patient.email})
        </p>
      </div>
    </div>
  );
}

export default To;
