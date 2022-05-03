import { useEffect, useState, useRef } from "preact/hooks";
import { nanoid } from "nanoid";
import Select from "../base/Select";
import Checkbox from "../base/Checkbox";
import { createPortal } from "preact/compat";
import Button from "../../../core/Button";
import { VideoCameraIcon } from "@heroicons/react/outline";
import { getCorticoUrl } from "../../../Utils/Utils";
function useIsMount() {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
}

const mediums = [
  {
    value: "phone",
    label: "Phone",
    id: nanoid(),
  },
  {
    value: "clinic",
    label: "Clinic",
    id: nanoid(),
  },
  {
    value: "virtual",
    label: "Virtual",
    id: nanoid(),
  },
  {
    value: "",
    label: "None",
    id: nanoid(),
  },
  {
    value: "quiet",
    label: "Quiet",
    id: nanoid(),
  },
];

export default function SetupResources({
  resourcesField,
  resourcesContainer,
  workflowSlugs,
  onChange,
  ...props
}) {
  const isMount = useIsMount();
  const [medium, setMedium] = useState(null);
  const [workflow, setWorkflow] = useState(null);
  const [textField, setTextField] = useState(false);
  const [slugs, setSlugs] = useState([]);
  const [buttonContainer, setButtonContainer] = useState(null);
  const resourcesFieldValue = resourcesField.value;

  useEffect(() => {
    if (!resourcesFieldValue) {
      const defaultMedium = localStorage.getItem("medium-option");
      setMedium(defaultMedium);
      handleMediumChange(defaultMedium);
      setWorkflow("placeholder");
    } else {
      const [medium, workflow] = resourcesFieldValue.split("|");
      if (medium && mediums.some((m) => m.value === medium)) {
        setMedium(medium);
      } else {
        setMedium("placeholder");
      }
      if (workflow && slugs.some((w) => w.value === workflow)) {
        setWorkflow(workflow);
      } else {
        setWorkflow("placeholder");
      }
    }
  }, [slugs]);

  const handleMediumChange = (val) => {
    setMedium(val);
    const [inputMedium, workflow] = resourcesFieldValue.split("|");
    console.log(val, workflow);
    resourcesField.value = [
      val,
      workflow === "placeholder" ? "" : workflow,
    ].join("|");
  };

  const handleWorkflowChange = (val) => {
    setWorkflow(val);
    const [medium, inputWorkflow] = resourcesFieldValue.split("|");
    resourcesField.value = [medium === "placeholder" ? "" : medium, val].join(
      "|"
    );
  };

  useEffect(() => {
    if (textField === false) {
      resourcesField.style.display = "none";
    } else {
      resourcesField.style.display = "block";
    }
  }, [textField]);

  useEffect(() => {
    console.log("Workflow slugs", workflowSlugs);
    if (workflowSlugs) {
      const slugs = workflowSlugs.map((wf) => {
        return {
          value: wf.slug,
          label: wf.name,
          id: wf.slug,
        };
      });
      setSlugs(slugs);
    }
  }, [workflowSlugs]);

  useEffect(() => {
    const printReceipt = window.document.querySelector("#printReceiptButton");
    const container = printReceipt?.parentNode;
    if (container) {
      setButtonContainer(container);
    }
  }, []);

  return (
    <div className="tw-p-0 tw-font-sans">
      <div className="tw-flex tw-items-center">
        <div>
          <Select
            label="Medium"
            className="tw-bg-white tw-text-gray-700"
            options={mediums}
            onChange={(val) => handleMediumChange(val)}
            defaultValue={medium}
            placeholder={true}
            placeholderText="Select a Medium"
            value={medium}
          ></Select>
        </div>
        <div>
          {workflowSlugs && workflowSlugs.length > 0 && (
            <Select
              label="Workflow"
              className="tw-bg-white tw-text-gray-700 "
              options={slugs}
              onChange={(val) => handleWorkflowChange(val)}
              defaultValue={workflow}
              placeholderText="Select a Workflow"
              placeholder={true}
              value={workflow}
            ></Select>
          )}
        </div>
      </div>
      <div className="tw-block">
        <Checkbox
          className="tw-border"
          label="Show Text Field"
          checked={textField}
          onChange={(isChecked) => setTextField(isChecked)}
          defaultChecked={textField}
        />
      </div>
      {buttonContainer &&
        medium === "virtual" &&
        createPortal(
          <div className="tw-p-2 tw-inline-block">
            <VideoCallButton></VideoCallButton>
          </div>,
          buttonContainer
        )}
    </div>
  );
}

function VideoCallButton() {
  const openAppointmentLink = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const apptNo = searchParams.get("appointment_no");
    console.log("Appot no", apptNo);
    if (!apptNo) {
      return alert(
        "Please save your appointment first, before starting a video call."
      );
    }
    window.open(getCorticoUrl() + "/appointment/" + apptNo);
  };
  return (
    <Button
      onClick={openAppointmentLink}
      size="sm"
      className="tw-bg-indigo-100 tw-text-blue-1000 tw-text-sm  tw-rounded-md tw-font-medium"
      variant="custom"
    >
      <span className="tw-flex tw-items-center tw-cursor-pointer">
        <span className="tw-cursor-pointer">Video Call</span>
        <VideoCameraIcon className="tw-h-4 tw-w-4 tw-ml-2 tw-cursor-pointer" />
      </span>
    </Button>
  );
}
