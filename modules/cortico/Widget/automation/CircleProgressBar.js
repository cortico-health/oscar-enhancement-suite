import classNames from "classnames";
import "./CircleProgressBar.css";
export default function CircleProgressBar({ ...props }) {
  return (
    <div>
      <div className="tw-h-[160px] tw-w-[160px] tw-relative">
        <div className="tw-h-[160px] tw-w-[160px] tw-rounded-[50%] tw-border  tw-p-[20px] tw-shadow-outerCircle">
          <div className="tw-h-[120px] tw-w-[120px] tw-rounded-[50%] tw-border  tw-shadow-innerCircle tw-flex tw-justify-center tw-items-center">
            50%
          </div>
        </div>
        <Circle className="tw-absolute tw-top-0 tw-left-0 tw-stroke-[20px] tw-stroke-blue-500" />
      </div>
    </div>
  );
}

function Circle({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="160px"
      height="160px"
      className={classNames(className)}
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#090979" />
          <stop offset="100%" stop-color="#00d4ff" />
        </linearGradient>
      </defs>
      <circle
        cx="80"
        cy="80"
        r="70"
        strokeDasharray={500}
        className={classNames("widgetCircle")}
      />
    </svg>
  );
}
