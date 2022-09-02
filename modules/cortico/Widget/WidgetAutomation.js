import { ClipboardCheckIcon, SupportIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import EligbilityCheck from "./automation/EligibilityCheck";
import PreferredPharmacies from "./automation/PreferredPharmacies";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import FeatureDetector from "./adapters/FeatureDetecter";
import NotAvailable from "./base/NotAvailable";
import GridList from "./base/GridList";
import EligCheckImage from "../../../resources/illustrations/undraw_check_boxes.svg";
import PharImage from "../../../resources/illustrations/undraw_medical_care.svg";
import BatchImage from "../../../resources/illustrations/undraw_batch.svg";
import Header from "./base/Header";
import { Oscar } from "../../core/Oscar";
import { getCorticoUrl } from "../../Utils/Utils";

const oscar = new Oscar(window.location.hostname);

const automations = [
  {
    name: "Eligibility Checker",
    value: "elig",
    id: nanoid(),
    description:
      "Have the plugin to check eligibility for each patient in the schedule. ",
    icon: (
      <div className="tw-rounded-lg tw-inline-flex tw-p-3 tw-ring-4 tw-ring-white tw-bg-green-50 ">
        <img src={EligCheckImage} className="tw-w-20 tw-h-16" />
      </div>
    ),
    disabled: Boolean(oscar.isReportGenerationPage()),
  },
  {
    name: "Preferred Pharmacies",
    value: "phar",
    id: nanoid(),
    description:
      "Set preferred pharmacies for each of the patients in the schedule",
    icon: (
      <div className="tw-rounded-lg tw-inline-flex tw-p-3 tw-ring-4 tw-ring-white tw-bg-red-50 ">
        <img src={PharImage} className="tw-w-20 tw-h-16" />
      </div>
    ),
    premium: true,
    disabled: Boolean(oscar.isReportGenerationPage()),
  },
  {
    name: "Batch Invite",
    value: "batch_invite",
    id: nanoid(),
    description: "Send out batch invites to all patients in the report",
    icon: (
      <div className="tw-rounded-lg tw-inline-flex tw-p-3 tw-ring-4 tw-ring-white tw-bg-red-50 ">
        <img src={BatchImage} className="tw-w-20 tw-h-16" />
      </div>
    ),
    premium: false,
    disabled: !Boolean(oscar.isReportGenerationPage()),
  },
];

export default function WidgetAutomation() {
  const option = useSelector((state) => state.automation.option);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleBatchInvite = (automation) => {
    const rows = document.querySelectorAll(
      "table.reportTable tbody tr td:nth-child(1)"
    );

    if (rows.length === 0) {
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: "Reminder to run query before running the automation.",
          title: "No Demographic Numbers Found",
          id: nanoid(),
        },
      });
      return;
    }
    const demographicNumbers = [];
    rows.forEach((row) => {
      demographicNumbers.push(row.innerText);
    });

    const url = `${getCorticoUrl()}/invite-patient-booking/?demographic_no=${demographicNumbers.join(
      ","
    )}`;
    window.open(url, "_blank");
    console.log("Demographic Numbers", demographicNumbers);
  };

  const handleClick = (value) => {
    const automation = automations.find((item) => item.value === value);

    if (automation.disabled === true) {
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: "Not available",
          title: "This function is not available on this page",
          id: nanoid(),
        },
      });
      return;
    }

    if (automation.value === "batch_invite") {
      handleBatchInvite(automation);
      return;
    }

    const premium = automation.premium;
    if (premium && !isLoggedIn) {
      dispatch({
        type: "notifications/add",
        payload: {
          type: "error",
          message: "Sign In Required",
          title: "Please sign in and try again",
          id: nanoid(),
        },
      });
      return;
    }
    dispatch({ type: "automation/setOption", payload: value });
  };

  const handleGoBack = () => {
    dispatch({ type: "setupPharmacyFailures/reset" });
    dispatch({ type: "setupPharmacy/reset" });
    dispatch({ type: "eligCheckFails/reset" });
    dispatch({ type: "eligCheck/reset" });
    dispatch({ type: "automation/setOption", payload: "none" });
  };

  return (
    <div className="tw-p-4 tw-font-sans">
      {option === "none" ? (
        <>
          <Header
            title="Automations"
            desc="Replace tedious repetitive tasks with a single click"
          ></Header>
          <hr className="tw-my-6" />
        </>
      ) : null}
      <FeatureDetector featureName="automation">
        {({ disabled }) =>
          disabled === false ? (
            <div>
              <Transition
                show={true}
                appear={true}
                enter="tw-transition-opacity tw-duration-1000"
                enterFrom="tw-opacity-0"
                enterTo="tw-opacity-100"
                leave="tw-transition-opacity tw-duration-1000"
                leaveFrom="tw-opacity-100"
                leaveTo="tw-opacity-0"
              >
                {option === "none" ? (
                  <WidgetAutomationOptions
                    onClick={handleClick}
                    isLoggedIn={isLoggedIn}
                  />
                ) : option === "elig" ? (
                  <EligbilityCheck goBack={handleGoBack} />
                ) : option === "phar" ? (
                  <PreferredPharmacies goBack={handleGoBack} />
                ) : null}
              </Transition>
            </div>
          ) : (
            <NotAvailable>
              <p className="tw-max-w-[325px] tw-mx-auto tw-mt-6 tw-text-gray-700 tw-text-sm">
                This feature is{" "}
                <span className="tw-font-semibold">not available</span> on this
                page. It is only available on
                <ol className="tw-list-decimal tw-mt-2 tw-text-sm tw-space-y-1">
                  <li>Schedule Page</li>
                </ol>
              </p>
            </NotAvailable>
          )
        }
      </FeatureDetector>
    </div>
  );
}

export function WidgetAutomationOptions({ isLoggedIn, onClick, ...props }) {
  return (
    <div className="tw-font-sans">
      <div className="tw-max-w-[600px]">
        <GridList actions={automations} onClick={onClick} />
      </div>
      <div></div>
    </div>
  );
}
