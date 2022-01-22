import { render } from "preact";

function Sidebar() {
  return (
    <div className="tw-fixed tw-right-0 tw-top-0 tw-bottom-0 tw-w-[400px] tw-bg-white tw-text-black tw-p-5 tw-z-10003">
      Sidebar
    </div>
  );
}

function initSidebar(parent, replaceNode) {
  return render(<Sidebar />, parent, replaceNode);
}

export default initSidebar;
