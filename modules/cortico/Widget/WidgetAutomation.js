import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import classNames from "classnames";

const automations = [
  {
    name: "Eligibility Check",
    description:
      "Have the plugin to check eligibility for each patient in the schedule. ",
    icon: (
      <ClipboardCheckIcon className="tw-w-10 tw-h-10 tw-mr-2 tw-text-gray-900 tw-inline-block" />
    ),
  },
  {
    name: "Preferred Pharmacies",
    description:
      "Set preferred pharmacies for each of the patients in the schedule",
    icon: (
      <OfficeBuildingIcon className="tw-w-10 tw-h-10 tw-mr-2 tw-text-gray-900 tw-inline-block" />
    ),
    premium: true,
  },
];

export default function WidgetAutomation() {
  return (
    <div className="tw-px-10 tw-py-4">
      <WidgetAutomationOptions />
    </div>
  );
}

export function WidgetAutomationOptions() {
  return (
    <div className="tw-font-sans">
      <div>
        <h2 className="tw-text-3xl tw-font-semibold tw-text-gray-800 tw-m-0 tw-p-0">
          Automations
        </h2>
        <p className="tw-text-lg tw-text-gray-700">
          Replace tedious repetitive tasks with a single click
        </p>
      </div>
      <hr className="tw-my-6" />
      <div>
        {automations.map((automation, i) => {
          return (
            <div
              key={i}
              className={classNames(
                automation.premium === true
                  ? "tw-bg-gray-100"
                  : "tw-bg-gray-50 hover:tw-bg-gray-200",
                "tw-relative tw-p-8 tw-my-8 tw-rounded-lg tw-shadow-md tw-max-w-[400px] tw-flex tw-justify-between tw-items-center  tw-cursor-pointer"
              )}
            >
              <div className="tw-cursor-pointer">
                <span
                  className={classNames(
                    "tw-flex tw-text-xl  tw-font-semibold tw-mb-4 tw-items-center tw-w-full",
                    automation.premium === true
                      ? "tw-text-gray-700"
                      : "tw-text-gray-700"
                  )}
                >
                  {automation.icon}
                  {automation.name}
                </span>
                <p
                  className={classNames(
                    "tw-text-xl tw-text-gray-700 tw-max-w-[300px]",
                    automation.premium === true
                      ? "tw-text-gray-700"
                      : "tw-text-gray-700"
                  )}
                >
                  {automation.description}
                </p>
              </div>
              <div className="tw-px-4 tw-cursor-pointer">
                <ArrowRightIcon className="tw-w-8 tw-h-8 tw-text-gray-600" />
              </div>
              {automation.premium === true ? (
                <div className="tw-absolute tw-top-[-5px] tw-right-[-5px] tw-rounded-xl tw-p-2 tw-bg-cortico-blue tw-shadow-md">
                  <p className="tw-text-base tw-text-gray-50 tw-font-semibold">
                    <StarIcon className="tw-inline-block tw-mr-1 tw-w-6 tw-h-6 tw-text-white"></StarIcon>
                    Requires Premium
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
