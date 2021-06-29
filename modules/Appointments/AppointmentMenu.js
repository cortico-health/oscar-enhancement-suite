import { Ellipsis } from "../Icons/Ellipsis";
import { getAppointments } from "./Appointments";

export function addAppointmentMenu() {
  const appointments = getAppointments();
  console.log("Appointments", appointments);
}
