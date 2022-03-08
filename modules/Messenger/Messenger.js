import { render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { loadExtensionStorageValue, isLoggedIn, setupEFormPage } from "../Utils/Utils";
import Notification from "../Notifications/Notification";
import MessengerWidget from "./MessengerWidget";
import MessengerWindow from "./MessengerWindow";
import {
  sendMessage,
} from "../Api/Api";
import Encounter from "../core/Encounter";
import PreactModal from "../Modal/PreactModal";
import SavedReplies from "./SavedReplies";
import Login from "../Login/Login";

function MessageException(message) {
  this.message = message || "Error has occured";
  this.name = "MessageException";
  this.title = "Error";
}

function Messenger(patient, opts, container, replaceNode) {
  const _container = container || document.body;


  function Content({ patient, eform, encounter, ...props }) {
    const handleErrors = async (response) => {
      const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          const resultMessage = result && (result.message || result.detail);
          if (resultMessage === "Given token not valid for any token type") {
            promptLogin();
          }
          throw new MessageException(resultMessage);
        } else {
          throw new MessageException(response && response.statusText);
        }
      }
      return result;
    };

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [messageInfo, setMessageInfo] = useState({
      title: null,
      content: null,
      preview: null,
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

    useEffect(() => {
      pubsub.subscribe("promptLogin", () => {
        setShowLogin(true);
      });
    }, []);

    const promptLogin = () => {
      setShowLogin(true);
    };

    const handleSubmit = async (data, opts) => {
      const setup = await setupEFormPage();
      const { to, subject, body } = data;

      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!to) {
        setMessageInfo({
          title: "Error",
          content: "Please Enter A Recipient",
        });
        setShowNotification(true);
        setLoading(false);
        return;
      }

      let encounterErrorMessage = null;
      if (opts.encounter === true) {
        const text = `\n\n[${new Date().toLocaleString()} .: Email sent to patient] \n${subject}:\n\n ${body}`;
        try {
          const result = await Encounter.addToCaseNote(text);
        } catch (err) {
          console.log("Error occured with encounter notes");
          encounterErrorMessage =
            "Failed to copy to encounter notes. Please log manually. ";
        }
      }

      const token = await loadExtensionStorageValue("jwt_access_token");
      if (token) {
        sendMessage(data, token)
          .then(handleErrors)
          .then((response) => {
            console.log("Response", response)
            if (response.success === "true" || response.success === true) {
              setMessageInfo({
                title: "Success",
                content:
                  (encounterErrorMessage || "") +
                  (response.message || `Message successfully sent to ${to}`),
                preview: response.preview,
              });
            } else {
              throw new MessageException(response?.message);
            }
          })
          .catch((error) => {
            console.error(error);
            setMessageInfo({
              title: error.title,
              content: (encounterErrorMessage || "") + (error && error.message),
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
          setLoggedIn(result);
        } catch (error) {
          console.error(error);
          setLoggedIn(false);
        }
      })();
    }, []);

    const loadReply = (data) => {
      setSubject(data.subject);
      setBody(data.message);
      setShowModal(false);
    };

    useEffect(() => {
      if (localStorage.getItem("name")) {
        setSubject(`${localStorage.getItem("name")} has sent you a message`);
      }

      if (eform === true) {
        console.log("Code Ran");
        document.body.style.transform = "initial";
        document.body.style.marginTop = 0;
      }
    }, []);

    return (
      <div className="tailwind tw-font-sans no-print tw-fixed tw-z-10005 DoNotPrint">
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
          className={`tw-fixed tw-bottom-5 tw-right-5 tw-bg-white tw-z-10000 tw-max-w-[400px] tw-shadow-xl tw-w-full tw-rounded-md tw-transform tw-transition-transform tw-duration-200 tw-ease-in-out ${
            open ? "tw-translate-x-0" : "tw-translate-x-[430px]"
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
            encounter={true}
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
          delay={7000}
          content={messageInfo.content}
          title={messageInfo.title}
          preview={messageInfo.preview}
        />
      </div>
    );
  }

  return render(
    <Content
      patient={patient}
      encounter={opts.encounter}
      eform={opts.eform}
      document={opts.document}
    />,
    _container,
    replaceNode
  );
}

export default Messenger;
