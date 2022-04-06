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
import Header from "./base/Header";

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
  },
];

export default function WidgetAutomation() {
  const option = useSelector((state) => state.automation.option);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    const automation = automations.find((item) => item.value === value);
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
      <div>
        {/*automations.map((automation) => {
          return (
            <div
              key={automation.id}
              className={classNames(
                isLoggedIn === false && automation.premium === true
                  ? "tw-bg-gray-100 tw-border-2 tw-border-blue-1000"
                  : "tw-bg-gray-50 hover:tw-bg-gray-200",
                "tw-min-w-[600px] tw-relative tw-p-6 tw-my-8 tw-rounded-lg tw-shadow-md tw-flex tw-justify-between tw-items-center  tw-cursor-pointer"
              )}
              onClick={() => onClick(automation.value)}
            >
              <div className="tw-cursor-pointer">
                <span
                  className={classNames(
                    "tw-flex tw-text-base  tw-font-normal tw-mb-4 tw-items-center tw-w-full",
                    isLoggedIn === false && automation.premium === true
                      ? "tw-text-gray-700"
                      : "tw-text-gray-700"
                  )}
                >
                  <span>{automation.icon}</span>
                  {automation.name}
                </span>
                <p
                  className={classNames(
                    "tw-text-sm tw-text-gray-700 tw-max-w-[300px] tw-opacity-80",
                    automation.premium === true
                      ? "tw-text-gray-700"
                      : "tw-text-gray-700"
                  )}
                >
                  {automation.description}
                </p>
              </div>
              <div className="tw-px-4 tw-cursor-pointer">
                <ArrowRightIcon className="tw-w-4 tw-h-4 tw-text-gray-600" />
              </div>
              {isLoggedIn === false && automation.premium === true ? (
                <div className="tw-absolute tw-top-[-5px] tw-right-[-5px] tw-rounded-xl tw-p-2 tw-bg-blue-1000 tw-shadow-md">
                  <p className="tw-text-sm tw-text-gray-50 tw-font-normal">
                    <StarIcon className="tw-inline-block tw-mr-1 tw-w-4 tw-h-4 tw-text-white"></StarIcon>
                    Requires Login
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })*/}
      </div>
    </div>
  );
}
