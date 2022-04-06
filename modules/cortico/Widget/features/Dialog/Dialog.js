import { createPortal } from "preact/compat";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "preact/hooks";
import classNames from "classnames";

export default function Dialog({
  open,
  children,
  onClose,
  className,
  ...props
}) {
  //const { open } = useSelector((state) => state.dialog);
  //const dispatch = useDispatch();
  const dialogRef = useRef();

  const [node, setNode] = useState(null);
  useEffect(() => {
    const body = document.querySelector(".cortico-widget-body");
    setNode(body);
  }, []);

  const handleClick = (evt) => {
    if (evt.target.isSameNode(dialogRef.current)) {
      onClose && onClose();
    }
  };

  return (
    <>
      {open === true && node
        ? createPortal(
            <div
              ref={dialogRef}
              onClick={handleClick}
              className={classNames(
                "tw-font-sans tw-absolute tw-inset-0 tw-z-10000 tw-rounded-xl tw-w-full tw-h-full tw-bg-black tw-bg-opacity-50 tw-overflow-hidden",
                className
              )}
            >
              {children}
            </div>,
            node
          )
        : null}
    </>
  );
}
