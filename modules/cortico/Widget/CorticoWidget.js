import { render } from "preact";
import { useRef, useEffect } from "preact/hooks";

import CorticoImg from "../../../resources/icons/logo-regular-white.svg";
import CorticoPlugin from "./CorticoPlugin";
import { useState } from "preact/hooks";
import classNames from "classnames";
import store from "./store/store.js";
import { Provider, useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";
import SetupDocuments from "./features/Documents/SetupDocuments";
function App({ disabledFeatures = [], ...props }) {
  const { open } = useSelector((state) => state.app);
  const containerRef = useRef();
  const dispatch = useDispatch();
  const [dragging, setDragging] = useState(false);

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
      "corticoWidget/toggle": () => {
        dispatch({
          type: "app/setOpen",
          payload: !open,
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

  useEffect(() => {
    if (props.eForm === true) {
      dispatch({
        type: "messenger/set",
        payload: {
          key: "eform",
          value: true,
        },
      });
    }

    if (props.inboxDocument === true) {
      dispatch({
        type: "messenger/set",
        payload: {
          key: "inboxDocument",
          value: true,
        },
      });
    }

    dispatch({
      type: "app/setDisabledFeatures",
      payload: disabledFeatures,
    });
  }, []);

  const handleMinimize = () => {
    dispatch({
      type: "app/setOpen",
      payload: false,
    });
  };

  const handleOpen = (event) => {
    if (dragging === false) {
      dispatch({
        type: "app/setOpen",
        payload: true,
      });
    }
  };

  const handleDragStop = (event) => {
    setTimeout(() => {
      setDragging(false);
    }, 100);
  };

  return (
    <div className="cleanslate cortico-widget no-print DoNotPrint">
      <div className="tailwind preflight">
        <div
          className={classNames(
            "tw-fixed tw-bottom-5 tw-right-5 tw-z-10005  tw-text-white cortico-widget-body",
            open === true
              ? "tw-rounded-xl tw-border tw-bg-white"
              : "tw-rounded-full "
          )}
          ref={containerRef}
        >
          {open === true ? (
            <>
              <CorticoPlugin onMinimize={handleMinimize} />
            </>
          ) : (
            <Draggable onDrag={() => setDragging(true)} onStop={handleDragStop}>
              <div
                className="tw-transition-colors tw-duration-200 tw-ease-in-out tw-p-4 tw-cursor-pointer tw-rounded-full tw-bg-gradient-to-bl  tw-bg-indigo-600 tw-shadow-outer 
                hover:tw-bg-none hover:tw-bg-blue-1000"
                onClick={handleOpen}
              >
                <img
                  draggable={false}
                  dragstart={false}
                  className="tw-h-8 tw-w-8 tw-cursor-pointer tw-select-none tw-pointer-events-none"
                  src={CorticoImg}
                />
              </div>
            </Draggable>
          )}
        </div>
        <>{props.document === true ? <SetupDocuments /> : null}</>
      </div>
    </div>
  );
}

export default function CorticoWidget(container, replaceNode, opts) {
  return render(
    <Provider store={store}>
      <App {...opts} />
    </Provider>,
    container,
    replaceNode
  );
}
