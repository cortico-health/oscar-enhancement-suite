import { Switch } from "@headlessui/react";
import { useState, useRef } from "preact/hooks";
import Button from "../../core/Button";

export default function WidgetSettings() {
  const recallRef = useRef();
  const mediumRef = useRef();
  const [loading, setLoading] = useState(false);
  const [resetCacheLoading, setResetCacheLoading] = useState(false);

  const saveSettings = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const recallStatus = recallRef.current && recallRef.current.value;
    const mediumOption = mediumRef.current && mediumRef.current.value;
    localStorage.setItem("recall-status", recallStatus);
    localStorage.setItem("medium-option", mediumOption);

    setLoading(false);
  };

  const resetCache = async () => {
    setResetCacheLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    localStorage.clear();
    if (!window.is_dev) {
      const browser = browser || window.chrome;
      if (browser) {
        await browser.storage.local.clear();
      } else {
        localStorage.clear();
      }
    }
    setResetCacheLoading(false);
  };

  return (
    <div className="tw-min-w-[300px] tw-max-w-[450px] tw-p-4 tw-font-sans tw-h-full">
      <div className="tw-flex tw-flex-col tw-h-full tw-justify-between">
        <div>
          <h2 className="tw-text-base tw-font-medium tw-text-gray-800 tw-m-0 tw-p-0">
            Settings
          </h2>
          <p className="tw-text-sm tw-text-gray-700">
            Configure the way the plugin works
          </p>
          <hr className="tw-my-4" />
          {/*
                    <div className="tw-flex tw-justify-between tw-w-full tw-mt-5">
            <p className="tw-text-gray-700 tw-text-xl">Theme</p>
            <OesSwitch enabled={theme} onChange={() => setTheme(!theme)} />
          </div> */}

          <div className="tw-flex tw-justify-between tw-w-full tw-mt-7">
            <label className="tw-flex tw-justify-between tw-w-full tw-items-center tw-space-x-20">
              <span className="tw-text-gray-700 tw-text-sm">
                Appointment Type Reminder
              </span>
              <select
                ref={mediumRef}
                defaultValue={localStorage.getItem("medium-option")}
                className="
                    tw-text-gray-700
                    tw-text-sm
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
                <option value="phone">Phone</option>
                <option value="virtual">Virtual</option>
                <option value="clinic">Clinic</option>
                <option value="">N/A</option>
                <option value="quiet">Quiet</option>
              </select>
            </label>
          </div>
          <div className="tw-flex tw-justify-between tw-w-full tw-mt-7">
            <label class="tw-flex tw-w-full tw-justify-between tw-items-center">
              <span class="tw-text-gray-700 tw-text-sm">
                Recall Status Check
              </span>
              <input
                ref={recallRef}
                defaultValue={localStorage.getItem("recall-status")}
                type="text"
                class="
                    tw-max-w-[150px]
                    tw-text-gray-700
                    tw-text-sm
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
            <Button
              size="sm"
              loading={resetCacheLoading}
              onClick={resetCache}
              className="tw-bg-red-600 tw-text-base tw-text-white tw-rounded-md"
            >
              Reset Cache
            </Button>
            <Button size="sm" loading={loading} onClick={saveSettings}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OesSwitch({ enabled, onChange, ...props }) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
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
