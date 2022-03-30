import classNames from "classnames";
import Logo from "../../../resources/icons/logo.svg";

export default function WidgetSidebar({ onClick, items, ...props }) {
  return (
    <div className="tw-w-full tw-h-full tw-rounded-l-xl tw-px-6 tw-shadow-right tw-bg-blue-1000">
      <div className="tw-py-8 tw-flex tw-flex-col tw-justify-between tw-h-full tw-w-full">
        <div>
          <div className="tw-mb-8">
            <img className="tw-w-[140px] tw-mx-auto" src={Logo} alt="Cortico" />
            <span className="tw-block tw-text-white tw-text-xs tw-text-center tw-mt-2 tw-font-sans tw-font-medium tw-tracking-wider">
              Oscar Enhancement Suite
            </span>
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
                  "tw-text-base tw-cursor-pointer tw-tracking-wide",
                  item.current === true ? "tw-opacity-100" : "tw-opacity-60"
                )}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="tw-text-center tw-text-white tw-text-sm tw-font-sans tw-font-semibold tw-mt-8">
          2022.3.29
        </div>
      </div>
    </div>
  );
}
