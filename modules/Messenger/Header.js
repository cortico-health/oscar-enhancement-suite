import { render } from "preact";
import corticoIcon from "../../resources/icons/96x96.png";

function Header({ close, ...props }) {
  return (
    <div className="tw-flex tw-rounded-t-md tw-items-top tw-border tw-bg-cortico-blue tw-p-12 tw-shadow-xl">
      <div className="tw-flex-1" onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="tw-h-6 tw-w-6 tw-text-white tw-cursor-pointer tw-shadow-xl"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      <div className="tw-flex-5">
        <div className="tw-text-white tw-font-light">Messenger</div>
        <p className="tw-text-sm tw-text-white tw-mt-2 tw-text-opacity-80 tw-leading-5">
          Send a message to the patient using this service
        </p>
        <div className="tw-mt-3 tw-bg-white tw-inline-block tw-py-1 tw-px-2 tw-rounded-md tw-shadow-2xl">
          <img
            className="tw-w-3 tw-h-3 tw-inline-block"
            src={corticoIcon}
            alt="Cortico"
          />
          <p className="tw-ml-1 tw-inline-block tw-text-xs tw-text-cortico-blue tw-font-medium">
            Powered By Cortico
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
