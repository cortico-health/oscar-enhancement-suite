import { render } from "preact";
import { App } from "./app";
import "./assets/css/index.css";
import { StateProvider } from "./state";

// const components = import.meta.globEager("./components/**/*.jsx");
// Object.entries(components).forEach(([path, definition]) => {
//   <definition.default/>
// });

render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("app")
);
