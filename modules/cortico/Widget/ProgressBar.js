import { useEffect, useState } from "preact/hooks";
import classNames from "classnames";
export default function ProgressBar({
  title = "Title Goes Here",
  current = 0,
  total = 0,
  ...props
}) {
  const [progress, setProgress] = useState();
  useEffect(() => {
    if (total !== 0) {
      setProgress((current / total) * 100);
    }
  }, [current, total]);
  return (
    <div>
      <h4 className="tw-sr-only">Status</h4>
      <p className="tw-text-sm tw-text-gray-600">{title}</p>
      <div className="tw-my-2" aria-hidden="true">
        <div className="tw-bg-gray-200 tw-rounded-full tw-overflow-hidden">
          <div
            className={classNames("tw-h-2 tw-bg-blue-1000 tw-rounded-full")}
            style={{ width: `${progress}%` }}
          />
        </div>
        {/*}
        <div className="tw-hidden sm:tw-grid tw-grid-cols-2 tw-text-sm tw-font-medium tw-text-gray-600 tw-mt-6">
          <div className="tw-text-indigo-600">{0}</div>
          <div className="tw-text-right">{total}</div>
        </div>
        */}
        <div className="tw-text-center">
          <p className="tw-text-blue-1000 tw-font-medium tw-text-sm tw-mt-4">
            {current}/{total}
          </p>
        </div>
      </div>
    </div>
  );
}
