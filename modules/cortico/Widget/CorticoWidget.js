import { render } from "preact";
import { useRef, useEffect } from "preact/hooks";
import CorticoImg from "../../../resources/icons/logo-regular-white.svg";
import CorticoPlugin from "./CorticoPlugin";
import { useState } from "preact/hooks";
import { AutoContext } from "../../Context/WidgetContext";
import classNames from "classnames";

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
            className={classNames(
              "tw-fixed tw-bottom-5 tw-right-5 tw-z-10005 tw-bg-blue-1000 tw-text-white tw-shadow-xl tw-bg-cortico tw-bg-transparent",
              open === true ? "tw-rounded-xl" : "tw-rounded-full"
            )}
            ref={containerRef}
          >
            {open === true ? (
              <>
                <CorticoPlugin />
              </>
            ) : (
              <div
                className="tw-p-4 tw-cursor-pointer tw-rounded-full"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img
                  className="tw-h-8 tw-w-8 tw-cursor-pointer"
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
