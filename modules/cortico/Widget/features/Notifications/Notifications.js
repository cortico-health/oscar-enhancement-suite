import { createPortal } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { useSelector } from "react-redux";

export default function Notifications() {
  const [node, setNode] = useState(null);
  const { notifications } = useSelector((state) => state.notifications);

  useEffect(() => {
    const body = document.querySelector(".cortico-widget-body");
    setNode(body);

    console.log("Notifications got here");
  }, []);

  return (
    <>
      {notifications.length > 0 && node
        ? createPortal(<Notification />, node)
        : null}
    </>
  );
}

export function Notification({ type, message, ...props }) {
  return (
    <div className="tw-absolute tw-inset-0 tw-bg-black tw-text-white">
      Notifications go here
    </div>
  );
}
