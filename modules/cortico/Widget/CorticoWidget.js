import { render } from "preact";
import { useRef } from "preact/hooks";
import CorticoImg from "../../../resources/icons/cortico-128.png";
import CorticoPlugin from "./CorticoPlugin";
import { useState } from "preact/hooks";
function Content() {
  const containerRef = useRef();

  const [open, setOpen] = useState(false);

  return (
    <div className="cleanslate cortico-widget">
      <div className="tailwind preflight">
        <div
          className="tw-fixed tw-bottom-5 tw-right-5 tw-z-10005 tw-bg-white tw-text-white tw-rounded-xl tw-shadow-xl tw-bg-cortico "
          ref={containerRef}
        >
          {open === true ? (
            <>
              <CorticoPlugin />
            </>
          ) : (
            <div
              className="tw-p-4 tw-cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                className="tw-h-12 tw-w-12 tw-cursor-pointer"
                src={CorticoImg}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CorticoWidget(container, replaceNode) {
  return render(
    <RecoilRoot>
      <Content />
    </RecoilRoot>,
    container,
    replaceNode
  );
}
