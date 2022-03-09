import { Switch } from "@headlessui/react";
import { useState } from "preact/hooks";

export default function WidgetSettings() {
  return (
    <div className="tw-min-w-[300px] tw-p-4 tw-font-sans tw-h-full">
      <div className="tw-flex tw-flex-col tw-h-full tw-justify-between">
        <div>
          <h2 className="tw-text-3xl tw-font-semibold tw-text-gray-800 tw-m-0 tw-p-0">
            Settings
          </h2>
          <p className="tw-text-lg tw-text-gray-700">
            Configure the way the plugin works
          </p>
          <hr className="tw-my-4" />
          <div className="tw-flex tw-justify-between tw-w-full tw-mt-5">
            <p className="tw-text-gray-700 tw-text-xl">Theme</p>
            <OesSwitch />
          </div>
          <div className="tw-flex tw-justify-between tw-w-full tw-mt-7">
            <label className="tw-flex tw-justify-between tw-w-full tw-items-center">
              <span className="tw-text-gray-700 tw-text-xl">
                Appointment Type Reminder
              </span>
              <select
                className="
                    tw-text-gray-700
                    tw-text-xl
                    tw-p-2
                    tw-bg-gray-100
                    tw-block
                    tw-max-w-[150px]
                    tw-w-full
                    tw-mt-1
                    tw-rounded-md
                    tw-border-gray-500
                    tw-shadow-sm
                    tw-focus:border-indigo-300 tw-focus:ring tw-focus:ring-indigo-200 tw-focus:ring-opacity-50
                  "
              >
                <option>Phone</option>
                <option>Virtual</option>
                <option>Clinic</option>
                <option>N/A</option>
                <option>Quiet</option>
              </select>
            </label>
          </div>
          <div className="tw-flex tw-justify-between tw-w-full tw-mt-7">
            <label class="tw-flex tw-w-full tw-justify-between tw-items-center">
              <span class="tw-text-gray-700 tw-text-xl">
                Recall Status Check
              </span>
              <input
                type="text"
                class="
                    tw-max-w-[150px]
                    tw-text-gray-700
                    tw-text-xl
                    tw-p-2
                    tw-mt-1
                    tw-block
                    tw-w-full
                    tw-rounded-md
                    tw-bg-gray-100
                    tw-border-transparent
                    tw-focus:border-gray-500 tw-focus:bg-white tw-focus:ring-0
                  "
                placeholder="Recall Status"
              />
            </label>
          </div>
        </div>
        <div>
          <hr className="tw-my-5" />
          <div className="tw-flex tw-justify-between tw-w-full">
            <button className="tw-bg-red-600 tw-text-xl tw-text-white tw-rounded-md tw-px-3 tw-py-2">
              Reset Cache
            </button>
            <button className="tw-bg-cortico-blue tw-text-xl tw-text-white tw-rounded-md tw-px-3 tw-py-2">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OesSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "tw-bg-cortico-blue" : "tw-bg-gray-200"
      } tw-relative tw-inline-flex tw-items-center tw-h-7 tw-w-14 tw-rounded-full`}
    >
      <span className="tw-sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "tw-translate-x-8" : "tw-translate-x-1"
        } tw-inline-block tw-h-5 tw-w-5 tw-transform tw-bg-white tw-rounded-full`}
      />
    </Switch>
  );
}
