import { checkAllEligibility } from "../../../../cortico.js";
import CircleProgressBar from "./CircleProgressBar";
import { useEffect, useContext } from "preact/hooks";
import { AutoContext } from "../../../Context/WidgetContext.js";
import { InformationCircleIcon, EmojiSadIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from "@heroicons/react/outline";
import Button from "../../../core/Button";
import Table from "../Table.js";

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
        <div>
          {autoContext.empty === true ? (
            <NoAppointments goBack={goBack} />
          ) : autoContext.teleplan === true ? (
            <Teleplan goBack={goBack} />
          ) : (
            <Running
              current={autoContext.current}
              total={autoContext.total}
              demographicNo={autoContext.demographic_no}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="tw-flex tw-items-center tw-justify-center tw-space-x-3">
      <div className="tw-w-4 tw-h-4 tw-rounded-full tw-bg-blue-1000"></div>
      <div className="tw-w-4 tw-h-4 tw-rounded-full tw-bg-blue-1000"></div>
      <div className="tw-w-4 tw-h-4 tw-rounded-full tw-bg-blue-1000"></div>
    </div>
  );
}

function Running({ current, total, demographicNo, ...props }) {
  return (
    <div className="tw-py-6">
      <div className="tw-min-w-[400px] tw-min-h-[400px] tw-flex tw-justify-center tw-items-center tw-text-gray-700">
        <div>
          <Dots />
          <p className="tw-mt-4 tw-text-center">In Progress</p>
          <p className="tw-mt-6 tw-text-center tw-text-sm">
            Patient Demographic Number: {demographicNo}
          </p>
          <p className="tw-text-center tw-font-medium tw-mt-2 tw-text-blue-1000 tw-text-sm">
            {current}/{total}
          </p>
          <div className="tw-min-w-[350px]">
            <Table
              headers={["Demographic Number", "Status"]}
              data={[
                [
                  "Test",
                  <EmojiSadIcon className="tw-w-6 tw-h-6 tw-text-red-500 tw-mx-auto" />,
                ],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Teleplan({ goBack, ...props }) {
  return (
    <div className="tw-min-w-[400px] tw-min-h-[400px] tw-flex tw-justify-center tw-items-center tw-text-gray-700">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
        <ExclamationIcon className="tw-w-14 tw-h-14 tw-text-red-600" />
        <p className="tw-text-lg tw-mt-4">Error in teleplan connection</p>
        <Button onClick={goBack} className="tw-my-4" size="sm">
          Go Back
        </Button>
        <p className="tw-text-sm tw-mt-4 tw-block tw-max-w-[325px] tw-mx-auto">
          This is likely because there is a problem with your teleplan
          configurations.
          <p className="tw-mt-2">
            If this is not the case, please contact us at{" "}
            <a
              href="mailto:help@cortico.health"
              className="tw-text-blue-1000 tw-font-medium"
            >
              help@cortico.health
            </a>
          </p>
        </p>
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
          You may be seeing this because
          <ol className="tw-list-decimal tw-my-2">
            <li>
              all patients in the schedule have been checked by{" "}
              <span className="tw-font-medium tw-text-blue-1000">
                our plugin
              </span>
            </li>
            <li>the schedule contains no appointments</li>
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
