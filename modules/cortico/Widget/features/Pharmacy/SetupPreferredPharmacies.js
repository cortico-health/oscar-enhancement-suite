export const initialState = {
  running: false,
  complete: false,
  total: null,
  current: null,
  empty: false,
  error: false,
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
    default:
      return state;
  }
}

export function setupPharmacyFailuresReducer(state = [], action) {
  switch (action.type) {
    case "setupPharmacyFailures/add":
      return state.slice().push(action.payload);

    case "setupPharmacyFailures/setAll":
      return action.payload.slice();
    default:
      return state;
  }
}
