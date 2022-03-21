import { render } from "preact";
import { useRef, useEffect } from "preact/hooks";
import CorticoImg from "../../../resources/icons/logo-regular-white.svg";
import CorticoPlugin from "./CorticoPlugin";
import { useState } from "preact/hooks";
import classNames from "classnames";
import store from "./store/store.js";
import { Provider, useDispatch } from "react-redux";
function Content() {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const subscriptions = {
      "automations/eligibility": (name, data) => {
        dispatch({
          type: "eligCheck/setAll",
          payload: data,
        });
      },
      "automations/eligibility/failures": (name, data) => {
        dispatch({
          type: "eligCheckFails/setAll",
          payload: data,
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

  const handleMinimize = () => {
    setOpen(false);
  };

  return (
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
              <CorticoPlugin onMinimize={handleMinimize} />
            </>
          ) : (
            <div
              className="tw-p-4 tw-cursor-pointer tw-rounded-full tw-bg-blue-1000"
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
  );
}

export default function CorticoWidget(container, replaceNode) {
  return render(
    <Provider store={store}>
      <Content />
    </Provider>,
    container,
    replaceNode
  );
}
