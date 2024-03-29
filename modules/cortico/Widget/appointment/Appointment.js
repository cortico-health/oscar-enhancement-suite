import { useEffect, useState } from "preact/hooks";
import { createPortal } from "preact/compat";
import SetupResources from "./SetupResources";
import { useSelector, useDispatch } from "react-redux";
import { loadExtensionStorageValue, isLoggedIn } from "../../../Utils/Utils";
import storage from "../storage";
import { getClinicSettings } from "../../../Api/Api";
import SetupRecall from "./SetupRecall";

export default function Appointment() {
  const { isLoggedIn: loggedIn } = useSelector((state) => state.auth);
  const { wf_slugs: workflowSlugs } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [resourcesContainer, setResourcesContainer] = useState(null);
  const [buttonContainer, setButtonContainer] = useState(null);
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

    const printReceipt = window.document.querySelector("#printReceiptButton");
    const container = printReceipt?.parentNode;
    if (container) {
      setButtonContainer(container);
    }
  }, []);

  useEffect(() => {
    isLoggedIn().then((result) => {
      dispatch({
        type: "auth/setLoggedIn",
        payload: result,
      });
    });
  }, []);

  useEffect(() => {
    if (loggedIn === true) {
      let settingsToLoad = null;
      storage
        .getItem("oes")
        .then((settings) => {
          if (!settings) {
            return loadExtensionStorageValue("jwt_access_token");
          } else {
            settingsToLoad = settings;
            return Promise.reject("Settings loaded");
          }
        })
        .then((token) => getClinicSettings(token))
        .then((response) => response.json())
        .then((settings) => (settingsToLoad = settings))
        .catch((error) => console.error(error))
        .finally(() => {
          if (settingsToLoad) {
            dispatch({
              type: "app/set",
              payload: settingsToLoad,
            });
          }
        });
    }
  }, [loggedIn]);

  return (
    <>
      {resourcesContainer &&
        resourcesField &&
        createPortal(
          <div className="tailwind preflight tw-inline-block">
            <SetupResources
              resourcesContainer={resourcesContainer}
              resourcesField={resourcesField}
              workflowSlugs={workflowSlugs}
            />
          </div>,
          resourcesContainer
        )}
      {buttonContainer &&
        createPortal(
          <div className="tailwind preflight tw-inline-block">
            <SetupRecall />
          </div>,
          buttonContainer
        )}
    </>
  );
}
