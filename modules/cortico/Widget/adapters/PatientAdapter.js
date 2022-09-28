import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getPatientInfo } from "../../../../cortico";
import { isEmpty } from "lodash";
import { useEffect } from "preact/hooks";

export function PatientAdapter() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPatientInfo()
      .then((patient) => {
        console.log("Patient", patient);
        dispatch({
          type: "app/setPatientInfo",
          payload: patient,
        });

        dispatch({
          type: "sidebar/setVisible",
          payload: {
            name: "Patient",
            visible: true,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <></>;
}

export default PatientAdapter;
