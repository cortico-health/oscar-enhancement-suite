const initialState = {
  open: false,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case "app/setOpen":
      return { ...state, open: action.payload };
    default:
      return state;
  }
}
