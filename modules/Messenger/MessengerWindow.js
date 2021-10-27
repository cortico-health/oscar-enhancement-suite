import { render } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import { forwardRef } from "preact/compat";

import Chat from "./ChatInput";
import Subject from "./SubjectInput";
import Header from "./Header";
import To from "./ToInput";
import Loader from "./Loader";
import { MailIcon, TextIcon } from "../Icons/HeroIcons";
import { getCorticoUrl } from "../Utils/Utils";

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

function MessengerWindow({ onSubmit, close, patient, loading, ...props }) {
  const [email, setEmail] = useState("aaron@countable.ca");
  const [scheme, setScheme] = useState("email");
  const subject = useRef();
  const message = useRef();
  const encounter = useRef();

  useEffect(() => {
    if (patient?.email) {
      //setEmail(patient.email);
    }
  }, [patient?.email]);

  const submitData = (e) => {
    e.preventDefault();
    const data = {
      clinic_host: getCorticoUrl().replace(/http.?:\/\//, ""),
      to: email,
      subject: subject.current.value,
      body: message.current.value,
      pdf_html: "<div>Hello World/div>",
    };

    const opts = {
      encounter: encounter.current.checked,
      scheme,
    };
    onSubmit(data, opts);
  };

  return (
    <form onSubmit={submitData}>
      <Header close={close} />
      <div className="tw-px-4 tw-py-2">
        <To patient={patient} />
      </div>
      <hr className="tw-opacity-10" />
      <div className="tw-w-full">
        <Subject ref={subject} />
      </div>
      <hr className="tw-opacity-10" />
      <div>
        <Chat ref={message} />
      </div>
      <hr className="tw-opacity-40" />
      <div className="tw-p-4">
        <EncounterOption ref={encounter} />
      </div>

      <div className="tw-flex tw-justify-end tw-px-4 tw-py-3 tw-bg-gray-100">
        <button
          disabled={true}
          className="tw-bg-green-600 tw-px-3 tw-py-2 tw-rounded-md tw-text-white tw-text-sm tw-flex tw-items-center tw-mr-2 tw-disabled:opacity-50 tw-opacity-50"
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
    </form>
  );
}

export default MessengerWindow;
