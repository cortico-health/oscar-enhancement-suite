import { InformationCircleIcon } from "@heroicons/react/solid";
import Button from "../../../core/Button";

export default function NoAppointments({ title, goBack, children, ...props }) {
  return (
    <div className="tw-min-w-[400px] tw-min-h-[400px] tw-flex tw-justify-center tw-items-center tw-text-gray-700">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <InformationCircleIcon className="tw-w-12 tw-h-12 tw-text-blue-1000" />
        <p className="tw-text-lg tw-mt-4">{title}</p>
        <Button onClick={goBack} className="tw-my-4" size="sm">
          Go Back
        </Button>
        <p className="tw-text-sm tw-mt-4 tw-block tw-max-w-[350px] tw-mx-auto">
          {children}
        </p>
      </div>
    </div>
  );
}
