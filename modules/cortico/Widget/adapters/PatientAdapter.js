import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getPatientInfo } from "../../../../cortico";

export function PatientAdapter() {
  const dispatch = useDispatch();
  const result = useQuery(
    "patient",
    async () => {
      return await getPatientInfo();
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    }
  );

  if (result.isSuccess) {
    dispatch({
      type: "app/setPatientInfo",
      payload: result.data,
    });

    dispatch({
      type: "sidebar/setVisible",
      payload: {
        name: "Patient",
        visible: true,
      },
    });
  }
  return <></>;
}

export default PatientAdapter;
