export function eligCheckReducer(
  state = {
    current: null,
    complete: false,
    total: null,
    error: null,
    running: false,
    empty: false,
    teleplan: false,
  },
  action
) {
  switch (action.type) {
    case "eligCheck/set":
      const temp = Object.assign({}, state);
      temp[action.payload.key] = action.payload.value;
      return temp;

    case "eligCheck/setAll":
      return Object.assign({}, action.payload);
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
    default:
      return state;
  }
}
