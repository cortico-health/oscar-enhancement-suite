export const initialState = {
  running: false,
  complete: false,
  total: null,
  current: null,
  empty: false,
  error: false,
  demographicNo: null,
};

export function setupPharmacyReducer(state = initialState, action) {
  switch (action.type) {
    case "setupPharmacy/set":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case "setupPharmacy/setAll":
      return { ...state, ...action.payload };

    case "setupPharmacy/reset":
      return { ...state, ...initialState };
    default:
      return state;
  }
}

export function setupPharmacyFailuresReducer(state = [], action) {
  switch (action.type) {
    case "setupPharmacyFailures/add":
      let temp = state.slice();
      temp.push(action.payload);
      return temp;
    case "setupPharmacyFailures/setAll":
      return action.payload.slice();
    case "setupPharmacyFailures/reset":
      return [];
    default:
      return state;
  }
}
