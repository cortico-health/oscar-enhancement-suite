import { useState, useEffect, useRef } from "preact/hooks";
import { forwardRef } from "preact/compat";
import Chat from "./ChatInput";
import { MailIcon, TextIcon } from "../Icons/HeroIcons";
import {
  getCorticoUrl,
  convertImagesToDataURLs,
  stripScripts,
} from "../Utils/Utils";
import Documents from "./Documents";
import { setupEFormPage } from "../Utils/Utils";
import Input from "../../modules/cortico/Widget/base/Input";
import Textarea from "../cortico/Widget/base/Textarea";
import Button from "../core/Button";
import { setFormInputValueAttributes } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";

const EncounterOption = forwardRef((props, ref) => {
  return (
    <label class="tw-inline-flex tw-items-center">
      <input
        ref={ref}
        type="checkbox"
        class="
                tw-h-5
                tw-w-5
                tw-form-checkbox
                form-checkbox
                tw-rounded
                tw-text-indigo-600
                tw-shadow-sm
                tw-focus:border-cortico-blue
                tw-focus:ring
                tw-focus:ring-offset-0
                tw-focus:ring-indigo-200
                tw-focus:ring-opacity-50
              "
      />
      <span class="tw-ml-2 tw-text-sm tw-text-gray-600">
        Copy Message To Encounter
      </span>
    </label>
  );
});

function MessengerWindow({
  eForm,
  onSubmit,
  open,
  close,
  patient,
  loading,
  showSavedReplies,
  defaultSubject,
  defaultBody,
  encounter: encounterOption,
  ...props
}) {
  const dispatch = useDispatch();
  const { to, subject } = useSelector((state) => state.messenger);
  const [email, setEmail] = useState(null);
  const [scheme, setScheme] = useState("email");
  const message = useRef();
  const encounter = useRef();
  const [document, setDocument] = useState(null);
  const [documentData, setDocumentData] = useState({
    name: null,
    data: null,
  });
  const [hasAttachment, setHasAttachment] = useState(false);

  useEffect(() => {
    if (document === true || eForm === true) {
      setHasAttachment(true);
    }
  }, [eForm, document]);

  useEffect(() => {
    if (patient?.email) {
      setEmail(patient.email);
    }
  }, [patient?.email]);

  const handleReply = (e) => {
    e.preventDefault();
    showSavedReplies && showSavedReplies();
  };

  const submitData = async (e) => {
    const data = {
      clinic_host: getCorticoUrl().replace(/http.?:\/\//, ""),
      to: to,
      subject: subject,
      body: message.current.value,
    };

    if (document === true) {
      data.attachment = documentData.data;
    } else if (eForm === true) {
      data.pdf_html = await setFormInputValueAttributes(
        window.document.cloneNode(true)
      );
    }

    const opts = {
      encounter: encounter && encounter.current && encounter.current.checked,
      scheme,
    };
    onSubmit(data, opts);
  };

  useEffect(() => {
    pubsub.subscribe("document", (evtName, data) => {
      setDocument(true);
      setDocumentData(data);
      console.log("Document data", data);
      open && open();
    });

    return () => {
      pubsub.unsubscribe("document");
    };
  }, []);

  useEffect(() => {
    if (eForm === true) {
      (async () => {
        const docData = await setupEFormPage();
        setDocumentData(docData);
      })();
    }
  }, [eForm]);

  const removeAttachment = () => {
    resetDocuments();
    setHasAttachment(false);
  };

  const resetDocuments = () => {
    console.log("Reset Called");
    setDocument(null);
    setDocumentData({
      name: null,
      data: null,
    });
  };

  const handleSend = (scheme) => {
    switch (scheme) {
      case "email":
        setScheme("email");
        submitData();
        break;
      case "sms":
        setScheme("sms");
        break;
      default:
    }
  };

  const handleChange = (key, value) => {
    dispatch({
      type: "messenger/set",
      payload: {
        key,
        value,
      },
    });
  };

  return (
    <div className="tw-m-0 no-print">
      <div>
        <div>
          <div className="tw-py-2">
            <Input
              defaultValue={email}
              placeholder="To"
              onChange={(val) => handleChange("to", val)}
            />
          </div>
          <hr className="tw-opacity-10" />
          <div className="tw-w-full">
            {to}
            {subject}
            <Input
              placeholder="Subject"
              onChange={(val) => handleChange("subject", val)}
            ></Input>
          </div>
          <hr className="tw-opacity-10" />
          <div className="tw-relative tw-mt-4">
            <Textarea
              onChange={(val) => handleChange("message", val)}
              defaultValue="Type message here"
            ></Textarea>
          </div>
          <hr className="tw-opacity-40" />
          {encounterOption === true ? (
            <div className="tw-mt-4">
              <EncounterOption ref={encounter} />
            </div>
          ) : (
            ""
          )}
          {hasAttachment === true ? (
            <div className="tw-mt-4 tw-border tw-border-opacity-20 tw-rounded-md tw-p-2">
              <Documents
                onDelete={removeAttachment}
                name={documentData.name}
              ></Documents>
            </div>
          ) : (
            ""
          )}
        </div>

        <hr className="tw-my-4" />

        <div className="tw-flex tw-justify-end tw-mt-4">
          {/*
          <Button
            size="sm"
            disabled={loading}
            onClick={() => handleSend("sms")}
          >
            <span className="tw-flex tw-items-center tw-cursor-pointer">
              <span className="tw-cursor-pointer">Send Text</span>
              <TextIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
            </span>
          </Button>
          */}
          <Button
            size="sm"
            disabled={loading}
            onClick={() => handleSend("email")}
          >
            <span className="tw-flex tw-items-center tw-cursor-pointer">
              <span className="tw-cursor-pointer">Send Email</span>
              <MailIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MessengerWindow;
