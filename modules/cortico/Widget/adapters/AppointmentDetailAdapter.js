import { create, isEmpty } from "lodash";
import { createPortal } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { getAppointments } from "../../Appointments/Appointments";
import AppointmentDetails from "../features/AppointmentDetails/AppointmentDetails";

export default function AppointmentDetailAdapter() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(getAppointments());
  }, []);

  if (!isEmpty(appointments)) {
    console.log("Appointments is not empty", appointments);

    return (
      <>
        {appointments.map((appointment) => {
          return createPortal(
            <div className="tw-inline-block tw-relative">
              <AppointmentDetails></AppointmentDetails>
            </div>,
            appointment
          );
        })}
      </>
    );
  }

  return <div>Hello</div>;
}
