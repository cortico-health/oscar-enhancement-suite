/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon } from "@heroicons/react/solid";
import classNames from "classnames";
export default function Alert({ size, title, message, ...props }) {
  return (
    <div className="tw-rounded-md tw-bg-yellow-50 tw-p-4 tw-border tw-border-black tw-border-opacity-5">
      <div className="tw-flex">
        <div className="tw-flex-shrink-0">
          <ExclamationIcon
            className="tw-h-5 tw-w-5 tw-text-yellow-400"
            aria-hidden="tw-true"
          />
        </div>
        <div className="tw-ml-3">
          <h3
            className={classNames(
              "tw-m-0 tw-p-0 tw-font-medium tw-text-yellow-800",
              size === "sm" ? "tw-text-xs" : "tw-text-sm"
            )}
          >
            {title}
          </h3>
          <div className={classNames("tw-mt-2 tw-text-sm tw-text-yellow-700")}>
            <p
              className={classNames(
                size === "sm" ? "tw-text-xs" : "tw-text-sm"
              )}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
