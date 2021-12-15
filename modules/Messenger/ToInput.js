import { render } from "preact";
import { forwardRef } from "preact/compat";

const To = forwardRef(({ patient, ...props }, ref) => {
  return (
    <div className="tw-flex tw-items-center tw-w-full">
      <div>
        <p className="tw-text-xs">To</p>
      </div>
      <div className="tw-pl-2 tw-w-full">
        <input
          ref={ref}
          type="text"
          className="tw-text-xs tw-text-opacity-80 text-gray-700 tw-tracking-wider tw-p-2 tw-break-words tw-bg-transparent tw-w-full"
          defaultValue={patient.email}
        ></input>
      </div>
    </div>
  );
});

export default To;
