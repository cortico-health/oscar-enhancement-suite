import Login from "../../Login/Login";
import { useState, useEffect } from "preact/hooks";
import WidgetSidebar from "./WidgetSidebar";
import WidgetSettings from "./WidgetSettings";
import WidgetAutomation from "./WidgetAutomation";
import { UserIcon, DesktopComputerIcon, CogIcon } from "@heroicons/react/solid";

export default function CorticoPlugin() {
  const [items, setItems] = useState([
    {
      name: "Account",
      icon: <UserIcon className="tw-w-8 tw-h-8" />,
      current: true,
    },
    {
      name: "Automation",
      icon: <DesktopComputerIcon className="tw-w-8 tw-h-8" />,
      current: false,
    },
    {
      name: "Settings",
      icon: <CogIcon className="tw-w-8 tw-h-8" />,
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

  return (
    <div className="tw-flex">
      <div className="">
        <WidgetSidebar items={items} onClick={handleClick} />
      </div>
      <div className="tw-p-4  tw-text-black tw-min-h-[300px] tw-min-w-[300px]">
        {activeItem === "Account" ? (
          <Login />
        ) : activeItem === "Automation" ? (
          <WidgetAutomation />
        ) : activeItem === "Settings" ? (
          <WidgetSettings />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}