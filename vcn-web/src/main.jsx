import { render } from 'preact'
import { App } from './app'
import "./assets/css/index.css";

import "preact/debug";
import "preact/devtools";
import { StateProvider } from './state';

render(
    <StateProvider>
      <App />
    </StateProvider>,
    document.getElementById("app")
  );
