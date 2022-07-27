import { LOGIN, GET_USER, LOGOUT } from "../actions";

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        // payload fetch/axios username - password, create token etc.
        ...action.payload,
      };
    }
    case LOGOUT: {
      return {};
    }
    case GET_USER: {
      return {
        ...state,
        // payload - get from cookies, compare tokens etc...
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
