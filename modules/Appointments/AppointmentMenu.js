import { Ellipsis } from "../Icons/Ellipsis";
import { getAppointments } from "./Appointments";
import "./AppointmentMenu.css";

export function addAppointmentMenu() {
  const appointments = getAppointments();
  appointments.map((appt) => {
    appt.appendChild(appointmentMenu());
  });
  console.log("Appointments", appointments);

  document.addEventListener("click", (e) => {});
}

export function appointmentMenu() {
  const container = document.createElement("div");
  container.classList.add("appointment-menu-container");

  const menuIcon = Ellipsis();
  container.appendChild(menuIcon);

  const menu = document.createElement("div");
  container.appendChild(menu);
  menu.classList.add("appointment-menu");

  menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("show");
  });

  return container;
}
