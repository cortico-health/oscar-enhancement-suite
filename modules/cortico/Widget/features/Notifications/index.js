import { nanoid } from "nanoid";

/*
  notifications: [
    {
      type: "success",
      message: "Email has been successfully sent",
      title: "Successfull operation",
      id: nanoid(),
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
        notifications: [...state.notifications, action.payload],
      };
    case "notifications/remove":
      const id = action.payload;
      const temp = state.notifications.filter(
        (notification) => notification.id !== id
      );
      return {
        ...state,
        notifications: temp,
      };
    default:
      return state;
  }
}
