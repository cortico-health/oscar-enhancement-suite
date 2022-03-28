import { useState, useEffect } from "preact/hooks";
import { MailIcon } from "../Icons/HeroIcons";
import {
  getCorticoUrl,
  convertImagesToDataURLs,
  stripScripts,
} from "../Utils/Utils";
import Documents from "./Documents";
import { setupEFormPage } from "../Utils/Utils";
import Input from "../../modules/cortico/Widget/base/Input";
import Textarea from "../cortico/Widget/base/Textarea";
import Checkbox from "../cortico/Widget/base/Checkbox";
import Button from "../core/Button";
import { setFormInputValueAttributes } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";

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
  const { to, subject, body, encounter, attachment, eform, document } =
    useSelector((state) => state.messenger);

  useEffect(() => {
    if (document === true || eform === true) {
      setHasAttachment(true);
    }
  }, [eForm, document]);

  const submitData = async (e) => {
    const data = {
      clinic_host: getCorticoUrl().replace(/http.?:\/\//, ""),
      to: to,
      subject: subject,
      body: body,
    };

    if (document === true) {
      data.attachment = documentData.data;
    } else if (eForm === true) {
      data.pdf_html = await setFormInputValueAttributes(
        window.document.cloneNode(true)
      );
    }

    const opts = {
      encounter,
      scheme,
    };
    onSubmit(data, opts);
  };

  useEffect(() => {
    if (eForm === true) {
      (async () => {
        const docData = await setupEFormPage();
        setDocumentData(docData);
      })();
    }
  }, [eForm]);

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
              placeholder="To"
              onChange={(val) => handleChange("to", val)}
              defaultValue={to}
            />
          </div>
          <hr className="tw-opacity-10" />
          <div className="tw-w-full">
            <Input
              placeholder="Subject"
              onChange={(val) => handleChange("subject", val)}
              defaultValue={subject}
            ></Input>
          </div>
          <hr className="tw-opacity-10" />
          <div className="tw-relative tw-mt-4">
            <Textarea
              onChange={(val) => handleChange("body", val)}
              defaultValue={body}
              placeholder="Enter message here"
            ></Textarea>
          </div>
          <hr className="tw-opacity-40" />
          {true ? (
            <div className="tw-mt-4">
              <Checkbox
                label="Copy Message To Encounter"
                defaultChecked={encounter}
              />
            </div>
          ) : (
            ""
          )}
          {attachment === true ? (
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
