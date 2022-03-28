import { useState, useEffect } from "preact/hooks";
import { MailIcon } from "../Icons/HeroIcons";
import { getCorticoUrl } from "../Utils/Utils";
import Documents from "./Documents";
import { setupEFormPage } from "../Utils/Utils";
import Input from "../../modules/cortico/Widget/base/Input";
import Textarea from "../cortico/Widget/base/Textarea";
import Checkbox from "../cortico/Widget/base/Checkbox";
import Button from "../core/Button";
import { setFormInputValueAttributes } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../Api/Api";
import { loadExtensionStorageValue } from "../Utils/Utils";
import { getPatientInfo } from "../../cortico";

function MessengerWindow({ encounter: encounterOption, ...props }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const { to, subject, body, encounter, attachment, eform, document, scheme } =
    useSelector((state) => state.messenger);

  const submitData = async (e) => {
    console.log("It got here");
    try {
      setLoading(true);

      await new Promise((resolve) => {
        setTimeout(resolve(true), 1000);
      });

      const clinicHost = getCorticoUrl();
      console.log(
        "🚀 ~ file: MessengerWindow.js ~ line 27 ~ submitData ~ clinicHost",
        clinicHost
      );
      if (!clinicHost) {
        return;
      }

      const data = {
        clinic_host: clinicHost.replace(/http.?:\/\//, ""),
        to,
        subject,
        body,
      };

      const token = await loadExtensionStorageValue("jwt_access_token");
      console.log(
        "🚀 ~ file: MessengerWindow.js ~ line 43 ~ submitData ~ token",
        token
      );
      if (!token) {
        return;
      }

      if (document === true) {
        data.attachment = documentData.data;
      } else if (eform === true && attachment) {
        const clone = window.document.cloneNode(true);
        const widget = clone.querySelector(".cortico-widget");
        widget.parentNode.removeChild(widget);
        data.pdf_html = await setFormInputValueAttributes(clone);
      }

      const result = await sendMessage(data, token);
      console.log(
        "🚀 ~ file: MessengerWindow.js ~ line 52 ~ submitData ~ result",
        result
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (scheme) => {
    switch (scheme) {
      case "email":
        submitData();
        break;
      case "sms":
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

  useEffect(() => {
    if (eform === true) {
      handleChange("attachment", {
        name: "eForm",
      });
    }
  }, [eform]);

  useEffect(() => {
    if (eform === true && !to) {
      (async () => {
        try {
          const patientInfo = await getPatientInfo();
          if (patientInfo?.email) {
            handleChange("to", patientInfo.email);
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [eform]);

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
          {attachment ? (
            <div className="tw-mt-6 tw-border tw-border-opacity-20 tw-rounded-md tw-p-2">
              <Documents
                onDelete={() => handleChange("attachment", null)}
                name={attachment.name}
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
            loading={loading}
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
