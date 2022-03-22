import Login from "../../Login/Login";
import { useState, useEffect } from "preact/hooks";
import WidgetSidebar from "./WidgetSidebar";
import WidgetSettings from "./WidgetSettings";
import WidgetAutomation from "./WidgetAutomation";
import {
  UserIcon,
  DesktopComputerIcon,
  ChatIcon,
  CogIcon,
} from "@heroicons/react/solid";
import { isLoggedIn } from "../../Utils/Utils";
import AccountInformation from "./AccountInformation";
import NotAvailable from "./NotAvailable";
import { MinusCircleIcon } from "@heroicons/react/solid";

export default function CorticoPlugin({ onMinimize, ...props }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState([
    {
      name: "Account",
      icon: <UserIcon className="tw-w-6 tw-h-6" />,
      current: true,
    },
    {
      name: "Automation",
      icon: <DesktopComputerIcon className="tw-w-6 tw-h-6" />,
      current: false,
    },
    {
      name: "Settings",
      icon: <CogIcon className="tw-w-6 tw-h-6" />,
      current: false,
    },
    {
      name: "Messenger",
      icon: <ChatIcon className="tw-w-6 tw-h-6" />,
      current: false,
    },
  ]);
  const [activeItem, setActiveItem] = useState("Account");

  const handleClick = (name) => {
    const newItems = items.map((item) => {
      if (item.name === name) {
        item.current = true;
      } else {
        item.current = false;
      }
      return item;
    });
    setItems(newItems);
  };

  useEffect(() => {
    const activeItem = items.find((item) => item.current === true);
    setActiveItem(activeItem.name);
  }, [items]);

  useEffect(() => {
    isLoggedIn().then((result) => {
      setLoggedIn(result);
    });
  }, []);

  const handleMinimize = () => {};

  return (
    <div className="tw-flex tw-h-full tw-bg-white tw-rounded-xl">
      <div className="">
        <WidgetSidebar items={items} onClick={handleClick} />
      </div>
      <div className=" tw-text-black tw-relative">
        <div
          className="tw-absolute tw-top-2 tw-right-2 tw-cursor-pointer"
          onClick={onMinimize}
        >
          <MinusCircleIcon className="tw-w-8 tw-h-8 tw-text-yellow-400 tw-borderg" />
        </div>
        {activeItem === "Account" ? (
          <div className="tw-p-4 tw-mx-auto tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
            {loggedIn === true ? <AccountInformation /> : <Login />}
          </div>
        ) : activeItem === "Automation" ? (
          <div className="tw-p-4 tw-overflow-y-auto tw-max-h-[600px]">
            <WidgetAutomation />
          </div>
        ) : activeItem === "Settings" ? (
          <div className="tw-p-4 tw-w-[700px] tw-h-full">
            <WidgetSettings />
          </div>
        ) : activeItem === "Messenger" ? (
          <div className="tw-w-[320px] tw-h-full">
            <NotAvailable />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
