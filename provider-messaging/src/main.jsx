import { render } from "preact";
import { QueryClient, QueryClientProvider } from "react-query";
import { App } from "./app";
import "./assets/css/index.css";
import { StateProvider } from "./state";

// const components = import.meta.globEager("./components/**/*.jsx");
// Object.entries(components).forEach(([path, definition]) => {
//   <definition.default/>
// });

const queryClient = new QueryClient()

render(
  <QueryClientProvider client={ queryClient }>
    <StateProvider>
      <App />
    </StateProvider>
  </QueryClientProvider>,
  document.getElementById("app")
);
