import Select from "../base/Select";
import { useEffect, useState } from "preact/hooks";
import { nanoid } from "nanoid";
import { createPortal } from "preact/compat";

const medium = ["phone", "clinic", "virtual", "", "quiet"];

export default function Appointment() {
  const [corticoMedium, setCorticoMedium] = useState([]);
  const [resourcesContainer, setResourcesContainer] = useState(null);
  const [resourcesField, setResourcesField] = useState(null);
  useEffect(() => {
    const temp = corticoMedium.map((cm) => {
      return {
        ...cm,
        id: nanoid,
      };
    });
    setCorticoMedium(temp);

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
        createPortal(<div>Hello World From Portal</div>, resourcesContainer)}
    </>
  );
}
