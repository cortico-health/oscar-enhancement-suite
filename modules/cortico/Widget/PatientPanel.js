import { useSelector, useDispatch } from "react-redux";
import {
  ShareIcon,
  ChatAltIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { PrimaryButton,SecondaryButton } from "../../core/Button";
import { getCorticoUrl } from "../../Utils/Utils";
import Tooltip from "./base/Tooltip";
import classNames from "classnames";

export default function PatientPanel() {
  const { info } = useSelector((state) => state.patient);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "sidebar/setCurrent",
      payload: "Messenger",
    });
  };

  const pickedKeys = [
    "Last Name",
    "First Name",
    "Sex",
    "Age",
    "Patient Status",
    "PhoneHHistory",
    "PhoneWHistory",
    "Cell PhoneHistory",
    "Province",
    "Health Ins",
    "Health Card Type",
  ];

  return (
    <div className=" tw-text-gray-700 tw-p-4 tw-font-sans">
      <div className="tw-p-2  tw-rounded-md tw-min-w-[600px] tw-flex tw-items-center">
        <Tooltip description={ info.agreement_date_signed ? `Contract was consented last ${info.agreement_date_signed}` : "The Contract was not yet consented" }>
          <div className="tw-relative">
            <span className="tw-inline-block tw-h-24 tw-w-24 tw-rounded-full tw-overflow-hidden tw-bg-gray-100 tw-border-4 tw-border-white tw-items-end tw-shadow-xl">
              <svg
                className="tw-h-full tw-w-full tw-text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>

            {
              info.agreement_date_signed &&
              (
                <div class="tw-inline-flex tw-absolute tw-bottom-0 tw-right-0 tw-justify-center tw-items-center tw-w-6 tw-h-6 tw-text-xs tw-font-bold tw-text-white tw-bg-green-500 tw-rounded-full tw-border-2 tw-border-white">
                  <svg class="tw-w-6 tw-h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
              )
            }
          </div>
        </Tooltip>

        <div className="tw-flex tw-flex-col tw-justify-center tw-ml-4 tw-flex-grow">
          <p className="tw-text-base tw-font-semibold">
            { info["First Name"] } { info["Last Name"] }
          </p>
          <p className="tw-text-xs tw-mt-1 tw-flex tw-items-center">
            {info["Age"] ? info["Age"] + " years old" : "Age: N/A"}
          </p>
          <p className="tw-text-xs tw-flex tw-items-center">
            <MailIcon className="tw-mr-2 tw-w-3 tw-h-3 tw-text-gray-700"></MailIcon>
            <a href={"mailto:" + info["email"]}>{info["email"] || "N/A"}</a>
          </p>
          <p className="tw-text-xs tw-flex tw-items-center">
            <PhoneIcon className="tw-mr-2 tw-w-3 tw-h-3 tw-text-gray-500"></PhoneIcon>
            <a href={"mailto:" + info["email"]}>
              {info["Cell PhoneHistory"] ||
                info["PhoneHHistory"] ||
                info["PhoneWHistory"] ||
                "N/A"}
            </a>
          </p>
          {/*
          TODO Dwight: Will bring this bac if needed
          <div className="tw-flex tw-gap-1 tw-mt-3">
            <span class={classNames("tw-text-xs tw-font-semibold tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded")}>
              Subscribed Phone
            </span>
            <span class="tw-bg-red-100 tw-text-red-800 tw-text-xs tw-font-semibold tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded">
              Unsubscribed Email
            </span>
          </div>
          */}
        </div>
        <div className="tw-flex tw-flex-col tw-space-y-2 tw-shrink-0 tw-justify-center">
          <PrimaryButton
            onClick={handleClick}
            icon={
              <MailIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
            }
            className="tw-w-[150px]"
          >
            Send Message
          </PrimaryButton>
          {
            <SecondaryButton
              onClick={() => {
                window.open(
                  `${getCorticoUrl()}/invoices/create/?demographic_no=${
                    info.demographicNo
                  }`,
                  "_blank"
                );
              }}
              icon={
                <ChatAltIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
              }
              className="tw-w-[150px]"
            >
              Invoice Patient
            </SecondaryButton>
          }
        </div>
      </div>
      <hr className="tw-my-2" />
      <div className="tw-p-2 tw-flex">
        <p className="tw-text-sm tw-flex tw-items-center">
          <ShareIcon className="tw-mr-2 tw-w-3 tw-h-3 tw-text-gray-700"></ShareIcon>
          <a
            href={`${getCorticoUrl()}/invite-patient-booking/?demographic_no=${
              info.demographicNo
            }`}
            target="_blank"
          >
            Invite Patient
          </a>
        </p>
      </div>

      <div className="tw-grid tw-grid-cols-3 tw-gap-3 tw-bg-gray-50 tw-p-4 tw-rounded-xl tw-mt-2">
        {pickedKeys.map((key) => {
          const infoItem = info[key];
          if (infoItem) {
            return (
              <div className="tw-text-sm tw-text-gray-700">
                <p className="tw-font-semibold">{key}</p>
                <p>{infoItem}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
