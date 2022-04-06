const initialState = {
  open: false,
};

export function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case "dialog/setOpen":
      return { ...state, open: action.payload };
    default:
      return state;
  }
}
