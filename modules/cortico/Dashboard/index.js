import "./Dashboard.css";
import { render } from "preact";
import Sidebar from "./Sidebar";

export default function () {
  const container = document.querySelector(".cortico-modal");

  const Dashboard = () => {
    return (
      <div className="tw-flex tw-text-xl tw-h-[800px]">
        <Sidebar />
        <div className="tw-w-full tw-p-4">Content goes here</div>
      </div>
    );
  };
  console.log("its failing here");
  return render(<Dashboard />, container);
}
