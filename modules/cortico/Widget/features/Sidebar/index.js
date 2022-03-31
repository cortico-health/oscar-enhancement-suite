import {
  UserIcon,
  DesktopComputerIcon,
  ChatIcon,
  CogIcon,
} from "@heroicons/react/solid";

const initialState = {
  items: [
    {
      name: "Account",
      icon: <UserIcon className="tw-w-4 tw-h-4" />,
      current: true,
    },
    {
      name: "Automation",
      icon: <DesktopComputerIcon className="tw-w-4 tw-h-4" />,
      current: false,
    },
    {
      name: "Settings",
      icon: <CogIcon className="tw-w-4 tw-h-4" />,
      current: false,
    },
    {
      name: "Messenger",
      icon: <ChatIcon className="tw-w-4 tw-h-4" />,
      current: false,
    },
  ],
};

export function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case "sidebar/addItems":
      const temp = state.slice();
      temp.push(action.payload);
      return temp;
    case "sidebar/setCurrent": {
      const temp = state.items.slice().map((i) => {
        if (i.name === action.payload) {
          return { ...i, current: true };
        }
        return { ...i, current: false };
      });
      return { ...state, items: temp };
    }
    default:
      return state;
  }
}