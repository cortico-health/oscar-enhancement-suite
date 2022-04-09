import { useEffect, useState, useRef } from "preact/hooks";
import { nanoid } from "nanoid";
import Select from "../base/Select";
import Checkbox from "../base/Checkbox";
import { createPortal } from "preact/compat";
import Button from "../../../core/Button";
import { VideoCameraIcon } from "@heroicons/react/outline";

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

const getResourceFieldString = (medium, workflow) => {
  return `${medium === "placeholder" ? "" : medium}|${
    workflow === "placeholder" ? "" : workflow
  }`;
};

export default function SetupResources({
  resourcesField,
  resourcesContainer,
  workflowSlugs,
  onChange,
  ...props
}) {
  const isMount = useIsMount();
  const [medium, setMedium] = useState(() => {
    if (!resourcesField?.value) {
      return localStorage.getItem("medium-option") || "placeholder";
    } else if (resourcesField.value.includes("|")) {
      const [medium] = resourcesField.value.split("|");
      const existingMedium = mediums.find((m) => m.value === medium);
      return existingMedium?.value || "placeholder";
    } else {
      return "placeholder";
    }
  });
  const [workflow, setWorkflow] = useState(() => {
    if (!resourcesField?.value) {
      return localStorage.getItem("medium-option") || "placeholder";
    } else if (resourcesField.value.includes("|")) {
      const [medium, workflow] = resourcesField.value.split("|");
      const existingWorkflow = mediums.find((m) => m.value === workflow);
      return existingWorkflow?.value || "placeholder";
    } else {
      return "placeholder";
    }
  });
  const [textField, setTextField] = useState(false);
  const [slugs, setSlugs] = useState([]);
  const [buttonContainer, setButtonContainer] = useState(null);

  useEffect(() => {
    if (resourcesField && !isMount) {
      resourcesField.value = getResourceFieldString(medium, workflow);
      resourcesField.setAttribute(
        "value",
        getResourceFieldString(medium, workflow)
      );
    }
  }, [medium, workflow]);

  useEffect(() => {
    if (textField === false) {
      resourcesField.style.display = "none";
    } else {
      resourcesField.style.display = "block";
    }
  }, [textField]);

  useEffect(() => {
    if (workflowSlugs) {
      const slugs = workflowSlugs.map((wf) => {
        return {
          value: wf.slug,
          label: wf.name,
          id: wf.slug,
        };
      });
      setSlugs(slugs);

      if (resourcesField?.value && resourcesField.value.includes("|")) {
        const [medium, workflow] = resourcesField.value.split("|");
        const existingWorkflow = slugs.find((w) => w.value === workflow);
        setWorkflow(existingWorkflow?.value || "placeholder");
      }
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
    <div className="tw-p-4 tw-font-sans">
      <div className="tw-bg-gray-100 tw-p-2 tw-rounded-md tw-shadow-lg tw-flex tw-flex-col tw-space-y-3">
        <div>
          <Select
            label="Medium"
            className="tw-bg-white tw-text-gray-700"
            options={mediums}
            onChange={(val) => setMedium(val)}
            defaultValue={medium}
            placeholder={true}
            placeholderText="Select a Medium"
            value={medium}
          ></Select>
        </div>
        <div>
          <Select
            label="Workflow"
            className="tw-bg-white tw-text-gray-700 "
            options={slugs}
            onChange={(val) => setWorkflow(val)}
            defaultValue={workflow}
            placeholderText="Select a Workflow"
            placeholder={true}
            value={workflow}
          ></Select>
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
      </div>
      {buttonContainer &&
        medium === "virtual" &&
        createPortal(
          <div className="tw-p-2">
            <VideoCallButton></VideoCallButton>
          </div>,
          buttonContainer
        )}
    </div>
  );
}

function VideoCallButton() {
  const openAppointmentLink = () => {
    const searchParams = new URLSearchParams();
    const apptNo = searchParams.get("appointment_no");
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
