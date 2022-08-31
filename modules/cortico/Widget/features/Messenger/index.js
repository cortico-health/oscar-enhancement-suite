export const initialState = {
  to: null,
  subject: null,
  body: null,
  scheme: "email",
  encounter: null,
  attachment: null,
  document: null,
  eform: null,
  phone: null,
  inboxDocument: null,
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
