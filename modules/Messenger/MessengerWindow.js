import { useState, useEffect, useRef } from "preact/hooks";
import { forwardRef } from "preact/compat";

import Chat from "./ChatInput";
import Subject from "./SubjectInput";
import Header from "./Header";
import To from "./ToInput";
import Loader from "./Loader";
import { MailIcon, TextIcon, PlusIcon } from "../Icons/HeroIcons";
import {
  getCorticoUrl,
  convertImagesToDataURLs,
  stripScripts,
} from "../Utils/Utils";
import Documents from "./Documents";
import { setupEFormPage } from "../Utils/Utils";

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
  const [email, setEmail] = useState("test@example.com");
  console.log("Eform", eForm);
  const [scheme, setScheme] = useState("email");
  const to = useRef();
  const subject = useRef();
  const message = useRef();
  const encounter = useRef();

  const [document, setDocument] = useState(null);
  const [documentData, setDocumentData] = useState({
    name: null,
    data: null,
  });

  useEffect(() => {
    if (patient?.email) {
      console.log("Patient email found", patient);
      setEmail(patient.email);
    }
  }, [patient?.email]);

  const handleReply = (e) => {
    e.preventDefault();
    showSavedReplies && showSavedReplies();
  };

  console.log("DOcument", document, eForm);

  const submitData = async (e) => {
    const data = {
      clinic_host: getCorticoUrl().replace(/http.?:\/\//, ""),
      to: to.current.value,
      subject: subject.current.value,
      body: message.current.value,
    };

    if (document === true) {
      data.attachment = documentData.data;
    } else if (eForm === true) {
      let html = window.document.cloneNode(true);
      html.querySelectorAll("input").forEach((input) => {
        input.setAttribute("value", input.value);

        if (input.checked === true) {
          input.setAttribute("checked", true);
        }
      });
      html.querySelectorAll("textarea").forEach((input) => {
        input.innerHTML = input.value;
      });

      html.querySelectorAll("select").forEach((input) => {
        input.setAttribute("value", input.value);
      });
      await convertImagesToDataURLs(html);
      stripScripts(html);
      html = html.documentElement.outerHTML;
      data.pdf_html = html;
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
        console.log("Doc data", docData);
      })();
    }
  }, [eForm]);

  const removeDocument = () => {
    setDocument(false);
    setDocumentData({
      name: null,
      data: null,
    });
  };

  const handleClose = () => {
    resetDocuments();
    close && close();
  };

  const resetDocuments = () => {
    console.log("Reset Called");
    setDocument(null);
    setDocumentData({
      name: null,
      data: null,
    });
  };

  return (
    <div className="tw-m-0 no-print">
      <Header close={handleClose} />
      <div>
        <div>
          <div className="tw-px-4 tw-py-2">
            <To ref={to} patient={patient} />
          </div>
          <hr className="tw-opacity-10" />
          <div className="tw-w-full">
            <Subject ref={subject} value={defaultSubject} />
          </div>
          <hr className="tw-opacity-10" />
          <div className="tw-relative">
            <Chat ref={message} value={defaultBody} />
            <button
              onClick={handleReply}
              className="tw-bg-cortico-blue tw-rounded-full tw-p-2 tw-flex tw-items-center tw-justify-center tw-absolute tw-bottom-2 tw-right-2 tw-flex-col tw-drop-shadow-md"
            >
              <PlusIcon className="tw-h-5 tw-w-5 tw-text-white" />
            </button>
          </div>
          <hr className="tw-opacity-40" />
          {encounterOption === true ? (
            <div className="tw-p-4">
              <EncounterOption ref={encounter} />
            </div>
          ) : (
            ""
          )}
          {document === true || eForm === true ? (
            <div className="tw-p-4">
              <Documents
                onDelete={removeDocument}
                name={documentData.name}
              ></Documents>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="tw-flex tw-justify-end tw-px-4 tw-py-3 tw-bg-gray-100">
          <button
            disabled={true}
            className="tw-bg-green-600 tw-px-3 tw-py-2 tw-rounded-md tw-text-white tw-text-sm tw-flex tw-items-center tw-mr-2 tw-disabled:opacity-50 tw-opacity-50 tw-hidden"
            onClick={() => {
              setScheme("text");
            }}
          >
            <span className="tw-flex tw-items-center">
              <span>Send Text</span>
              <TextIcon className="tw-h-4 tw-w-4 tw-ml-2" />
            </span>
          </button>
          <button
            disabled={loading}
            className="tw-bg-cortico-blue tw-px-3 tw-py-2 tw-rounded-md tw-text-white tw-text-sm tw-flex tw-items-center"
            onClick={() => {
              setScheme("email");
              submitData();
            }}
          >
            {loading === true ? (
              <span class="tw-flex">
                <Loader />
                <span className="tw-ml-1">Sending...</span>
              </span>
            ) : (
              <span className="tw-flex tw-items-center">
                <span>Send Email</span>
                <MailIcon className="tw-h-4 tw-w-4 tw-ml-2" />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessengerWindow;
