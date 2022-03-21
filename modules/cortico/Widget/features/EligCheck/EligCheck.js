const initialState = {
  current: null,
  complete: false,
  total: null,
  error: null,
  running: false,
  empty: false,
  teleplan: false,
};

export function eligCheckReducer(state = initialState, action) {
  switch (action.type) {
    case "eligCheck/set":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case "eligCheck/setAll":
      return { ...state, ...action.payload };
    case "eligCheck/reset":
      return { ...state, ...initialState };
    default:
      return state;
  }
}

export function eligCheckFailsReducer(state = [], action) {
  switch (action.type) {
    case "eligCheckFails/add":
      return state.slice().push(action.payload);

    case "eligCheckFails/setAll":
      return action.payload.slice();

    case "eligCheckFails/reset":
      return [];
    default:
      return state;
  }
}
