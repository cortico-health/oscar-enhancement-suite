import Select from "../base/Select";
import { useEffect, useState } from "preact/hooks";
import { nanoid } from "nanoid";
import { createPortal } from "preact/compat";
import Checkbox from "../base/Checkbox";

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

export default function Appointment() {
  const [resourcesContainer, setResourcesContainer] = useState(null);
  const [resourcesField, setResourcesField] = useState(null);
  const [workflowSlugs, setWorkflowSlugs] = useState([
    {
      value: "quiet",
      label: "quiet",
      id: nanoid(),
    },
    {
      value: "",
      label: "None",
      id: nanoid(),
    },
  ]);

  const [medium, setMedium] = useState(() => {
    const resourcesField = document.querySelector('[name="resources"]');
    if (!resourcesField?.value) {
      return localStorage.getItem("medium-option") || "placeholder";
    }
    return "placeholder";
  });
  const [workflow, setWorkflow] = useState("placeholder");
  const [textField, setTextField] = useState(false);
  useEffect(() => {
    const resourcesField = document.querySelector('[name="resources"]');
    const resourcesContainer = resourcesField.parentElement;

    if (resourcesField) {
      setResourcesField(resourcesField);
    }
    if (resourcesContainer) {
      setResourcesContainer(resourcesContainer);
    }
  }, []);

  useEffect(() => {
    if (resourcesField) {
      resourcesField.value = getResourceFieldString(medium, workflow);
    }
  }, [medium, workflow]);

  const getResourceFieldString = (medium, workflow) => {
    return `${medium === "placeholder" ? "" : medium}|${
      workflow === "placeholder" ? "" : workflow
    }`;
  };

  useEffect(() => {
    if (resourcesField) {
      if (resourcesField.value.includes("|")) {
        const [medium, workflow] = resourcesField.value.split("|");
        const existingMedium = mediums.find((m) => m.value === medium);
        const existingWorkflow = workflowSlugs.find(
          (w) => w.value === workflow
        );
        setMedium(existingMedium?.value || "placeholder");
        setWorkflow(existingWorkflow?.value || "placeholder");
      } else {
      }
    }
  }, [resourcesField]);

  return (
    <>
      {resourcesContainer &&
        createPortal(
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
                  options={workflowSlugs}
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
                  defaultChecked={textField}
                />
              </div>
            </div>
          </div>,
          resourcesContainer
        )}
    </>
  );
}
