import { create } from "../../Utils/Utils";
import "./Dashboard.css";

export default function () {
  const sidebar = create("div", {
    attrs: {
      class: "dashboard-sidebar",
    },
    text: "Sidebar",
  });

  const container = create(
    "div",
    {
      attrs: {
        class: "dashboard-container dashboard-2",
      },
      text: "Hello Worldsssssss stop caching man",
    },
    sidebar
  );

  return container;
}
