import { useEffect, useState } from "preact/hooks";
import { getPatientInfo } from "../../../../cortico";
import Button from "../../../core/Button";
import dayjs from "dayjs";
import { getCorticoUrl } from "../../../Utils/Utils";

function RecallButton() {
  const sendRecallEmail = async (evt) => {
    evt.preventDefault();
    const patientInfo = await getPatientInfo();
    const patientEmail = patientInfo.email;
    const formData = new FormData(
      document.querySelector("form[name=EDITAPPT]")
    );
    const apptTime = formData.get("start_time");
    const apptDate = formData.get("appointment_date");
    const apptPatient = formData.get("keyword");

    if (!patientEmail) {
      alert("Patient has no email");
      return;
    }
    if (!apptTime || !apptDate) {
      alert("Please provide date/time");
      return;
    }

    var apptSchedule = apptDate + "T" + apptTime;
    var cleanedSchedule = dayjs(apptSchedule).format("h:mmA on MMMM D");
    var cleanedPatient = apptPatient ? apptPatient : "Patient";
    var clinicName = localStorage["clinicname"] || "Your Medical Clinic";

    window.location.href =
      `mailto:${patientEmail}?subject=Your doctor wants to speak with you&` +
      `body=Dear ${cleanedPatient},%0d%0aYour doctor needs to follow up with you regarding some documents or results.%0d%0a` +
      `We have tentatively booked you an appointment at ${cleanedSchedule}.%0d%0a%0d%0aPlease confirm with the following link:` +
      `${getCorticoUrl()}/get-patient-appointment-lookup-url/%0d%0a%0d%0a` +
      `Sincerely,%0d%0a${clinicName.toUpperCase()} STAFF`;
  };

  return (
    <Button
      onClick={sendRecallEmail}
      size="sm"
      className="tw-bg-indigo-100 tw-text-blue-1000 tw-text-sm  tw-rounded-md tw-font-medium"
      variant="custom"
    >
      <span className="tw-flex tw-items-center tw-cursor-pointer">
        <span className="tw-cursor-pointer">Recall Email</span>
      </span>
    </Button>
  );
}

export default function SetupRecall() {
  const [recallStatus, setRecallStatus] = useState(() => {
    return localStorage["recall-status"] || "to do";
  });

  const [show, setShow] = useState(false);

  const handleStatus = (statusOption) => {
    const statusText = statusOption?.textContent.toLowerCase();
    if (recallStatus.toLowerCase() === statusText) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    const statusSelect = document.querySelector("select[name='status']");
    const statusOption = document.querySelector(
      "select[name='status'] option[selected]"
    );
    handleStatus(statusOption);

    const handleStatusSelect = (evt) => {
      const statusOption = evt.target.options[evt.target.selectedIndex];

      handleStatus(statusOption);
    };
    statusSelect.addEventListener("change", handleStatusSelect);

    return () => {
      statusSelect.removeEventListener("change", handleStatusSelect);
    };
  }, []);

  return <>{show === true ? <RecallButton /> : null}</>;
}
