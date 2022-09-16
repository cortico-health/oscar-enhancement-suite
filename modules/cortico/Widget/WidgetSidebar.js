import classNames from "classnames";
import Logo from "../../../resources/icons/cortico-logo.svg";
import { useSelector } from "react-redux";
import { useEffect,useState } from "preact/hooks";
import { useStore } from "./store/mobx";

export default function WidgetSidebar({ onClick, ...props }) {
  const { conversationStore } = useStore();
  const { items } = useSelector((state) => state.sidebar);

  const [hasUnreadMessages,setHasUnreadMessages] = useState(false);

  useEffect(() => {
    if (!conversationStore.conversations.all) return;

    const existingUnreadMessages = conversationStore.conversations.all.find(conversation => conversation.unread_messages_count > 0);

    if (!existingUnreadMessages) {
      setHasUnreadMessages(false);
      return;
    }

    setHasUnreadMessages(true);

  },[conversationStore.conversations.all])

  return (
    /* shadow fixed pt-6 pb-3 z-10 lg:flex hidden flex-col justify-between bg-white left-0 h-screen w-20 */
    <div className="tw-w-full tw-h-full tw-rounded-l-xl tw-px-2 tw-shadow">
      <div className="tw-py-8 tw-flex tw-flex-col tw-justify-between tw-h-full tw-w-full">
        <div>
          <div className="tw-mb-8">
            <img className="tw-w-[40px] tw-mx-auto" src={Logo} alt="Cortico" />
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            {items.map((item, i) =>
              item.visible !== false ? (
                <div
                  className={classNames(
                    "tw-font-sans tw-flex tw-my-2 tw-items-center tw-cursor-pointer tw-flex-col tw-py-2 tw-w-[65px] tw-relative",
                    "hover:tw-rounded-md hover:tw-bg-blue-200 hover:cursor-pointer",
                    item.current === true && "tw-rounded-md tw-bg-blue-500"
                  )}
                  key={i}
                  onClick={() => onClick(item.name)}
                >
                  { (item.name === "Provider Messaging" && hasUnreadMessages) &&
                    (
                      <div className="tw-w-3 tw-h-3 tw-rounded-full tw-bg-red-600 tw-absolute tw-top-1 tw-right-1"></div>
                    )
                  }
                  <p
                    className={classNames(
                      "tw-cursor-pointer",
                      item.current !== true ? "tw-text-black" : "tw-text-white",
                    )}
                  >
                    {item.icon}
                  </p>
                  <p
                    className={classNames(
                      "tw-text-3xs tw-cursor-pointer tw-tracking-wide tw-m-0 tw-p-0 tw-text-center",
                      item.current !== true ? "tw-text-black" : "tw-text-white",
                    )}
                  >
                    {item.name}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="tw-text-center tw-text-black tw-text-2xs tw-font-sans tw-font-normal tw-opacity-50 tw-mt-8">
          __PLUGIN_VERSION__
        </div>
      </div>
    </div>
  );
}
