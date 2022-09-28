import { useState, useEffect } from "preact/hooks";
import { MailIcon, TextIcon, PlusIcon } from "../Icons/HeroIcons";
import { getCorticoUrl } from "../Utils/Utils";
import Documents from "./Documents";
import Input from "../../modules/cortico/Widget/base/Input";
import Textarea from "../cortico/Widget/base/Textarea";
import Checkbox from "../cortico/Widget/base/Checkbox";
import Button from "../core/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  sendEmail,
  sendMessage,
  getEncounterNotes,
  addEncounterNote,
  postCaseManagementEntry,
  setPatientChannelSubscription,
} from "../Api/Api";
import {
  loadExtensionStorageValue,
  formEncounterMessage,
} from "../Utils/Utils";
import { nanoid } from "nanoid";
import Dialog from "../cortico/Widget/features/Dialog/Dialog";
import SavedReplies from "./SavedReplies";
import { getDemographicNo } from "../Utils/Utils";
import FeatureDetector from "../cortico/Widget/adapters/FeatureDetecter";
import Encounter from "../core/Encounter";
import { BroadcastChannel } from "broadcast-channel";
import { handleTokenExpiry } from "../../modules/cortico/Widget/common/utils";
import FileUploader from "../cortico/Widget/FileUploader";
import EFormAdapter from "../cortico/Widget/adapters/EFormAdapter";
import classNames from "classnames";
import Alert from "../cortico/Widget/Alert";
import SubscriptionContainer from "./SubscriptionContainer";

class MessengerError extends Error {
  constructor(title, message) {
    super(message);
    this.name = "MessengerError";
    this.title = title;
  }
}


function MessengerWindow({ encounter: encounterOption, ...props }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const { to, phone, subject, body, encounter, attachments, eform, scheme } =
    useSelector((state) => state.messenger);

  const { info: patientInfo } = useSelector((state) => state.patient);
  const demographicNo = patientInfo?.demographicNo;
  const [openSavedReplies, setOpenSavedReplies] = useState(false);
  const [filePreview, setFilePreview] = useState([]);
  const [maxLength, setMaxLength] = useState(2000);
  const [emailChanged, setEmailChanged] = useState(false);
  const [phoneChanged, setPhoneChanged] = useState(false);
  const { clinic_name: clinicName, uid } = useSelector((state) => state.app);

  const handleEncounter = async (scheme, subject, body, demographicNo) => {
    try {
      const encounterMessage = formEncounterMessage(scheme, subject, body);
      const caseNote = Encounter.getCaseNote();

      if (caseNote) {
        const result = Encounter.addToCaseNote(encounterMessage);
        if (result === true) {
          caseNote.focus();
        }
      } else {
        let encounterTabFound = false;
        // Check if e-chart tab is open
        const encounterChannel = new BroadcastChannel("cortico/oes/encounter");
        encounterChannel.addEventListener("message", (data) => {
          if (data.uid !== uid && data.encounter === true) {
            encounterTabFound = true;
          }
        });

        if (!demographicNo) {
          throw Error("Could not find demographic number");
        }
        encounterChannel.postMessage({
          uid,
          demographicNo,
          subject,
          scheme,
          body,
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
        encounterChannel.close();
        if (encounterTabFound === true) {
          console.log("Encounter Tab Found");
        } else {
          console.log("Encounter Tab Not Found");
          Promise.all([
            postCaseManagementEntry(demographicNo),
            getEncounterNotes(demographicNo),
          ])
            .then((res) => {
              return Promise.all([res[0].text(), res[1].text()]);
            })
            .then((result) => {
              const programId = Encounter.getProgramId(result[0]);
              const note_id = Encounter.getNoteId(result[1]);

              const temp = window.document.createElement("html");
              temp.innerHTML = result[1];
              let note = Encounter.getCaseNote(temp);

              if (note == null) {
                throw Error("Could not find encounter notes");
              }

              if (programId == null) {
                throw Error("Could not find program id");
              }

              if (note_id == null) {
                throw Error("Could not find note id");
              }

              note = note.value;
              return addEncounterNote(
                demographicNo,
                note_id,
                programId,
                note + encounterMessage
              );
            })
            .then((res) => {
              dispatch({
                type: "notifications/add",
                payload: {
                  type: "success",
                  message: "Encounter message has been copied.",
                  title: "Encounter Copied",
                  id: nanoid(),
                },
              });
            });
        }
      }
    } catch (error) {
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: error.message || error.toString(),
          title: "Failed To Copy To Encounter",
          id: nanoid(),
        },
      });
    }
  };

  const submitData = async (scheme) => {
    setFilePreview([]);
    try {
      setLoading(true);

      if (!to && scheme === "email") {
        throw new MessengerError(
          "Recipient required",
          "Please enter a email address"
        );
      }

      if (!phone && scheme === "sms") {
        throw new MessengerError(
          "Phone required",
          "Please enter a phone number"
        );
      }

      const SUBSCRIPTION_REJECT_OPTIONS = {
        "invalid": "Invalid",
        "opt_out": "Unsubscribed"
      }

      //email Changed is like a blocker it will only go to this condition if email hasn't been changed.
      if (scheme === "email" && (subscriptions.email === "invalid" || subscriptions.email === "opt_out") && !emailChanged) {
        throw new MessengerError(
          `${SUBSCRIPTION_REJECT_OPTIONS[subscriptions.email]} Email Address`,
          `Please Subscribe to this email ${to}`
        )
      }

      //email Changed is like a blocker it will only go to this condition if email hasn't been changed.
      if (scheme === "sms" && (subscriptions.sms === "invalid" || subscriptions.sms === "opt_out") && !phoneChanged) {
        throw new MessengerError(
          `${SUBSCRIPTION_REJECT_OPTIONS[subscriptions.sms]} Phone Number`,
          `Please Subscribe to number ${phone}`
        )
      }

      if (scheme === "email") {
        // const RFC_5322 = new RegExp(
        //   '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()[]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        // );
        // Gmail allows dots, which is not RFC 5322 compliant, so we use this simpler Regex instead
        const VALID_EMAIL = new RegExp(
          "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}$"
        );
        if (VALID_EMAIL.test(to) !== true) {
          throw new MessengerError(
            "Not a valid email address",
            "Please enter a valid email address"
          );
        }
      }

      await new Promise((resolve) => {
        setTimeout(resolve(true), 1000);
      });

      const clinicHost = getCorticoUrl();
      if (!clinicHost) {
        throw new MessengerError(
          "Could not get clinic host",
          "Please try signing in again. Otherwise, please contact us"
        );
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
        throw new MessengerError(
          "Could not get access token",
          "Please try signing in again. Otherwise, please contact us"
        );
      }

      let result = null;
      data.demographic_no = demographicNo;
      if (scheme === "email") {
        data.files = [];
        for (let i = 0; i < attachments.length; i++) {
          const file = attachments[i];
          let contents = null;

          if (file.type === "dataUrl") {
            contents = file.data;
          } else {
            const reader = new FileReader();
            reader.readAsDataURL(file.data);
            contents = await new Promise((resolve, reject) => {
              reader.addEventListener("load", () => {
                resolve(reader.result);
              });
            });
          }

          data.files.push({
            ...file,
            data: contents,
          });
        }

        result = await sendEmail(token, data);
      } else if (scheme === "sms") {
        result = await sendMessage(token, data);
      }

      if (result.status === 200) {
        let message = null;
        if (scheme === "email") {
          message = "Email has been sent";
        } else if (scheme === "sms") {
          message = "SMS has been sent";
        }

        if (encounter === true) {
          await handleEncounter(scheme, subject, body, demographicNo);
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

        const clonedResult = result.clone();
        const responseData = await clonedResult.json();
        if (responseData.files) {
          console.log("Response data", responseData);
          setFilePreview(responseData.files);
        }
      } else {
        let errorResponse = null;
        try {
          errorResponse = await result.json();
        } catch (error) {
          throw new MessengerError(
            `Error Occured`,
            `Server responded with ${result.status} without a valid response`
          );
        }

        let title = "Email not sent";
        if (scheme === "sms") {
          title = "SMS not sent";
        }

        if (!handleTokenExpiry(result, errorResponse)) {
          throw new MessengerError(
            title,
            errorResponse.message || errorResponse?.messages[0]?.message
          );
        }
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: error.message || error.toString(),
          title: error.title || "Error Occured",
          id: nanoid(),
        },
      });
    } finally {
      setLoading(false);
    }
  };


  //SUBSCRIPTION CHANNEL RELATED FUNCTIONS
  const getSubscribedChannel = (consent_date, subscriptions) => {
    let initSubscribedChannel = {
      sms: null,
      email: null,
    }

    //If subscription is [] and w/o consent
    if (subscriptions && subscriptions.length === 0 && !consent_date) {
      return initSubscribedChannel;
    }

    //If subscription is [] and with consent
    if (subscriptions && subscriptions.length === 0 && consent_date) {
      return {
        sms: "opt_in",
        email: "opt_in"
      }
    }

    //if either sms and email has status opt_in then their corresponding channel is true
    for (let sub of subscriptions) {
      if (sub.subscription_type === "sms") {
        initSubscribedChannel = { ...initSubscribedChannel, sms: sub.status }
      } else if (sub.subscription_type === "email") {
        initSubscribedChannel = { ...initSubscribedChannel, email: sub.status }
      }
    }

    return initSubscribedChannel;
  }

  const changeChannelSubscription = async (type, subscriptionStatus, willSub, value) => {
    let newSubscriptionStatus;

    if (subscriptionStatus === "opt_out") newSubscriptionStatus = "opt_in";
    else if (subscriptionStatus === "opt_in") newSubscriptionStatus = "opt_out";
    else {
      //Patient has consent
      if (consentedDate) newSubscriptionStatus = "opt_out";
      //Patient has no consent, thus the user will determine to subscribe or unsubscribe
      else newSubscriptionStatus = willSub ? "opt_in" : "opt_out";
    }

    const payload = {
      subscription_status: newSubscriptionStatus,
      subscription_type: type,
      values: value
    };

    try {
      const token = await loadExtensionStorageValue("jwt_access_token");

      if (!token) {
        throw new MessengerError(
          "Could not get access token",
          "Please try signing in again. Otherwise, please contact us"
        );
      }

      await setPatientChannelSubscription(token, payload);

      //Check for the index of updated subscription info
      const changed_subscription =
        patientInfo.subscriptions.findIndex((sub) => { return sub.subscription_type === type && sub.value === value });

      //Copy the current subscriptions array since it will be harder to up
      let temp_subscriptions = patientInfo.subscriptions;

      //If the channel info is in the subscription list then update otherwise append
      if (changed_subscription > -1) {
        temp_subscriptions[changed_subscription].status = newSubscriptionStatus;
      } else {
        temp_subscriptions.push({
          subscription_type: type,
          value: value,
          status: newSubscriptionStatus,
        });
      }

      handleChange('subscriptions', getSubscribedChannel(patientInfo.agreement_date_signed, temp_subscriptions));

      //TODO Dwight: Will uncomment this if needed in PatientPanel
      /* dispatch({
        type: "app/setPatientInfo",
        payload: { ...patientInfo,subscriptions: new_subscriptions }
      }) */
    } catch (e) {
      console.log(e);
    }
  }

  const handleChannelSubscription = (willSub = false) => {
    let channelSubscription;
    let value;

    //Will get the subscription status
    if (scheme === "email") {
      channelSubscription = subscriptions.email;
      value = to;
    } else if (scheme === "sms") {
      channelSubscription = subscriptions.sms;
      value = phone;
    }

    changeChannelSubscription(scheme, channelSubscription, willSub, value);
  }

  useEffect(() => {
    if (patientInfo) {
      //if subscription is 0
      if (patientInfo.subscriptions.length === 0) {
        if (patientInfo.email === to) setEmailChanged(false);
        else setEmailChanged(true);

        return;
      }

      //Check if it the value didn't changed
      const index = patientInfo.subscriptions.findIndex((sub) => sub.subscription_type === "email" && sub.value === to);

      //Channel Value has changed
      if (index === -1) {
        setEmailChanged(true);
      } else {
        setEmailChanged(false);
      }
    }
  }, [to]);

  useEffect(() => {
    if (patientInfo) {
      const patientPhone =
        patientInfo["Cell PhoneHistory"] ||
        patientInfo["PhoneWHistory"] ||
        patientInfo["PhoneHHistory"];

      //if subscription is 0
      if (patientInfo.subscriptions.length === 0) {
        if (patientPhone === phone) setPhoneChanged(false);
        else setPhoneChanged(true);

        return;
      }

      //Check if it the value didn't changed
      const index = patientInfo.subscriptions.findIndex((sub) => sub.subscription_type === "sms" && sub.value === phone);

      //Channel Value has changed
      if (index === -1) {
        setPhoneChanged(true);
      } else {
        setPhoneChanged(false);
      }
    }
  }, [phone]);

  const handleSend = () => {
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

  const deleteAttachment = (id) => {
    dispatch({
      type: "messenger/deleteAttachment",
      payload: {
        id,
      },
    });
  };

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

      handleChange("subscriptions", getSubscribedChannel(patientInfo.agreement_date_signed, patientInfo.subscriptions));
      handleChange("subscriptionsInfo", patientInfo.subscriptions);
      handleChange("consentedDate", patientInfo.agreement_date_signed);
    }
  }, [patientInfo]);

  useEffect(() => {
    if (!subject && clinicName) {
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

  const handleSchemeChange = (scheme) => {
    dispatch({
      type: "messenger/set",
      payload: {
        key: "scheme",
        value: scheme,
      },
    });
  };

  useEffect(() => {
    if (scheme === "sms") {
      setMaxLength(140);
    } else {
      setMaxLength(2000);
    }
  }, [scheme]);

  return (
    <div className="tw-m-0 no-print">
      {eform === true && <EFormAdapter />}
      <FeatureDetector featureName="text">
        {({ disabled }) => {
          return disabled === false ? (
            <SchemeSelect
              onClick={handleSchemeChange}
              scheme={scheme}
              className="tw-mt-0 tw-mb-4"
            ></SchemeSelect>
          ) : null;
        }}
      </FeatureDetector>

      <div>
        <div>
          {scheme === "email" ? (
            <>
              {(to && !emailChanged && subscriptions) &&
                <SubscriptionContainer
                  channelName={scheme}
                  channel={subscriptions.email}
                  value={to}
                  handleSubscriptionChange={handleChannelSubscription}
                  consented={consentedDate}
                  isSubscriptionsEmpty={subscriptionsInfo.length === 0}
                />
              }
              <div>
                <Input
                  type="email"
                  placeholder="To"
                  value={to}
                  onChange={(val) => handleChange("to", val)}
                  defaultValue={to}
                /* isError={ !subscriptions.email } */
                />
              </div>
              <hr className="tw-opacity-10" />
              <div className="tw-w-full">
                <Input
                  placeholder="Subject"
                  onChange={(val) => handleChange("subject", val)}
                  value={subject}
                  defaultValue={subject}
                ></Input>
              </div>
            </>
          ) : null}
          {scheme === "sms" ? (
            <>
              {(phone && !phoneChanged && subscriptions) &&
                <SubscriptionContainer
                  channelName={scheme}
                  channel={subscriptions.sms}
                  value={phone}
                  handleSubscriptionChange={handleChannelSubscription}
                  consented={consentedDate}
                  isSubscriptionsEmpty={subscriptionsInfo.length === 0}
                />}
              <div>
                <Input
                  type="text"
                  placeholder="Phone"
                  onChange={(val) => handleChange("phone", val)}
                  value={phone}
                  defaultValue={phone}
                />
              </div>
            </>
          ) : null}

          <hr className="tw-opacity-10" />
          {body && body.length > 140 && scheme === "sms" ? (
            <Alert
              size="sm"
              title="Warning"
              message="You are over the SMS character limit of 140 characters, please shorten your message"
              className="tw-w-full tw-my-2"
            ></Alert>
          ) : null}
          <div className="tw-relative tw-mt-4">
            <Textarea
              value={body}
              onChange={(val) => handleChange("body", val)}
              defaultValue={body}
              placeholder="Enter message here"
              maxLength={maxLength}
            ></Textarea>
          </div>
          <hr className="tw-opacity-40" />

          {attachments.map((attachment) => {
            return (
              <div
                className="tw-mt-4 tw-border tw-border-opacity-20 tw-rounded-md tw-p-2"
                key={attachment.id}
              >
                <Documents
                  id={attachment.id}
                  onDelete={deleteAttachment}
                  name={attachment.name}
                ></Documents>
              </div>
            );
          })}

          {scheme === "email" ? (
            <div className="tw-mt-3 tw-mb-1">
              <FileUploader />
            </div>
          ) : null}

          <FeatureDetector featureName="encounter">
            {({ disabled }) => {
              return disabled === false ? (
                <div className="tw-mt-4">
                  <Checkbox
                    label="Copy Message To Encounter"
                    defaultChecked={encounter}
                    value={encounter}
                    onChange={(val) => handleChange("encounter", val)}
                  />
                </div>
              ) : (
                ""
              );
            }}
          </FeatureDetector>
        </div>
        <hr className="tw-my-4" />

        {filePreview.length > 0 && (
          <div className="tw-flex tw-justify-between tw-mt-4 tw-w-full tw-max-w-[368px]">
            <div className="tw-bg-blue-100 tw-text-blue-800 tw-p-3 tw-rounded-md tw-text-xs tw-w-full">
              File sent successfully, Preview the file(s):{" "}
              {filePreview.map((file) => (
                <a
                  className="tw-text-underline tw-font-semibold tw-block tw-break-words"
                  href={file.previewLink}
                  target="_blank"
                  key={file.previewLink}
                >
                  {file.filename}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="tw-flex tw-justify-between tw-mt-4 tw-w-full">
          <div>
            <Dialog
              open={openSavedReplies}
              onClose={() => setOpenSavedReplies(false)}
              s
            >
              <div className="tw-inline-block tw-translate-x-[-50%] tw-left-[50%] tw-text-white tw-relative tw-translate-y-[-50%] tw-top-[50%]">
                <SavedReplies loadReply={handleLoadReply} />
              </div>
            </Dialog>
            <Button
              onClick={() => setOpenSavedReplies(true)}
              rounded={true}
              variant="custom"
              className="tw-bg-indigo-100"
            >
              <PlusIcon className="tw-h-5 tw-w-5 tw-text-indigo-1000 tw-m-1"></PlusIcon>
            </Button>
          </div>
          <div>
            {scheme === "email" ? (
              <Button
                size="sm"
                loading={loading}
                onClick={handleSend}
                className="tw-bg-indigo-100 tw-text-blue-1000 tw-text-sm  tw-rounded-md tw-font-medium "
                variant="custom"
              >
                <span className="tw-flex tw-items-center tw-cursor-pointer">
                  <span className="tw-cursor-pointer">Send Email</span>
                  <MailIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
                </span>
              </Button>
            ) : scheme === "sms" ? (
              <FeatureDetector featureName="text">
                {({ disabled }) => {
                  return disabled === false ? (
                    <Button
                      size="sm"
                      loading={loading}
                      onClick={handleSend}
                      variant="custom"
                      className="tw-bg-emerald-100 tw-text-emerald-900 tw-text-sm  tw-mr-2 tw-rounded-md tw-font-medium "
                    >
                      <span className="tw-flex tw-items-center tw-cursor-pointer">
                        <span className="tw-cursor-pointer">Send Text</span>
                        <TextIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
                      </span>
                    </Button>
                  ) : (
                    ""
                  );
                }}
              </FeatureDetector>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessengerWindow;

function SchemeSelect({ onClick, scheme, className, ...props }) {
  return (
    <div
      className={classNames(
        "tw-flex tw-text-xs tw-rounded-md tw-shadow-sm tw-border tw-border-cortico-blue",
        className
      )}
    >
      <div className="tw-flex-1 tw-text-center">
        <div
          onClick={() => {
            onClick("sms");
          }}
          className={classNames(
            "tw-p-2 tw-rounded-l-md tw-cursor-pointer tw-flex tw-items-center tw-justify-center",
            scheme === "sms"
              ? "tw-bg-cortico-blue tw-text-white tw-font-medium"
              : "tw-bg-gray-100 tw-text-gray-700"
          )}
        >
          <TextIcon
            className={classNames("tw-w-4 tw-h-4 tw-mr-1 tw-inline-block")}
          ></TextIcon>
          Text Message
        </div>
      </div>
      <div className="tw-flex-1 tw-text-center">
        <div
          onClick={() => {
            onClick("email");
          }}
          className={classNames(
            "tw-p-2 tw-rounded-r-md tw-cursor-pointer tw-flex tw-items-center tw-justify-center",
            scheme === "email"
              ? "tw-bg-cortico-blue tw-text-white tw-font-medium"
              : "tw-bg-gray-100 tw-text-gray-700"
          )}
        >
          <MailIcon
            className={classNames("tw-w-4 tw-h-4 tw-mr-1 tw-inline-block")}
          ></MailIcon>
          Email
        </div>
      </div>
    </div>
  );
}
