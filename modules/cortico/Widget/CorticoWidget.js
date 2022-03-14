import { render } from "preact";
import { useRef, useEffect } from "preact/hooks";
import CorticoImg from "../../../resources/icons/cortico-128.png";
import CorticoPlugin from "./CorticoPlugin";
import { useState } from "preact/hooks";
import { AutoContext } from "../../Context/WidgetContext";

function Content() {
  const containerRef = useRef();

  const [autoContext, setAutoContext] = useState({});

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const subscriptions = {
      "automations/eligibility": (name, data) => {
        setAutoContext({
          ...autoContext,
          ...data,
        });
      },
    };

    for (let prop in subscriptions) {
      window.pubsub.subscribe(prop, subscriptions[prop]);
    }

    return () => {
      for (let prop in subscriptions) {
        window.pubsub.subscribe(prop, subscriptions[prop]);
      }
    };
  }, []);

  return (
    <AutoContext.Provider value={autoContext}>
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
    </AutoContext.Provider>
  );
}

export default function CorticoWidget(container, replaceNode) {
  return render(<Content />, container, replaceNode);
}
