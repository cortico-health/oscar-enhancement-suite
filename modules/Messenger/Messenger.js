import { render } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import { getCorticoUrl, loadExtensionStorageValue } from "../Utils/Utils";
import Notification from "../Notifications/Notification";
import Chat from "./ChatInput";
import Subject from "./SubjectInput";
import Header from "./Header";
import To from "./ToInput";
import Loader from "./Loader";
import MessengerWidget from "./MessengerWidget";

function Messenger(patient) {
  const container = document.body;

  function SendIcon() {
    return (
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
    );
  }

  function Content({ patient, ...props }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState({
      title: null,
      content: null,
    });

    const [email, setEmail] = useState("aaron@countable.ca");
    const [showNotification, setShowNotification] = useState(false);
    const subject = useRef();
    const message = useRef();

    useEffect(() => {
      if (patient?.email) {
        //setEmail(patient.email);
      }
    }, [patient?.email]);

    const handleOpen = (e) => {
      e.preventDefault();
      setOpen(true);
    };

    const promptLogin = (e) => {
      setMessageInfo({
        title: "Log In",
        content: "Please log in to use this service",
      });
      setShowNotification(true);
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
              content:
                response.message ||
                `Message successfully sent to ${patient?.email}`,
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
              <To patient={patient} />
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
                    <SendIcon />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="tw-fixed tw-bottom-5 tw-right-5 tw-z-5000 tw-shadow-xl">
          <MessengerWidget open={handleOpen} login={promptLogin} />
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

  return render(<Content patient={patient} />, container);
}

export default Messenger;
