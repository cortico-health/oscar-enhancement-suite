/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon,ExclamationCircleIcon,InformationCircleIcon,CheckCircleIcon } from "@heroicons/react/solid";
import classNames from "classnames";

export default function Alert({ size,title,message,className,children,variant = "warning",...props }) {
  return (
    <div
      className={classNames(
        `tw-rounded-md tw-p-4 tw-border tw-border-black tw-border-opacity-5`,
        variant === "warning" && "tw-bg-yellow-50",
        variant === "success" && "tw-bg-emerald-50",
        variant === "info" && "tw-bg-blue-100",
        variant === "error" && "tw-bg-red-100",
        className
      )}
    >
      <div className="tw-flex">
        <div className="tw-flex-shrink-0">
          { variant === "warning" && <ExclamationIcon
            className={ `tw-h-5 tw-w-5 tw-text-yellow-400` }
            aria-hidden="tw-true"
          /> }
          { variant === "success" && <CheckCircleIcon
            className={ `tw-h-5 tw-w-5 tw-text-emerald-400` }
            aria-hidden="tw-true"
          /> }
          { variant === "info" && <InformationCircleIcon
            className={ `tw-h-5 tw-w-5 tw-text-blue-400` }
            aria-hidden="tw-true"
          /> }
          { variant === "error" && <ExclamationCircleIcon
            className={ `tw-h-5 tw-w-5 tw-text-red-400` }
            aria-hidden="tw-true"
          /> }
        </div>
        <div className="tw-ml-3">
          <h3
            className={classNames(
              `tw-m-0 tw-p-0 tw-font-medium`,
              variant === "warning" && "tw-text-yellow-800",
              variant === "success" && "tw-text-emerald-800",
              variant === "info" && "tw-text-blue-800",
              variant === "error" && "tw-text-red-800",
              size === "sm" ? "tw-text-xs" : "tw-text-sm"
            )}
          >
            {title}
          </h3>
          <div className={ classNames(`tw-mt-2 tw-text-sm`,
            variant === "warning" && "tw-text-yellow-700",
            variant === "success" && "tw-text-emerald-700",
            variant === "info" && "tw-text-blue-700",
            variant === "error" && "tw-text-red-700") }>
            <p
              className={classNames(
                size === "sm" ? "tw-text-xs" : "tw-text-sm"
              )}
            >
              {message}
            </p>
            { children || null }
          </div>
        </div>
      </div>
    </div>
  );
}
