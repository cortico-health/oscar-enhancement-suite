import { Ellipsis } from "../Icons/Ellipsis";
import { getAppointments } from "./Appointments";
import "./AppointmentMenu.css";

export function addAppointmentMenu() {
  const appointments = getAppointments();
  appointments.map((appt) => {
    appt.appendChild(Ellipsis());
  });
  console.log("Appointments", appointments);
}

export function appointmentMenu() {
  const container = document.createElement("div");
  const menu = document.createElement("div");
  menu.classList.add("appointment-menu");
}
