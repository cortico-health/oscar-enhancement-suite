import { render } from "preact";
import { useRef, useEffect } from "preact/hooks";

function Content() {
  const containerRef = useRef();

  const handleDrag = (e) => {
    e.preventDefault();
    //console.log("Handle drag", e);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    console.log(e);

    const x = e.clientX;
    const y = e.clientY;

    const container = containerRef.current;
    container.style.top = container.offsetTop - y + "px";
    container.style.left = container.offsetLeft - x + "px";
    container.classList.remove("tw-bottom-5");
    container.classList.remove("tw-right-5");
    //container.style.right = "initial";
  };

  return (
    <div className="cleanslate cortico-widget">
      <div className="tailwind preflight">
        <div
          draggable={true}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          className="tw-fixed tw-bottom-5 tw-right-5 tw-z-10005 tw-bg-black tw-p-4 tw-text-white tw-rounded-md"
          ref={containerRef}
        >
          Hello World
        </div>
      </div>
    </div>
  );
}

export default function CorticoWidget(container, replaceNode) {
  return render(<Content />, container, replaceNode);
}
