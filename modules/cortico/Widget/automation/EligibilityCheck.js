import { checkAllEligibility } from "../../../../cortico.js";
import { useEffect, useState } from "preact/hooks";
import { EmojiSadIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from "@heroicons/react/outline";
import Button from "../../../core/Button";
import Table from "../Table.js";
import ProgressBar from "../ProgressBar.js";
import Alert from "../Alert.js";
import { useSelector } from "react-redux";
import NoAppointments from "./NoAppointments";
import Header from "../base/Header.js";

export default function EligbilityCheck({ goBack, ...props }) {
  const eligCheck = useSelector((state) => state.eligCheck);
  const eligCheckFails = useSelector((state) => state.eligCheckFails);
  console.log("Elig Check State", eligCheck);
  useEffect(() => {
    if (eligCheck.running === false && eligCheck.complete === false) {
      checkAllEligibility();
      console.log("Ran");
    } else {
      console.log("Didnt run");
    }
  }, [eligCheck.running, eligCheck.complete]);

  return (
    <div className="tw-font-sans">
      <div>
        <Header
          title="Eligibility Checker"
          desc="Verifies the validity of all MSP numbers for the current schedule"
        />
        <hr className="tw-my-6" />
        <div>
          {eligCheck.empty === true ? (
            <NoAppointments goBack={goBack} title="No Appointments To Check">
              <div>
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
              </div>
            </NoAppointments>
          ) : eligCheck.teleplan === true ? (
            <Teleplan goBack={goBack} />
          ) : (
            <Running
              goBack={goBack}
              complete={eligCheck.complete}
              current={eligCheck.current}
              total={eligCheck.total}
              demographicNo={eligCheck.demographicNo}
              failures={eligCheckFails}
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
      <div className="tw-w-3 tw-h-3 tw-rounded-full tw-bg-blue-1000"></div>
      <div className="tw-w-3 tw-h-3 tw-rounded-full tw-bg-blue-1000"></div>
      <div className="tw-w-3 tw-h-3 tw-rounded-full tw-bg-blue-1000"></div>
    </div>
  );
}

function Running({
  complete,
  failures,
  current,
  total,
  demographicNo,
  goBack,
  ...props
}) {
  const [fails, setFails] = useState([]);

  const FailedIcon = () => {
    return (
      <EmojiSadIcon className="tw-w-5 tw-h-5 tw-text-red-500 tw-mx-auto" />
    );
  };

  const ProgressTitle = () => {
    if (complete === true) {
      return <p>Complete!</p>;
    } else {
      return <p>Current Patient: {demographicNo}</p>;
    }
  };

  useEffect(() => {
    if (failures) {
      const temp = [];
      failures.map((f) => {
        const Name = () => (
          <p className="tw-max-w-[100px] tw-text-xs">
            {f.firstName} {f.lastName}
          </p>
        );
        const Reason = () => (
          <p className="tw-max-w-[90px] tw-text-xs">{f.reason}</p>
        );

        const Demographic = () => (
          <p className="tw-text-xs">{f.demographicNo}</p>
        );
        temp.push([<Name />, <Demographic />, <Reason />, <FailedIcon />]);
      });
      setFails(temp);
    }
  }, [failures]);
  return (
    <div className="">
      <div className="tw-mt-4 tw-mb-8">
        <Alert
          size="sm"
          title="Warning"
          message="Refreshing the page will stop the eligibility check."
        ></Alert>
      </div>
      <div className="tw-min-w-[400px] tw-flex tw-justify-center tw-items-center tw-text-gray-700">
        <div>
          <div className="tw-min-w-[300px]">
            <ProgressBar
              current={current}
              total={total}
              title={<ProgressTitle />}
            />
          </div>
          {complete === true ? (
            <div className="tw-text-center">
              <Button onClick={goBack} className="tw-my-4" size="sm">
                Go Back
              </Button>
            </div>
          ) : null}
          {fails.length > 0 ? (
            <div className="tw-min-w-[350px]">
              <hr className="tw-my-4" />
              <div>
                <p className=" tw-text-blue-9000 tw-text-base tw-m-0 tw-p-0 tw-mt-8">
                  Report
                </p>
                <p className="tw-text-gray-700 tw-text-xs tw-mb-4">
                  The ones that failed their eligibility checks
                </p>
              </div>
              <Table
                headers={["Name", "Demographic Number", "Reason", "Status"]}
                data={fails}
              />
            </div>
          ) : null}
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
