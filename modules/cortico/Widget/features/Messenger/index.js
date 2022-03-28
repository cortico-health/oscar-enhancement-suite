import { getCorticoUrl } from "../../../../Utils/Utils";

export const initialState = {
  to: null,
  subject: null,
  body: null,
  scheme: null,
  encounter: null,
  attachment: null,
  document: null,
  eform: null,
  clinic_host: getCorticoUrl().replace(/http.?:\/\//, ""),
};

export function messengerReducer(state = initialState, action) {
  switch (action.type) {
    case "messenger/set":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "messenger/setAll":
      return { ...state, ...action.payload };
    case "messenger/reset":
      return { ...state, ...initialState };
    default:
      return state;
  }
}
