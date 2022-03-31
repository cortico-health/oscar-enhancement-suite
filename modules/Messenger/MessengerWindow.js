import { useState, useEffect } from "preact/hooks";
import { MailIcon, TextIcon } from "../Icons/HeroIcons";
import { getCorticoUrl } from "../Utils/Utils";
import Documents from "./Documents";
import Input from "../../modules/cortico/Widget/base/Input";
import Textarea from "../cortico/Widget/base/Textarea";
import Checkbox from "../cortico/Widget/base/Checkbox";
import Button from "../core/Button";
import { setFormInputValueAttributes } from "../Utils/Utils";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail, sendMessage } from "../Api/Api";
import { loadExtensionStorageValue } from "../Utils/Utils";
import { getPatientInfo } from "../../cortico";
import { nanoid } from "nanoid";

function MessengerWindow({ encounter: encounterOption, ...props }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const { to, subject, body, encounter, attachment, eform, document } =
    useSelector((state) => state.messenger);

  const submitData = async (scheme) => {
    if (!to) {
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: "Please enter a recipient",
          title: "Recipient required",
          id: nanoid(),
        },
      });
      return;
    }
    if (scheme === "email") {
      const RFC_5322 = new RegExp(
        '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()[]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      );
      if (RFC_5322.test(to) !== true) {
        dispatch({
          type: "notifications/add",
          payload: {
            type: "error",
            message: "Please enter a valid email address",
            title: "Not a valid email address",
            id: nanoid(),
          },
        });
        return;
      }
    }

    try {
      setLoading(true);

      await new Promise((resolve) => {
        setTimeout(resolve(true), 1000);
      });

      const clinicHost = getCorticoUrl();
      if (!clinicHost) {
        dispatch({
          type: "notifications/add",
          payload: {
            type: "error",
            message: "Could not get clinic host",
            title: "Please try signing in again. Otherwise, please contact us",
            id: nanoid(),
          },
        });
        return;
      }

      const data = {
        clinic_host: clinicHost.replace(/http.?:\/\//, ""),
        to,
        subject,
        body,
      };

      if (scheme === "sms") {
        data.phone = to;
        data.contact_type = scheme;
      }

      const token = await loadExtensionStorageValue("jwt_access_token");

      if (!token) {
        dispatch({
          type: "notifications/add",
          payload: {
            type: "error",
            message: "Could not get access token",
            title: "Please try signing in again. Otherwise, please contact us",
            id: nanoid(),
          },
        });
        return;
      }

      if (document === true) {
        data.attachment = attachment.data;
      } else if (eform === true && attachment) {
        const clone = window.document.cloneNode(true);
        const widget = clone.querySelector(".cortico-widget");
        widget.parentNode.removeChild(widget);
        try {
          data.pdf_html = await setFormInputValueAttributes(clone);
        } catch (error) {
          dispatch({
            type: "notifications/add",
            payload: {
              type: "error",
              message: "Error Parsing",
              title: "There was an error parsing this eform",
              id: nanoid(),
            },
          });
          return;
        }
      }

      try {
        let result = null;

        if (scheme === "email") {
          result = await sendEmail(data, token);
        } else if (scheme === "sms") {
          console.log("SMS Result", result);
          result = await sendMessage(data, token);
        }

        if (result.status === 200) {
          let message = null;
          if (scheme === "email") {
            message = "Email has been sent";
          } else if (scheme === "sms") {
            message = "SMS has been sent";
          }
          dispatch({
            type: "notifications/add",
            payload: {
              type: "success",
              message,
              title: "Success!",
              id: nanoid(),
            },
          });
          return;
        } else {
          const errorResponse = await result.json();

          let title = "Email not sent";
          if (scheme === "sms") {
            title = "SMS not sent";
          }
          dispatch({
            type: "notifications/add",
            payload: {
              type: "error",
              message: errorResponse.message,
              title,
              id: nanoid(),
            },
          });
          return;
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: "notifications/add",
          payload: {
            type: "error",
            message: error.toString(),
            title: "Email not sent",
            id: nanoid(),
          },
        });
        return;
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: error.toString(),
          title: "Error Occurred",
          id: nanoid(),
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (scheme) => {
    dispatch({
      type: "messenger/set",
      payload: {
        key: "scheme",
        value: scheme,
      },
    });
    submitData(scheme);
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
    if ((eform === true || document === true) && !to) {
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
  }, [eform, document]);

  return (
    <div className="tw-m-0 no-print">
      <div>
        <div>
          <div className="tw-py-2">
            <Input
              type="email"
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
          <Button
            size="sm"
            disabled={loading}
            onClick={() => handleSend("sms")}
            className="tw-mr-2 tw-bg-green-800 tw-text-white"
          >
            <span className="tw-flex tw-items-center tw-cursor-pointer">
              <span className="tw-cursor-pointer">Send Text</span>
              <TextIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
            </span>
          </Button>

          <Button
            size="sm"
            loading={loading}
            onClick={() => handleSend("email")}
            className=" "
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
