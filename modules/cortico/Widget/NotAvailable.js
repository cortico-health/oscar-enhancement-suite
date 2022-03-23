import { InformationCircleIcon } from "@heroicons/react/solid";

export default function NotAvailable() {
  return (
    <div className=" tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-font-sans">
      <div className="tw-flex tw-justify-center tw-items-center">
        <div>
          <InformationCircleIcon className="tw-w-16 tw-h-16 tw-text-blue-1000 tw-mb-4 tw-block tw-mx-auto" />
          <p className="tw-text-gray-700 tw-text-sm tw-max-w-[300px]">
            This function is currently only available on
            <ol className="tw-list-decimal tw-mt-2 tw-font-normal tw-text-sm">
              <li>E forms</li>
              <li>Document Page</li>
              <li>Encounter Page</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
