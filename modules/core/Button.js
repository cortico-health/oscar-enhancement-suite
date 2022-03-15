import classNames from "classnames";
export default function Button({
  className,
  block,
  loading = false,
  children,
  size,
  ...props
}) {
  return (
    <button
      className={classNames(
        block === true ? "tw-block" : "tw-inline-block",
        "tw-px-4 tw-py-2 tw-text-white tw-bg-blue-1000 tw-rounded-md tw-shadow-md tw-relative",
        className,
        size === "sm" ? "tw-text-sm" : "tw-text-lg"
      )}
      {...props}
    >
      {loading === true ? (
        <span className="tw-flex tw-justify-center">
          <svg
            class="tw-animate-spin tw-h-5 tw-w-5 tw-text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="tw-opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="tw-opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      ) : (
        <span className="tw-cursor-pointer">{children}</span>
      )}
    </button>
  );
}