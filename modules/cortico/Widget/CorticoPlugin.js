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
import {
  loadExtensionStorageValue,
  removeExtensionStorageValue,
} from "../../Utils/Utils";
import { getClinicSettings, getBootstrap } from "../../Api/Api";
import storage from "./storage/index";
import Dialog from "./features/Dialog/Dialog";
import { RefreshIcon } from "@heroicons/react/outline";
import Button from "../../core/Button";
import { BroadcastChannel } from "broadcast-channel";
import { handleTokenExpiry } from "./common/utils";
import PatientPanel from "./PatientPanel";
import PatientAdapter from "./adapters/PatientAdapter";
export default function CorticoPlugin({ onMinimize, ...props }) {
  const dispatch = useDispatch();
  const { refresh, refreshToken, uid } = useSelector((state) => state.app);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClick = (name) => {
    dispatch({
      type: "sidebar/setCurrent",
      payload: name,
    });
  };

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
        .then((response) => {
          return Promise.all([response.json(), Promise.resolve(response)]);
        })
        .then((results) => {
          settingsToLoad = results[0];
          const response = results[1];
          if (response.status !== 200) {
            if (!handleTokenExpiry(response, settingsToLoad)) {
              throw Error(response.statusText);
            }
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          if (settingsToLoad) {
            dispatch({
              type: "app/set",
              payload: settingsToLoad,
            });
          }
        });

      loadExtensionStorageValue("jwt_access_token")
        .then((token) => {
          return getBootstrap(token);
        })
        .then((response) => {
          return Promise.all([response.json(), Promise.resolve(response)]);
        })
        .then((results) => {
          const [bootstrap, response] = results;
          if (response.status !== 200) {
            if (!handleTokenExpiry(response, bootstrap)) {
              throw Error(response.statusText);
            }
          }
        })
        .catch((error) => console.error(error));
    }
  }, [loggedIn]);

  const handleRefresh = () => {
    setTimeout(() => {
      window.location.reload();
    });
  };

  const handleSignOut = async () => {
    const remove = [
      "jwt_username",
      "jwt_expired",
      "jwt_access_token",
      "name",
      "clinicname",
      "customUrlSuffix",
    ];

    for (let i = 0; i < remove.length; i++) {
      await removeExtensionStorageValue(remove[i]);
    }

    const authChannel = new BroadcastChannel("cortico/oes/auth");
    authChannel.postMessage({
      title: "Sign Out Detected",
      description: "Refresh is required to have the plugin working smoothly",
      uid,
    });
    authChannel.close();

    storage.removeItem("oes").then(() => {
      setTimeout(() => window.location.reload());
    });
  };

  const handleRefreshToken = () => {
    dispatch({
      type: "app/set",
      payload: {
        refreshToken: null,
      },
    });
  };

  return (
    <div className="tw-flex tw-h-full">
      <PatientAdapter></PatientAdapter>
      {refresh ? (
        <AlertDialog
          icon={
            <RefreshIcon className="tw-text-indigo-600 tw-w-10 tw-h-10"></RefreshIcon>
          }
          title={refresh.title}
          desc={refresh.description}
          onClick={handleRefresh}
          callToActionText="Refresh"
        />
      ) : null}
      {refreshToken ? (
        <AlertDialog
          icon={
            <RefreshIcon className="tw-text-indigo-600 tw-w-10 tw-h-10"></RefreshIcon>
          }
          title={refreshToken.title}
          desc={
            <>
              The following operation was unsuccessful because:{" "}
              <span className="tw-text-red-600 tw-bg-red-200">
                {refreshToken.description}
              </span>{" "}
              <span className="tw-block tw-mt-2">
                You will need to{" "}
                <span className="tw-font-bold tw-text-black">
                  sign out and login again
                </span>{" "}
                to refresh your session.
              </span>
            </>
          }
          onClick={handleSignOut}
          callToActionText="Okay, I understand, Sign me out"
          footer={
            <p
              onClick={handleRefreshToken}
              className="tw-text-2xs tw-text-blue-800 tw-text-center tw-mt-2 tw-cursor-pointer"
            >
              I will sign out myself.
            </p>
          }
        />
      ) : null}
      <Notifications />
      <div className="">
        <WidgetSidebar onClick={handleClick} />
      </div>

      <div className=" tw-text-black tw-relative">
        <div
          className="tw-absolute tw-top-2 tw-right-2 tw-cursor-pointer tw-bg-amber-400 tw-rounded-full"
          onClick={onMinimize}
        >
          <MinusIcon className="tw-w-5 tw-h-5 tw-text-white" />
        </div>
        <PluginContentRenderer></PluginContentRenderer>
      </div>
    </div>
  );
}

function AlertDialog({
  icon,
  title,
  desc,
  onClick,
  callToActionText,
  footer,
  ...props
}) {
  return (
    <Dialog open={true}>
      <div className="tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-top-[50%] tw-translate-y-[-50%] tw-shadow-md">
        <div className="tw-bg-white tw-rounded-lg tw-p-4">
          <div className="tw-flex tw-justify-center">{icon}</div>
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
                {callToActionText}
              </div>
            </Button>
          </div>
          {footer}
        </div>
      </div>
    </Dialog>
  );
}

function PluginContentRenderer() {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { items: sidebarItems } = useSelector((state) => state.sidebar);
  const [activeItem, setActiveItem] = useState("Account");
  useEffect(() => {
    const activeItem = sidebarItems.find((item) => item.current);
    if (activeItem) {
      setActiveItem(activeItem.name);
    }
  }, [sidebarItems]);

  return (
    <>
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
      ) : activeItem === "Patient" ? (
        <div className="tw-p-4 tw-h-full">
          <PatientPanel />
        </div>
      ) : null}
    </>
  );
}
