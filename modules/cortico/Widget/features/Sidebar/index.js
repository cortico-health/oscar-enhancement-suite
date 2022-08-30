import {
  UserIcon,
  DesktopComputerIcon,
  ChatIcon,
  CogIcon,
  IdentificationIcon,
  ChatAlt2Icon
} from "@heroicons/react/outline";

const initialState = {
  items: [
    {
      name: "Patient",
      icon: <IdentificationIcon className="tw-w-6 tw-h-6" />,
      current: false, // default to messenger if on eChart page
      visible: false,
    },
    {
      name: "Automation",
      icon: <DesktopComputerIcon className="tw-w-6 tw-h-6" />,
      current: false,
    },
    {
      name: "Messenger",
      icon: <ChatIcon className="tw-w-6 tw-h-6" />,
      current: false, // default to messenger if on eChart page
    },
    {
      name: "Account",
      icon: <UserIcon className="tw-w-6 tw-h-6" />,
      current: true,
    },
    {
      name: "Settings",
      icon: <CogIcon className="tw-w-6 tw-h-6" />,
      current: false,
    },
    {
      name: "Provider Messaging",
      icon: <ChatAlt2Icon className="tw-w-6 tw-h-6" />,
      current: false,
    },
    {
      name: "VCN Patient",
      icon: <ChatAlt2Icon className="tw-w-6 tw-h-6" />,
      current: false,
      visible: false,
    },
    {
      name: "VCN Add Chat",
      icon: <ChatAlt2Icon className="tw-w-6 tw-h-6" />,
      current: false,
      visible: false,
    },
  ],
};

export function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case "sidebar/setVisible":
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      item.visible = action.payload.visible;
      return { ...state };
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
