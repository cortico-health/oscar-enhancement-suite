import { GET_USERS, SELECT_USER, ADD_USER } from "../actions";
import { usersData } from "../data";

export const usersReducer = (state, action) => {
  switch (action.type) {
    case SELECT_USER: {
      return {
        ...state,
        selected: state.all.find((user) => user.id == action.payload)
          ? action.payload
          : null,
      };
    }
    case ADD_USER: {
      state.all.push(action.payload);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
