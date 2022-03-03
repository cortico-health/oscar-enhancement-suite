import { render } from "preact";
import { useRef, useEffect } from "preact/hooks";
import CorticoImg from "../../../resources/icons/cortico-128.png";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import CorticoPlugin from "./CorticoPlugin";
import { useState } from "preact/hooks";

function Content() {
  const containerRef = useRef();

  const [open, setOpen] = useState(false);

  return (
    <div className="cleanslate cortico-widget">
      <div className="tailwind preflight">
        <div
          className="tw-fixed tw-bottom-5 tw-right-5 tw-z-10005 tw-bg-white tw-text-white tw-rounded-xl tw-shadow-xl"
          ref={containerRef}
        >
          <div className="tw-absolute tw-top-[-5px] tw-right-[-5px] tw-bg-yellow-500 tw-p-1 tw-rounded-full">
            <ExclamationCircleIcon className="tw-h-6 tw-w-6 tw-text-white"></ExclamationCircleIcon>
          </div>
          {open === true ? (
            <CorticoPlugin />
          ) : (
            <div
              className="tw-p-4 tw-cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img className="tw-h-12 tw-w-12" src={CorticoImg} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CorticoWidget(container, replaceNode) {
  return render(<Content />, container, replaceNode);
}
