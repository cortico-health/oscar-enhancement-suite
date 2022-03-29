import { nanoid } from "nanoid";

const initialState = {
  notifications: [
    {
      type: "success",
      message: "Email has been successfully sent",
      key: nanoid(),
    },
  ],
};

export function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case "notifications/add":
      return {
        ...state,
        notification: [...state.notifications, ...action.payload],
      };
    default:
      return state;
  }
}
