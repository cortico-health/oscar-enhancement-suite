const initialState = {
  info: null,
};

export function patientReducer(state = initialState, action) {
  switch (action.type) {
    case "app/setPatientInfo":
      return {
        ...state,
        info: { ...action.payload },
      };

    default:
      return state;
  }
}
