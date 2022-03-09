import { render } from "preact";
import { useEffect } from "preact/hooks";
import { CheckIcon } from "../Icons/HeroIcons.js";

function SuccessWindow() {
  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(refresh, 5000);
  }, []);

  return (
    <div className="tw-py-4">
      <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
        <CheckIcon className="tw-w-10 tw-h-10 tw-text-green-600" />
        <div>
          <h2 class="tw-p-0 tw-m-0 tw-mt-4 tw-text-center tw-text-4xl tw-font-extrabold text-gray-900 tw-px-2">
            Sucessfully logged in!
          </h2>
        </div>
        <div>
          <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-mt-2">
            Your browser will automatically refresh in 5 seconds...
          </p>
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
            <p className="tw-text-xl tw-text-gray-700 tw-text-center tw-mt-6">
              Not refreshing? Click the button below
            </p>
            <button
              onClick={refresh}
              className="tw-bg-cortico-blue tw-mt-4 tw-py-2 tw-px-6 tw-text-white tw-rounded-md tw-text-xl"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessWindow;
