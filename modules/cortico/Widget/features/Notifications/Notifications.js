import { createPortal } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { CheckIcon, XIcon } from "@heroicons/react/outline";

export default function Notifications() {
  const [node, setNode] = useState(null);
  const { notifications } = useSelector((state) => state.notifications);

  useEffect(() => {
    const body = document.querySelector(".cortico-widget-body");
    setNode(body);

    console.log("Notifications got here");
    console.log(notifications);
  }, []);

  return (
    <>
      {notifications.length > 0 && node
        ? createPortal(
            <div className="tw-absolute tw-bottom-3 tw-w-[325px] tw-block tw-mx-auto tw-left-[50%] tw-translate-x-[-50%] tw-space-y-2">
              {notifications.map((notification) => (
                <Notification {...notification} />
              ))}
            </div>,
            node
          )
        : null}
    </>
  );
}

export function Notification({
  className,
  type,
  message,
  title,
  key,
  dismissAfter = 5000,
  ...props
}) {
  const dispatch = useDispatch();

  const dismiss = () => {
    dispatch({
      type: "notifications/remove",
      payload: key,
    });
  };

  useEffect(() => {
    let id = setTimeout(() => {
      dismiss();
    }, dismissAfter);

    return () => {
      console.log("Notification Clean Up Ran");
      clearTimeout(id);
    };
  }, []);

  return (
    <div
      className={classNames(
        "tw-font-sans tw-p-4 tw-rounded-lg tw-bg-white tw-border tw-border-opacity-10 tw-shadow-md"
      )}
    >
      <div className="tw-flex tw-items-start">
        <div className="flex-shrink-0">
          <CheckIcon className="tw-h-6 tw-w-6 tw-text-green-500"></CheckIcon>
        </div>
        <div className="tw-flex-1 tw-text-sm tw-mx-4">
          <p className="tw-text-gray-900 tw-font-medium">{title}</p>
          <p className="tw-text-gray-500">{message}</p>
        </div>
        <div className="tw-flex-shrink-0 tw-cursor-pointer" onClick={dismiss}>
          <XIcon className="tw-h-5 tw-w-5 tw-cursor-pointer tw-text-gray-700"></XIcon>
        </div>
      </div>
    </div>
  );
}
