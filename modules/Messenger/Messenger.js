import { render } from "preact";
import corticoIcon from "../../resources/icons/96x96.png";

function Messenger() {
  const container = document.body;

  function Header() {
    return (
      <div className="tw-flex tw-rounded-t-md tw-items-top tw-border tw-bg-cortico-blue tw-p-12 tw-shadow-xl">
        <div className="tw-flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="tw-h-6 tw-w-6 tw-text-white tw-cursor-pointer tw-shadow-xl"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
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

  function To() {
    return (
      <div className="tw-flex tw-items-center">
        <div>
          <p className="tw-text-xs">To</p>
        </div>
        <div className="tw-pl-2">
          <p className="tw-text-xs tw-text-opacity-80 text-gray-700 tw-tracking-wider tw-rounded-xl tw-p-2">
            sample@email.com
          </p>
        </div>
      </div>
    );
  }

  function Subject() {
    return (
      <div className="">
        <div>
          <input
            type="text"
            class="
                    tw-mt-0
                    tw-block
                    tw-w-full
                    tw-px-2
                    tw-py-2
                    tw-border-0 tw-border-b tw-border-gray-200 tw-tracking-wider
                    tw-focus:ring-0 tw-focus:border-black
                    tw-text-sm tw-text-gray-700
                  "
            placeholder="Subject"
          />
        </div>
      </div>
    );
  }

  function Chat() {
    return (
      <div className="">
        <textarea
          class="
                    tw-form-textarea
                    form-textarea
                    tw-block
                    tw-w-full
                    tw-rounded-md
                    tw-border-gray-200
                    tw-shadow-sm
                    tw-focus:border-indigo-300 
                    tw-focus:ring 
                    tw-focus:ring-indigo-200 
                    tw-focus:ring-opacity-50 
                    tw-resize-none
                    tw-text-sm
                    tw-text-gray-600
                    tw-p-2
                  "
          rows="8"
          placeholder="Enter message here"
        ></textarea>
      </div>
    );
  }

  function Content() {
    return (
      <div className="tailwind">
        <div className="tw-fixed tw-bottom-5 tw-left-5 tw-bg-white tw-z-50 tw-max-w-[400px] tw-shadow-xl tw-w-full tw-rounded-md ">
          <Header />
          <div className="tw-px-4 tw-py-2">
            <To />
          </div>
          <hr className="tw-opacity-10" />
          <div className="tw-p-4 tw-w-full">
            <Subject />
          </div>
          <div className="tw-px-4">
            <Chat />
          </div>
          <div className="tw-flex tw-justify-end tw-p-4">
            <button className="tw-bg-cortico-blue tw-px-3 tw-py-2 tw-rounded-lg tw-text-white tw-text-sm tw-flex tw-items-center">
              <span>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="tw-h-4 tw-w-4 tw-ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return render(<Content />, container);
}

export default Messenger;
