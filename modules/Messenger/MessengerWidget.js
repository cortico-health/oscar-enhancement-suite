import { render } from "preact";
import corticoIcon from "../../resources/icons/96x96.png";

function MessengerWidget({ open, loggedIn, ...props }) {
  return (
    <div
      className=" tw-bg-cortico-blue tw-rounded-lg tw-p-3 tw-w-24 tw-cursor-pointer"
      onClick={open}
    >
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
      <p className="tw-text-white tw-text-opacity-80 tw-text-sm tw-text-center tw-mt-2">
        Message Patient
      </p>
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
