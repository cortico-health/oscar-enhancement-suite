import { DotsVerticalIcon } from "@heroicons/react/solid";
import { useState } from "preact/hooks";

export default function AppointmentDetails() {
  const [on, setOn] = useState(false);

  return (
    <>
      <ReferenceElement onClick={() => setOn((on) => !on)}></ReferenceElement>
      {on && <Details></Details>}
    </>
  );
}

function ReferenceElement({ className, ...props }) {
  return (
    <div
      {...props}
      className="tw-bg-blue-1000 tw-rounded-full tw-p-[1px] tw-shadow-xl tw-flex tw-justify-center tw-items-center tw-border tw-border-white tw-border-solid tw-absolute -tw-top-[12px] tw-z-10001 tw-cursor-pointer"
    >
      <DotsVerticalIcon className="tw-w-3 tw-h-3 tw-text-white" />
    </div>
  );
}

function Details() {
  return (
    <div className="tw-absolute tw-top-3 tw-w-[300px] tw-h-[300px] tw-bg-gray-200">
      Details
    </div>
  );
}
