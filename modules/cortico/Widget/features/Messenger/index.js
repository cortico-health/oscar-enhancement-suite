export const initialState = {
  to: null,
  subject: null,
  message: null,
  scheme: null,
  encounter: null,
  attachment: null,
  document: null,
  eform: null,
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
