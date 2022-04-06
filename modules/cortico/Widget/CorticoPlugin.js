import Login from "../../Login/Login";
import { useState, useEffect } from "preact/hooks";
import WidgetSidebar from "./WidgetSidebar";
import WidgetSettings from "./WidgetSettings";
import WidgetAutomation from "./WidgetAutomation";
import { isLoggedIn } from "../../Utils/Utils";
import AccountInformation from "./AccountInformation";
import { MinusIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import WidgetMessenger from "./messenger/WidgetMessenger";
import Notifications from "./features/Notifications/Notifications";
import { loadExtensionStorageValue } from "../../Utils/Utils";
import { getClinicSettings } from "../../Api/Api";
import storage from "./storage/index";
import Dialog from "./features/Dialog/Dialog";
import { RefreshIcon } from "@heroicons/react/outline";
import Button from "../../core/Button";

export default function CorticoPlugin({ onMinimize, ...props }) {
  const dispatch = useDispatch();
  const { refresh } = useSelector((state) => state.app);
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
      let settingsToLoad = null;
      storage
        .getItem("oes")
        .then((settings) => {
          if (!settings) {
            return loadExtensionStorageValue("jwt_access_token");
          } else {
            settingsToLoad = settings;
            return Promise.reject("Settings loaded");
          }
        })
        .then((token) => getClinicSettings(token))
        .then((response) => response.json())
        .then((settings) => (settingsToLoad = settings))
        .catch((error) => console.error(error))
        .finally(() => {
          if (settingsToLoad) {
            dispatch({
              type: "app/set",
              payload: settingsToLoad,
            });
          }
        });
    }
  }, [loggedIn]);

  const handleRefresh = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };

  return (
    <div className="tw-flex tw-h-full">
      {refresh ? (
        <RefreshDialog
          title={refresh.title}
          desc={refresh.description}
          onClick={handleRefresh}
        />
      ) : null}
      <Notifications />
      <div className="">
        <WidgetSidebar items={items} onClick={handleClick} />
      </div>
      <div className=" tw-text-black tw-relative">
        <div
          className="tw-absolute tw-top-2 tw-right-2 tw-cursor-pointer tw-bg-amber-400 tw-rounded-full"
          onClick={onMinimize}
        >
          <MinusIcon className="tw-w-5 tw-h-5 tw-text-white" />
        </div>
        {activeItem === "Account" ? (
          <div className="tw-p-4 tw-h-full">
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

function RefreshDialog({ title, desc, onClick, ...props }) {
  return (
    <Dialog open={true}>
      <div className="tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-top-[50%] tw-translate-y-[-50%] tw-shadow-md">
        <div className="tw-bg-white tw-rounded-lg tw-p-4">
          <div className="tw-flex tw-justify-center">
            <RefreshIcon className="tw-text-indigo-600 tw-w-10 tw-h-10"></RefreshIcon>
          </div>
          <p className="tw-text-base tw-text-gray-900 tw-font-medium tw-text-center tw-mt-4">
            {title}
          </p>
          <p className="tw-mt-2 tw-text-gray-500 tw-text-center tw-text-sm tw-max-w-[300px]">
            {desc}
          </p>
          <div className="tw-flex tw-justify-center">
            <Button
              onClick={onClick}
              className="tw-bg-indigo-600 tw-mt-6 tw-w-full tw-text-white tw-cursor-pointer"
              variant="custom"
              size="sm"
            >
              <div className="tw-text-center tw-w-full tw-cursor-pointer">
                Refresh
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
