import { render } from "preact";
import corticoIcon from "../../resources/icons/96x96.png";
import { InfoIcon, MessageIcon } from "../Icons/HeroIcons";

function MessengerWidget({ open, login, loggedIn, ...props }) {
  const handleClick = () => {
    loggedIn === true ? open() : login();
  };
  return (
    <div
      className="tw-bg-cortico-blue tw-rounded-lg tw-p-3 tw-w-24 tw-cursor-pointer tw-relative"
      onClick={handleClick}
    >
      <div className="tw-absolute tw--top-1 tw--left-1 text-white tw-bg-gray-100 tw-rounded-full tw-p-1 tw-shadow-md tw-animate-bounce tw-border-cortico-blue">
        {loggedIn === false ? (
          <InfoIcon className="tw-h-4 tw-w-4 tw-text-cortico-blue" />
        ) : (
          ""
        )}
      </div>
      <MessageIcon className="tw-text-white tw-h-10 tw-w-10 tw-mx-auto" />
      {loggedIn === true ? (
        <p className="tw-text-white tw-text-opacity-80 tw-text-sm tw-text-center tw-mt-2">
          Email Patient
        </p>
      ) : (
        <p className="tw-text-white tw-text-opacity-80 tw-text-sm tw-text-center tw-mt-2">
          Login To Send Email
        </p>
      )}

      <hr className="tw-opacity-20 tw-my-2" />
      <div className="tw-flex tw-bg-white tw-p-1 tw-rounded-md tw-mt-2">
        <img
          draggable={false}
          className="tw-w-4 tw-h-4"
          src={corticoIcon}
          alt="Cortico"
        />
        <div className="tw-text-cortico-blue tw-text-xs tw-font-semibold tw-ml-1">
          Cortico
        </div>
      </div>
    </div>
  );
}

export default MessengerWidget;
