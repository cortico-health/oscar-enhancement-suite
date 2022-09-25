import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getPatientInfo } from "../../../../cortico";
import { isEmpty } from "lodash";
import { useEffect } from "preact/hooks";

export function PatientAdapter() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPatientInfo().then((patient) => {
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
    });
  }, []);

  return <></>;
}

export default PatientAdapter;
