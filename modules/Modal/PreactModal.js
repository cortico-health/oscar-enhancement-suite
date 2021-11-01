import { render, Fragment } from "preact";
import { useRef } from "preact/hooks";

function PreactModal({ show, close, children, ...props }) {
  const container = useRef();

  const handleClick = (e) => {
    const containerElem = container.current;
    if (containerElem && containerElem.isSameNode(e.target)) {
      close && close();
    }
  };
  return (
    <>
      {show === true ? (
        <div
          onClick={handleClick}
          ref={container}
          className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-80 tw-flex tw-justify-center tw-items-center tw-z-10002 tw-p-2"
        >
          <div>{children}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default PreactModal;
