import classNames from "classnames";
import Logo from "../../../resources/icons/logo-regular-white.svg";
import { useSelector } from "react-redux";

export default function WidgetSidebar({ onClick, ...props }) {
  const { items } = useSelector((state) => state.sidebar);

  return (
    <div className="tw-w-full tw-h-full tw-rounded-l-xl tw-px-2 tw-shadow-right tw-bg-gradient-to-bl tw-from-indigo-500 tw-to-blue-1000 tw-bg-blue-1000 ">
      <div className="tw-py-8 tw-flex tw-flex-col tw-justify-between tw-h-full tw-w-full">
        <div>
          <div className="tw-mb-8">
            <img className="tw-w-[30px] tw-mx-auto" src={Logo} alt="Cortico" />
          </div>
          {items.map((item, i) =>
            item.visible !== false ? (
              <div
                className={classNames(
                  "tw-font-sans tw-flex tw-my-2 tw-items-center tw-cursor-pointer tw-flex-col tw-py-2 tw-w-[65px]",
                  item.current === true
                    ? "tw-bg-white tw-bg-opacity-10 tw-rounded-md"
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
                    "tw-text-3xs tw-cursor-pointer tw-tracking-wide tw-m-0 tw-p-0",
                    item.current === true ? "tw-opacity-100" : "tw-opacity-60"
                  )}
                >
                  {item.name}
                </p>
              </div>
            ) : null
          )}
        </div>
        <div className="tw-text-center tw-text-white tw-text-2xs tw-font-sans tw-font-normal tw-opacity-50 tw-mt-8">
          2022.6.22
        </div>
      </div>
    </div>
  );
}
