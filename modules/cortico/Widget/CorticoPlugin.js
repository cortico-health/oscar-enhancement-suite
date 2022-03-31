import Login from "../../Login/Login";
import { useState, useEffect } from "preact/hooks";
import WidgetSidebar from "./WidgetSidebar";
import WidgetSettings from "./WidgetSettings";
import WidgetAutomation from "./WidgetAutomation";
import { isLoggedIn } from "../../Utils/Utils";
import AccountInformation from "./AccountInformation";
import { MinusCircleIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import WidgetMessenger from "./messenger/WidgetMessenger";
import Notifications from "./features/Notifications/Notifications";
import { loadExtensionStorageValue } from "../../Utils/Utils";
import { getClinicSettings } from "../../Api/Api";
import storage from "./storage/index";

export default function CorticoPlugin({ onMinimize, ...props }) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.sidebar);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [activeItem, setActiveItem] = useState("Account");

  const handleClick = (name) => {
    dispatch({
      type: "sidebar/setCurrent",
      payload: name,
    });
  };

  useEffect(() => {
    const activeItem = items.find((item) => item.current === true);
    setActiveItem(activeItem.name);
  }, [items]);

  useEffect(() => {
    isLoggedIn().then((result) => {
      dispatch({
        type: "auth/setLoggedIn",
        payload: result,
      });
    });
  }, []);

  useEffect(() => {
    if (loggedIn === true) {
      storage
        .getItem("oes")
        .then((settings) => {
          return !settings
            ? loadExtensionStorageValue("jwt_access_token")
            : Promise.reject("Settings loaded");
        })
        .then((token) => getClinicSettings(token))
        .then((response) => response.json())
        .then((settings) => storage.setItem("oes", settings))
        .catch((error) => console.error(error));
    }
  }, [loggedIn]);

  return (
    <div className="tw-flex tw-h-full">
      <Notifications />
      <div className="">
        <WidgetSidebar items={items} onClick={handleClick} />
      </div>
      <div className=" tw-text-black tw-relative">
        <div
          className="tw-absolute tw-top-2 tw-right-2 tw-cursor-pointer"
          onClick={onMinimize}
        >
          <MinusCircleIcon className="tw-w-6 tw-h-6 tw-text-yellow-400" />
        </div>
        {activeItem === "Account" ? (
          <div className="tw-p-4 tw-mx-auto tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-h-full">
            {loggedIn === true ? <AccountInformation /> : <Login />}
          </div>
        ) : activeItem === "Automation" ? (
          <div className="tw-p-4 tw-overflow-y-auto tw-max-h-[600px]">
            <WidgetAutomation />
          </div>
        ) : activeItem === "Settings" ? (
          <div className="tw-p-4 tw-h-full">
            <WidgetSettings />
          </div>
        ) : activeItem === "Messenger" ? (
          <div className="tw-p-4 tw-h-full">
            <WidgetMessenger />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
