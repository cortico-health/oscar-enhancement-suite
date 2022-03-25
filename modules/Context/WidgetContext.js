import { createContext } from "preact";

export const autoContext = {
  error: null,
};

export const AutoContext = createContext(autoContext);
