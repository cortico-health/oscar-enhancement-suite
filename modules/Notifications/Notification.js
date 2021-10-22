import { render } from "preact";
import { useEffect } from "preact/hooks";
import corticoIcon from "../../resources/icons/96x96.png";

function Notification({
  open,
  close,
  title,
  content,
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
      className={`tw-fixed tw-bottom-0 tw-z-10001 tw-left-0 tw-right-0 tw-transition-transform tw-duration-300 tw-ease-in-out tw-flex tw-justify-center tw-w-full tw-p-2
      ${open ? "tw-translate-y-0" : "tw-translate-y-[100%]"}
      `}
    >
      <div
        className={`tw-bg-red-400 tw-rounded-md tw-shadow-lg tw-mb-10 tw-inline-block tw-font-sans ${
          error ? "tw-bg-red-500" : "tw-bg-cortico-blue"
        }`}
      >
        <div className="tw-flex tw-p-4 tw-items-center">
          <div className="tw-bg-white tw-p-1 tw-rounded-md">
            <img className="tw-h-4 tw-w-4" src={corticoIcon} alt="Cortico" />
          </div>
          {title ? (
            <p className="tw-text-white tw-font-semibold tw-ml-2 ">{title}</p>
          ) : (
            ""
          )}
        </div>
        <hr className="tw-opacity-10" />
        <p className="tw-max-w-xl tw-text-sm tw-text-white tw-p-4">{content}</p>
        <hr className="tw-opacity-10" />
        <div className="tw-flex tw-justify-end tw-px-4 tw-py-2">
          <button
            className="tw-bg-gray-700 tw-p-2 tw-rounded-md tw-text-sm tw-text-white"
            onClick={close}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
