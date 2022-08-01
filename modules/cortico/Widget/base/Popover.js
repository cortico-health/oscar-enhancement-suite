import { useState } from "preact/hooks";
import { usePopper } from "react-popper";

export default function Popover({ refElement, children, ...props }) {
  const [on, setOn] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
  });
  return (
    <>
      <div
        ref={setReferenceElement}
        onClick={() => {
          setOn((on) => !on);
        }}
        className="tw-inline-block tw-relative"
      >
        {refElement}
      </div>
      {true && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {children}
        </div>
      )}
    </>
  );
}
