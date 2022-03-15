import { checkAllEligibility } from "../../../../cortico.js";
import CircleProgressBar from "./CircleProgressBar";
import { useEffect, useContext } from "preact/hooks";
import { AutoContext } from "../../../Context/WidgetContext.js";
import { InformationCircleIcon } from "@heroicons/react/solid";
import Button from "../../../core/Button";
export default function EligbilityCheck({ goBack, ...props }) {
  useEffect(() => {
    checkAllEligibility();
  }, []);

  const autoContext = useContext(AutoContext);
  console.log("AUtoooo context", autoContext);

  return (
    <div className="tw-font-sans">
      <div>
        <h2 className="tw-text-xl tw-font-medium tw-text-gray-800 tw-m-0 tw-p-0">
          Eligibility Check
        </h2>
        <hr className="tw-my-2" />
        <div className="">
          <NoAppointments goBack={goBack} />
        </div>
      </div>
    </div>
  );
}

function NoAppointments({ goBack, ...props }) {
  return (
    <div className="tw-min-w-[400px] tw-min-h-[400px] tw-flex tw-justify-center tw-items-center tw-text-gray-700">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <InformationCircleIcon className="tw-w-12 tw-h-12 tw-text-blue-1000" />
        <p className="tw-text-lg tw-mt-4">No Appointments To Check</p>
        <Button onClick={goBack} className="tw-my-4" size="sm">
          Go Back
        </Button>
        <p className="tw-text-sm tw-mt-4 tw-block tw-max-w-[350px] tw-mx-auto">
          You may be seeing this because your schedule either
          <ol className="tw-list-decimal tw-my-2">
            <li>contains no appointments</li>
            <li>you are on the wrong schedule</li>
          </ol>
          If this is not the case, please contact us at{" "}
          <a
            href="mailto:help@cortico.health"
            className="tw-text-blue-1000 tw-font-medium"
          >
            help@cortico.health
          </a>
        </p>
      </div>
    </div>
  );
}
