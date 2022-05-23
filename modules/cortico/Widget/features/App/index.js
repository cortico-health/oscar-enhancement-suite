const initialState = {
  open: false,
  disabledFeatures: [],
  clinic_name: "",
  refresh: null,
  refreshToken: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case "app/setOpen":
      return { ...state, open: action.payload };

    case "app/set":
      return {
        ...state,
        ...action.payload,
      };

    case "app/addDisabledFeatures":
      return {
        ...state,
        disabledFeatures: [...state.disabledFeatures, action.payload],
      };

    case "app/setDisabledFeatures":
      return { ...state, disabledFeatures: action.payload };
    default:
      return state;
  }
}
