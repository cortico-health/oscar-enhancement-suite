import { useEffect, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import SetupResources from "./SetupResources";

export default function Appointment() {
  const [resourcesContainer, setResourcesContainer] = useState(null);
  const [resourcesField, setResourcesField] = useState(null);

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

  return (
    <>
      {resourcesContainer &&
        resourcesField &&
        createPortal(
          <SetupResources
            resourcesContainer={resourcesContainer}
            resourcesField={resourcesField}
          />,
          resourcesContainer
        )}
    </>
  );
}
