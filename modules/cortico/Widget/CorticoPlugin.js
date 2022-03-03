import Login from "../../Login/Login";
import { useState } from "react";
import { UserIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import Logo from "../../../resources/icons/logo.svg";
function Sidebar() {
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
  ]);

  return (
    <div className="tw-w-full tw-bg-cortico-blue tw-h-full tw-rounded-l-md tw-px-4">
      <div className="tw-py-6 tw-pr-4">
        <img className="tw-w-[120px]" src={Logo} alt="Cortico" />
      </div>
      {items.map((item, i) => (
        <div
          className={classNames(
            "tw-font-sans tw-flex tw-space-x-4 tw-my-2 tw-items-center tw-px-4 tw-py-3 tw-cursor-pointer",
            item.current === true
              ? "tw-bg-white tw-bg-opacity-20 tw-rounded-md"
              : "",
            "hover:tw-bg-white hover:tw-bg-opacity-20 hover:tw-rounded-md"
          )}
          key={i}
        >
          <p
            className={classNames(
              item.current === true ? "tw-opacity-100" : "tw-opacity-80"
            )}
          >
            {item.icon}
          </p>
          <p
            className={classNames(
              "tw-text-xl",
              item.current === true ? "tw-opacity-100" : "tw-opacity-80"
            )}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function CorticoPlugin() {
  return (
    <div className="tw-flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="tw-p-4  tw-text-black">
        <Login />
      </div>
    </div>
  );
}
