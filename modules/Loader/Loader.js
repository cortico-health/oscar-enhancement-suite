import { create } from "../Utils/Utils";
import "./Loader.css";

export function Loader() {
  const inner = create("div", {
    attrs: {
      class: "inner-loader",
    },
  });

  const loader = create(
    "div",
    {
      attrs: {
        class: "loader",
      },
    },
    inner
  );

  const loaderContainer = create(
    "div",
    {
      attrs: {
        class: "loader-container",
      },
    },
    loader
  );

  return loaderContainer;
}
