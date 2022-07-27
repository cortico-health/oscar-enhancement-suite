import classNames from "classnames";
import { render } from "preact";

function Loader({ color = "white", size = 5 }) {
  return (
    <svg
      className={classNames(`tw-text-${color} tw-h-${size} tw-w-${size}`, "tw-animate-spin tw--ml-1 tw-mr-3 tw-inline-block")}
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
  );
}

export default Loader;
