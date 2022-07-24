import { useState } from "preact/hooks";
import { usePopper } from "react-popper";

export default function Tooltip({ children, description, ...props }) {
  const [on, setOn] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
    placement: "top",
  });

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseLeave={() => setOn(false)}
        onMouseOver={() => setOn(true)}
        className="tw-inline-block tw-relative"
      >
        {children}
      </div>
      {on && (
        <p
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="tw-text-xs tw-bg-black tw-p-1 tw-rounded-md tw-text-white tw-shadow-md tw-max-w-[300px]"
        >
          {description}
        </p>
      )}
    </>
  );
}
