import { nanoid } from "nanoid";

/*
  notifications: [
    {
      type: "success",
      message: "Email has been successfully sent",
      title: "Successfull operation",
      key: nanoid(),
    },
  ],
*/

const initialState = {
  notifications: [],
};

export function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case "notifications/add":
      return {
        ...state,
        notification: [...state.notifications, ...action.payload],
      };
    case "notifications/remove":
      const key = action.payload;
      const temp = state.notifications.filter(
        (notification) => notification.key !== key
      );
      return {
        ...state,
        notifications: temp,
      };
    default:
      return state;
  }
}
