import { useState, useEffect } from "preact/hooks";
import { MailIcon, TextIcon, PlusIcon } from "../Icons/HeroIcons";
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
import Dialog from "../cortico/Widget/features/Dialog/Dialog";
import SavedReplies from "./SavedReplies";
import { getDemographicNo } from "../Utils/Utils";
import FeatureDetector from "../cortico/Widget/adapters/FeatureDetecter";
import InboxDocument from "../cortico/Widget/adapters/InboxDocument";

function MessengerWindow({ encounter: encounterOption, ...props }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const {
    to,
    phone,
    subject,
    body,
    encounter,
    attachment,
    eform,
    document,
    inboxDocument,
  } = useSelector((state) => state.messenger);
  const [openSavedReplies, setOpenSavedReplies] = useState(false);
  const [patientInfo, setPatientInfo] = useState(null);
  const { clinic_name: clinicName } = useSelector((state) => state.app);

  const submitData = async (scheme) => {
    if (!to && scheme === "email") {
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: "Please enter a email address",
          title: "Recipient required",
          id: nanoid(),
        },
      });
      return;
    }

    if (!phone && scheme === "sms") {
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: "Please enter a phone number",
          title: "Phone required",
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
        data.phone = phone;
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
          let errorResponse = null;
          try {
            errorResponse = await result.json();
          } catch (error) {
            throw Error(
              `Server responded with ${result.status} without a valid response`
            );
          }

          let title = "Email not sent";
          if (scheme === "sms") {
            title = "SMS not sent";
          }
          dispatch({
            type: "notifications/add",
            payload: {
              type: "error",
              message:
                errorResponse.message || errorResponse?.messages[0]?.message,
              title,
              id: nanoid(),
            },
          });
          return;
        }
      } catch (error) {
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
    const demographicNo = getDemographicNo();
    if (demographicNo && !patientInfo) {
      getPatientInfo().then((patientInfo) => {
        if (patientInfo) {
          setPatientInfo(patientInfo);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (patientInfo) {
      handleChange("to", patientInfo.email);

      const phone =
        patientInfo["Cell PhoneHistory"] ||
        patientInfo["PhoneWHistory"] ||
        patientInfo["PhoneHHistory"];

      if (phone) {
        handleChange("phone", phone);
      }
    }
  }, [patientInfo]);

  useEffect(() => {
    if (!subject) {
      handleChange("subject", `${clinicName} has sent you a message`);
    }
  }, [clinicName]);

  const handleLoadReply = (reply) => {
    dispatch({
      type: "messenger/setAll",
      payload: {
        subject: reply.subject,
        body: reply.message,
      },
    });
    setOpenSavedReplies(false);
  };
  return (
    <div className="tw-m-0 no-print">
      {inboxDocument === true ? <InboxDocument></InboxDocument> : null}
      <div>
        <div>
          <div>
            <Input
              type="email"
              placeholder="To"
              onChange={(val) => handleChange("to", val)}
              defaultValue={to}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Phone"
              onChange={(val) => handleChange("phone", val)}
              defaultValue={phone}
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
          <FeatureDetector featureName="encounter">
            {({ disabled }) => {
              return disabled === false ? (
                <div className="tw-mt-4">
                  <Checkbox
                    label="Copy Message To Encounter"
                    defaultChecked={encounter}
                  />
                </div>
              ) : (
                ""
              );
            }}
          </FeatureDetector>

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

        <div className="tw-flex tw-justify-between tw-mt-4 tw-w-full">
          <div>
            <Dialog
              open={openSavedReplies}
              onClose={() => setOpenSavedReplies(false)}
              s
            >
              <div className="tw-inline-block tw-translate-x-[-50%] tw-left-[50%]  tw-text-white tw-relative tw-translate-y-[-50%] tw-top-[50%]">
                <SavedReplies loadReply={handleLoadReply} />
              </div>
            </Dialog>
            <Button onClick={() => setOpenSavedReplies(true)} rounded={true}>
              <PlusIcon className="tw-h-5 tw-w-5 tw-text-white tw-m-1"></PlusIcon>
            </Button>
          </div>
          <div>
            <Button
              size="sm"
              loading={loading}
              onClick={() => handleSend("sms")}
              className="tw-mr-2 tw-bg-green-800 tw-text-white tw-border"
              variant="custom"
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
              className="tw-bg-blue-1000 tw-border tw-text-white"
              variant="custom"
            >
              <span className="tw-flex tw-items-center tw-cursor-pointer">
                <span className="tw-cursor-pointer">Send Email</span>
                <MailIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessengerWindow;
