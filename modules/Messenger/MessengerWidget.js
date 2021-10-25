import { render } from "preact";
import corticoIcon from "../../resources/icons/96x96.png";
import { loginForm } from "../cortico/Login/Login";
import { InfoIcon } from "../Icons/HeroIcons";

function MessengerWidget({ open, login, loggedIn, ...props }) {
  const handleClick = () => {
    loggedIn === true ? open() : login();
  };
  return (
    <div
      className=" tw-bg-cortico-blue tw-rounded-lg tw-p-3 tw-w-24 tw-cursor-pointer tw-relative"
      onClick={handleClick}
    >
      <div className="tw-absolute tw--top-1 tw--left-1 text-white tw-bg-gray-100 tw-rounded-full tw-p-1 tw-shadow-md tw-animate-bounce tw-border-cortico-blue">
        <InfoIcon className="tw-h-4 tw-w-4 tw-text-cortico-blue" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-text-white tw-h-10 tw-w-10 tw-mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
      {loggedIn === true ? (
        <p className="tw-text-white tw-text-opacity-80 tw-text-sm tw-text-center tw-mt-2">
          Message Patient
        </p>
      ) : (
        <p className="tw-text-white tw-text-opacity-80 tw-text-sm tw-text-center tw-mt-2">
          Login To Send Messages
        </p>
      )}

      <hr className="tw-opacity-20 tw-my-2" />
      <div className="tw-flex tw-bg-white tw-p-1 tw-rounded-md tw-mt-2">
        <img className="tw-w-4 tw-h-4" src={corticoIcon} alt="Cortico" />
        <div className="tw-text-cortico-blue tw-text-xs tw-font-semibold tw-ml-1">
          Cortico
        </div>
      </div>
    </div>
  );
}

export default MessengerWidget;
