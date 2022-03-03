import classNames from "classnames";
import Logo from "../../../resources/icons/logo.svg";

export default function WidgetSidebar({ onClick, items, ...props }) {
  return (
    <div className="tw-w-full tw-bg-cortico-blue tw-h-full tw-rounded-l-xl tw-px-6 tw-shadow-xl">
      <div className="tw-py-8">
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
          onClick={() => onClick(item.name)}
        >
          <p
            className={classNames(
              "tw-cursor-pointer",
              item.current === true ? "tw-opacity-100" : "tw-opacity-80"
            )}
          >
            {item.icon}
          </p>
          <p
            className={classNames(
              "tw-text-xl tw-cursor-pointer",
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
