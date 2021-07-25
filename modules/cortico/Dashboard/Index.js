import "./Dashboard.css";
import { render } from "preact";
import Sidebar from "./Sidebar";

export default function () {
  const container = document.querySelector(".cortico-modal");

  const Dashboard = () => {
    return (
      <div className="tw-text-xl tw-text-blue-800">
        <Sidebar />
      </div>
    );
  };
  console.log("its failing here");
  return render(<Dashboard />, container);
}
