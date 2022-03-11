import { render } from "preact";
import { useRef } from "preact/hooks";
import CorticoImg from "../../../resources/icons/cortico-128.png";
import CorticoPlugin from "./CorticoPlugin";
import { useState } from "preact/hooks";
import { WidgetContext } from "../../Context/WidgetContext";

function Content() {
  const containerRef = useRef();

  const changeDark = () => {
    console.log("This ran");
    setThemes({
      light: {
        foreground: "#000000",
        background: "#eeeeee",
      },
      dark: {
        foreground: "#ffffdsadaff",
        background: "#2222dsadsadsa22",
      },
    });
  };

  const [themes, setThemes] = useState({
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
    changeDark: changeDark,
  });

  const [open, setOpen] = useState(false);

  return (
    <WidgetContext.Provider value={themes}>
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
    </WidgetContext.Provider>
  );
}

export default function CorticoWidget(container, replaceNode) {
  return render(<Content />, container, replaceNode);
}
