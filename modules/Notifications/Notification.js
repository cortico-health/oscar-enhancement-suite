import { render } from "preact";
import { useEffect } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";
import { CloseIcon } from "../../modules/Icons/HeroIcons";

function Notification({
  open,
  close,
  title,
  content,
  preview,
  position,
  delay,
  error,
  ...props
}) {
  useEffect(() => {
    (async () => {
      if (open === true) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        close && close();
      }
    })();
  }, [open]);

  return (
    <div
      className={`tw-fixed tw-bottom-0 tw-z-10001 tw-left-[50%] tw-translate-x-[-50%] tw-transition-transform tw-duration-300 tw-ease-in-out tw-flex tw-justify-center tw-w-full tw-p-2
      ${open ? "tw-translate-y-0" : "tw-translate-y-[100%]"}
      `}
    >
      <div
        className={`tw-rounded-md tw-shadow-lg tw-mb-10 tw-inline-block tw-font-sans tw-min-w-[300px] tw-max-w-[400px] tw-border ${
          error ? "tw-bg-white" : "tw-bg-white"
        }`}
      >
        <div className="tw-flex tw-p-4 tw-items-start">
          <div className="tw-bg-white tw-rounded-md tw-flex-shrink-0 tw-mt-[3px]">
            <img className="tw-h-4 tw-w-4" src={corticoIcon} alt="Cortico" />
          </div>
          <div className="tw-ml-3 tw-w-0 tw-flex-1">
            <p className={`tw-text-gray-900 tw-font-medium tw-text-sm`}>
              {title}
            </p>
            <p className="tw-max-w-xl tw-text-sm tw-text-gray-500 tw-mt-1">
              {content}
            </p>
            {preview && (
              <p className="tw-max-w-xl tw-text-sm tw-text-gray-500 tw-mt-1">
                <a href={preview} target="_blank">
                  Preview by clicking here
                </a>
              </p>
            )}
          </div>
          <div className="tw-cursor-pointer" onClick={close}>
            <span className="tw-sr-only">Close</span>
            <CloseIcon className="tw-w-5 tw-h-5 tw-text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
