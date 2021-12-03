import { render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { loadExtensionStorageValue, isLoggedIn } from "../Utils/Utils";
import Notification from "../Notifications/Notification";
import MessengerWidget from "./MessengerWidget";
import MessengerWindow from "./MessengerWindow";
import { sendMessage } from "../Api/Api";
import Encounter from "../core/Encounter";
import PreactModal from "../Modal/PreactModal";
import SavedReplies from "./SavedReplies";
import Login from "../Login/Login";

function MessageException(message) {
  this.message = message;
  this.name = "MessageException";
  this.title = "Error";
}

const handleErrors = async (response) => {
  const result = await response.json();
  if (!response.ok) {
    if (response.status === 401) {
      throw new MessageException(result && result.message);
    } else {
      throw new MessageException(response && response.statusText);
    }
  }
  return result;
};

function Messenger(patient, opts, container, replaceNode) {
  const _container = container || document.body;

  function Content({ patient, encounter, ...props }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [messageInfo, setMessageInfo] = useState({
      title: null,
      content: null,
    });
    const [showModal, setShowModal] = useState(false);
    const [subject, setSubject] = useState(null);
    const [body, setBody] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const promptLogin = () => {
      setShowLogin(true);
    };

    const handleSubmit = async (data, opts) => {
      const { subject, body } = data;
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const token = await loadExtensionStorageValue("jwt_access_token");
      if (token) {
        sendMessage(data, token)
          .then(handleErrors)
          .then((response) => {
            setMessageInfo({
              title: "Success",
              content:
                response.message ||
                `Message successfully sent to ${patient?.email}`,
            });

            if (opts.encounter === true) {
              const text = `\n\n[${new Date().toLocaleString()} .: Email sent to patient] \n${subject}: ${body}`;
              addEncounterText(text);
            }
          })
          .catch((error) => {
            console.error(error)
            setMessageInfo({
              title: error.title,
              content: error && error.message,
            });
          })
          .finally(() => {
            setShowNotification(true);
            setLoading(false);
            handleClose();
          });
      }
    };

    useEffect(() => {
      (async () => {
        try {
          const result = await isLoggedIn();
          console.log("is logged in result?", result);
          setLoggedIn(result);
        } catch (error) {
          console.error(error);
          setLoggedIn(false);
        }
      })();
    }, []);

    const loadReply = (data) => {
      console.log("Load reply data", data);
      setSubject(data.subject);
      setBody(data.body);
      setShowModal(false);
    };

    const addEncounterText = (text) => {
      if (document.readyState === "complete") {
        Encounter.addToCaseNote(text);
      } else {
        window.addEventListener(
          "load",
          () => {
            Encounter.addToCaseNote(text);
          },
          {
            once: true,
          }
        );
      }
    };

    useEffect(() => {
      if (localStorage.getItem("name")) {
        setSubject(`${localStorage.getItem("name")} has sent you a message`);
      }
    }, []);

    return (
      <div className="tailwind tw-font-sans tw-fixed tw-z-10005 DoNotPrint">
        <PreactModal
          show={showModal}
          close={() => {
            setShowModal(false);
          }}
        >
          <SavedReplies loadReply={loadReply}></SavedReplies>
        </PreactModal>
        <PreactModal
          show={showLogin}
          close={() => {
            setShowLogin(false);
          }}
        >
          <Login />
        </PreactModal>
        <div
          className={`tw-fixed tw-bottom-5 tw-right-5 tw-bg-white tw-z-10000 tw-max-w-[400px] tw-shadow-xl tw-w-full tw-rounded-md tw-transform tw-transition-transform tw-duration-200 tw-ease-in-out ${open ? "tw-translate-x-0" : "tw-translate-x-[430px]"
            }`}
        >
          <MessengerWindow
            patient={patient}
            defaultSubject={subject}
            defaultBody={body}
            loading={loading}
            onSubmit={handleSubmit}
            close={handleClose}
            open={handleOpen}
            showSavedReplies={() => {
              setShowModal(true);
            }}
            encounter={encounter}
          />
        </div>
        <div className="tw-fixed tw-bottom-5 tw-right-5 tw-z-5000 tw-shadow-xl">
          <MessengerWidget
            open={handleOpen}
            login={promptLogin}
            loggedIn={loggedIn}
          />
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

  return render(
    <Content
      patient={patient}
      encounter={opts.encounter}
      document={opts.document}
    />,
    _container,
    replaceNode
  );
}

export default Messenger;
