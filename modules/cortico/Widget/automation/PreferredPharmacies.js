import { useSelector } from "react-redux";
import { useEffect, useState } from "preact/hooks";
import { setupPreferredPharmacies } from "../../../../cortico.js";
import NoAppointments from "./NoAppointments";
import Table from "../Table.js";
import ProgressBar from "../ProgressBar.js";
import Alert from "../Alert.js";
import Button from "../../../core/Button";
import Header from "../base/Header";

export default function PreferredPharmacies({ goBack, ...props }) {
  const setupPharmacies = useSelector((state) => state.setupPharmacies);
  const failures = useSelector((state) => state.setupPharmaciesFailures);

  console.log("Setup Pharmacies", setupPharmacies);
  console.log("Setup Pharmacies Failures", failures);

  useEffect(() => {
    if (
      setupPharmacies.running === false &&
      setupPharmacies.complete === false
    ) {
      setupPreferredPharmacies();
    }
  }, [setupPharmacies.running, setupPharmacies.complete]);

  return (
    <div className="tw-font-sans">
      <Header
        title="Set Preferred Pharmacies"
        desc="Apply preferred pharmacies for each given patient in the schedule"
      ></Header>
      <hr className="tw-my-2" />

      <div>
        {setupPharmacies.empty === true ? (
          <NoAppointments goBack={goBack} title="No Pharmacies To Set">
            <div>
              You may be seeing this because
              <ol className="tw-list-decimal tw-my-2">
                <li>
                  Pharmacies have been set for all patients{" "}
                  <span className="tw-font-medium tw-text-blue-1000">
                    in the current schedule by our plugin
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
        ) : (
          <Running
            current={setupPharmacies.current}
            total={setupPharmacies.total}
            demographicNo={setupPharmacies.demographicNo}
            complete={setupPharmacies.complete}
            failures={failures}
            goBack={goBack}
          />
        )}
      </div>
    </div>
  );
}

function Running({
  failures,
  complete,
  current,
  total,
  demographicNo,
  goBack,
  ...props
}) {
  const [fails, setFails] = useState([]);
  useEffect(() => {
    if (failures) {
      const temp = [];
      failures.map((f) => {
        temp.push([f.demographicNo, f.reason]);
      });
      setFails(temp);
    }
  }, [failures]);

  const ProgressTitle = () => {
    if (complete === true) {
      return <p>Complete!</p>;
    } else {
      return <p>Current Patient: {demographicNo}</p>;
    }
  };
  return (
    <div>
      <div className="tw-mt-4 tw-mb-8">
        <Alert
          size="sm"
          title="Warning"
          message="Refreshing the page will stop the eligibility check."
        ></Alert>
      </div>
      <ProgressBar
        current={current}
        total={total}
        complete={complete}
        title={<ProgressTitle />}
      ></ProgressBar>

      {complete === true ? (
        <div className="tw-flex tw-justify-center tw-mt-2">
          <Button size="sm" onClick={goBack}>
            Go Back
          </Button>
        </div>
      ) : null}

      {fails.length > 0 ? (
        <div className="tw-mt-4">
          <Table
            headers={["Demographic Number", "Reason"]}
            data={fails}
          ></Table>
        </div>
      ) : null}
    </div>
  );
}
