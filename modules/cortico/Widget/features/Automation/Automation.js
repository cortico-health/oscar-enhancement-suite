const initialState = {
  option: "none",
};

export const options = {
  SETUP_PREFERRED_PHARMACY: "phar",
  ELIGIBILITY_CHECK: "elig",
};

export function automationReducer(state = initialState, action) {
  switch (action.type) {
    case "automation/setOption":
      return { ...state, option: action.payload };
    default:
      return state;
  }
}
