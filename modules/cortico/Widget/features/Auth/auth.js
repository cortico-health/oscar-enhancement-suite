const initialState = {
  isLoggedIn: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "auth/setLoggedIn":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}
