import { render } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";

import Chat from "./ChatInput";
import Subject from "./SubjectInput";
import Header from "./Header";
import To from "./ToInput";
import Loader from "./Loader";
import { SendIcon } from "../Icons/HeroIcons";
import { getCorticoUrl } from "../Utils/Utils";

function MessengerWindow({ onSubmit, close, patient, loading, ...props }) {
  const [email, setEmail] = useState("aaron@countable.ca");
  const subject = useRef();
  const message = useRef();

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
    onSubmit(data);
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
      <hr className="tw-opacity-10" />

      <div className="tw-flex tw-justify-end tw-p-4">
        <button
          disabled={loading}
          className="tw-bg-cortico-blue tw-px-3 tw-py-2 tw-rounded-md tw-text-white tw-text-sm tw-flex tw-items-center"
        >
          {loading === true ? (
            <span class="tw-flex">
              <Loader />
              <span className="tw-ml-1">Sending...</span>
            </span>
          ) : (
            <span className="tw-flex tw-items-center">
              <span>Send Message</span>
              <SendIcon className="tw-h-4 tw-w-4 tw-ml-2" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}

export default MessengerWindow;
