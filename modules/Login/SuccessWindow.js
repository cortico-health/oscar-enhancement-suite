import { render } from "preact";
import { useEffect } from "preact/hooks";
import { CheckIcon } from "../Icons/HeroIcons.js";
import { PrimaryButton } from "../core/Button";

function SuccessWindow() {
  const refresh = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };

  useEffect(() => {
    setTimeout(refresh, 5000);
  }, []);

  return (
    <div className="tw-py-4 tw-flex tw-h-full tw-items-center">
      <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
        <CheckIcon className="tw-w-10 tw-h-10 tw-text-blue-1000" />
        <div>
          <h2 class="tw-p-0 tw-m-0 tw-mt-4 tw-text-center tw-text-xl tw-font-extrabold text-gray-700 tw-px-2">
            Sucessfully logged in!
          </h2>
        </div>
        <div>
          <p className="tw-text-base tw-text-gray-700 tw-text-center tw-mt-2">
            Your browser will automatically refresh in 5 seconds...
          </p>
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
            <p className="tw-text-base tw-text-gray-700 tw-text-center tw-mt-6">
              Not refreshing? Click the button below
            </p>
            <PrimaryButton
              onClick={refresh}
              className="tw-bg-blue-1000 tw-mt-4 tw-py-2 tw-px-4 tw-text-white tw-rounded-md tw-text-sm"
            >
              Refresh
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessWindow;
