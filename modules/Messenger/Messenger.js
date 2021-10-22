import { render } from "preact";
import { forwardRef } from "preact/compat";
import corticoIcon from "../../resources/icons/96x96.png";
import { useState, useRef } from "preact/hooks";
import { getCorticoUrl, loadExtensionStorageValue } from "../Utils/Utils";
import Notification from "../Notifications/Notification";
function Messenger() {
  const container = document.body;

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

  const Subject = forwardRef((props, ref) => {
    return (
      <div className="">
        <div>
          <input
            ref={ref}
            type="text"
            class="
                    tw-mt-0
                    tw-block
                    tw-w-full
                    tw-px-4
                    tw-py-2
                    tw-border-0 tw-border-btw-tracking-wider
                    tw-focus:border-indigo-300 
                    tw-focus:ring 
                    tw-focus:ring-indigo-200 
                    tw-focus:ring-opacity-50 
                    tw-text-sm tw-text-gray-700 tw-font-sans
                  "
            placeholder="Subject"
          />
        </div>
      </div>
    );
  });

  const Chat = forwardRef((props, ref) => {
    return (
      <div className="">
        <textarea
          ref={ref}
          class="
                    tw-form-textarea
                    form-textarea
                    tw-block
                    tw-w-full
                    tw-border-0
                    tw-focus:border-indigo-300 
                    tw-focus:ring 
                    tw-focus:ring-indigo-200 
                    tw-focus:ring-opacity-50 
                    tw-resize-none
                    tw-text-sm
                    tw-text-gray-600
                    tw-p-4
                    tw-font-sans
                  "
          rows="8"
          placeholder="Enter message here"
        ></textarea>
      </div>
    );
  });

  function Loader() {
    return (
      <svg
        className="tw-animate-spin tw--ml-1 tw-mr-3 tw-h-5 tw-w-5 tw-text-white tw-inline-block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="tw-opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="tw-opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  }

  function Content() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState({
      title: null,
      content: null,
    });
    const [showNotification, setShowNotification] = useState(false);
    const email = "aaron@countable.ca";
    const subject = useRef();
    const message = useRef();

    const handleOpen = (e) => {
      e.preventDefault();
      setOpen(true);
    };

    const handleClose = (e) => {
      e.preventDefault();
      setOpen(false);
    };

    function MessageException(message) {
      this.message = message;
      this.name = "MessageException";
      this.title = "Error";
    }

    const handleErrors = async (response) => {
      const result = await response.json();
      console.log("Error Result Object", result);
      if (!response.ok) {
        if (response.status === 401) {
          throw new MessageException(result && result.detail);
        } else {
          throw new MessageException(response && response.statusText);
        }
      }
      return result;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = {
        clinic_host: getCorticoUrl().replace(/http.?:\/\//, ""),
        to: email,
        subject: subject.current.value,
        body: message.current.value,
        pdf_html: "<div>Hello World/div>",
      };

      const token = await loadExtensionStorageValue("jwt_access_token");
      if (token) {
        const url = getCorticoUrl() + "/api/plug-in/email-form/";
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          mode: "cors",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then(handleErrors)
          .then((response) => {
            console.log("Response", response);
            setMessageInfo({
              title: "Success",
              content: response.message,
            });
          })
          .catch((error) => {
            console.log("Error Object", error);
            setMessageInfo({
              title: error.title,
              content: error && error.message,
            });
          })
          .finally(() => {
            setShowNotification(true);
            setLoading(false);
          });
      }
    };

    return (
      <div className="tailwind tw-font-sans">
        <div
          className={`tw-fixed tw-bottom-5 tw-right-5 tw-bg-white tw-z-10000 tw-max-w-[400px] tw-shadow-xl tw-w-full tw-rounded-md tw-transform tw-transition-transform tw-duration-200 tw-ease-in-out ${
            open ? "tw-translate-x-0" : "tw-translate-x-[430px]"
          }`}
        >
          <form onSubmit={handleSubmit}>
            <Header close={handleClose} />
            <div className="tw-px-4 tw-py-2">
              <To />
            </div>
            <hr className="tw-opacity-10" />
            <div className="tw-w-full">
              <Subject ref={subject} />
            </div>
            <hr className="tw-opacity-10" />
            <div className="">
              <Chat ref={message} />
            </div>
            <hr className="tw-opacity-10" />

            <div className="tw-flex tw-justify-end tw-p-4">
              <button
                disabled={loading}
                className="tw-bg-cortico-blue tw-px-3 tw-py-2 tw-rounded-md tw-text-white tw-text-sm tw-flex tw-items-center"
              >
                {loading === true ? (
                  <span class="tw-flex">
                    <Loader />
                    <span class="tw-ml-1">Sending...</span>
                  </span>
                ) : (
                  <span className="tw-flex tw-items-center">
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
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
        <div
          className="tw-fixed tw-bottom-5 tw-right-5 tw-bg-cortico-blue tw-rounded-lg tw-z-5000 tw-shadow-xl tw-p-3 tw-w-24 tw-cursor-pointer"
          onClick={handleOpen}
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
        <Notification
          open={showNotification}
          close={() => {
            setShowNotification(false);
          }}
          delay={3000}
          content={messageInfo.content}
          title={messageInfo.title}
        />
      </div>
    );
  }

  return render(<Content />, container);
}

export default Messenger;
