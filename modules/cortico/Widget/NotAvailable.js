import { XCircleIcon } from "@heroicons/react/solid";

export default function NotAvailable() {
  return (
    <div className="tw-bg-gray-400 tw-text-white tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-font-sans">
      <div className="tw-text-center">
        <XCircleIcon className="tw-w-24 tw-h-24 tw-text-white tw-mb-4 tw-block tw-mx-auto" />
        <span className="tw-text-white tw-text-center tw-text-3xl tw-font-medium">
          This functionality is currently unavailable
        </span>
      </div>
    </div>
  );
}
