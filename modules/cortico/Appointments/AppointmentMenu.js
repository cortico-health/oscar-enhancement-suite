import { Ellipsis } from "../../Icons/Ellipsis";
import { getAppointments } from "./Appointments";
import "./AppointmentMenu.css";
import { Modal } from "../../Modal/Modal";
import { Masterfile } from "../../core/Masterfile";
import corticoIcon from "../../../resources/icons/96x96.png";

const modal = new Modal();

export function addAppointmentMenu() {
  const appointments = getAppointments();
  appointments.map((appt) => {
    appt.appendChild(appointmentMenu(appt));
  });

  const html = document.documentElement;
  html.addEventListener("click", (e) => {
    const menu = e.target.closest(".appointment-menu-container");
    const menuToggle = e.target.closest(".ellip-dot-wrapper");

    if (!menu && !menuToggle) {
      const openMenu = document.querySelector(".appointment-menu.show");
      if (openMenu) {
        openMenu.classList.remove("show");
      }
    }
  });
}

export function appointmentMenu(apptTd) {
  const container = document.createElement("div");
  container.classList.add("appointment-menu-container");

  const menuIcon = Ellipsis();
  container.appendChild(menuIcon);

  const menu = document.createElement("div");
  container.appendChild(menu);
  menu.classList.add("appointment-menu");

  container.addEventListener("click", (e) => {
    const openMenu = document.querySelector(".appointment-menu.show");
    if (openMenu) {
      openMenu.classList.remove("show");
    }
    menu.classList.toggle("show");
  });

  container.addEventListener(
    "click",
    async (e) => {
      await renderPatientInfo(apptTd);
    },
    {
      once: true,
    }
  );

  const menuItems = appointmentMenuItems();
  menu.appendChild(menuItems);

  return container;
}

export function appointmentMenuItems() {
  const items = [
    {
      title: "Portal Page",
      href: "http://google.ca",
    },
    {
      title: "Go To Appointment (Cortico)",
      href: "#",
    },
  ];

  const list = document.createElement("ul");
  items.map((item) => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    listItem.appendChild(anchor);
    anchor.textContent = item.title;

    if (item.href) {
      anchor.setAttribute("href", item.href);
    }

    if (item.onClick) {
      anchor.addEventListener("click", (e) => {
        item.onClick(e);
      });
    }

    list.appendChild(listItem);
  });

  const listItem = document.createElement("li");
  listItem.classList.add("contactInfo");
  list.appendChild(listItem);

  return list;
}

export function getPatientContactInfo(e) {
  console.log("Hello World", e.target.closest("td.appt"));
}

async function renderPatientInfo(apptTd) {
  console.log("Appt TD", apptTd);
  if (!apptTd) {
    return;
  }

  const masterFile = new Masterfile(apptTd);
  await masterFile.fetchPage();
  console.log(masterFile);

  const email = masterFile.getEmail();
  const phoneNumbers = masterFile.getPhoneNumbers();
  console.log("Phone Numbers", phoneNumbers);
  const homePhone = phoneNumbers.find((p) => p.type === "home");
  const workPhone = phoneNumbers.find((p) => p.type === "work");

  const contactInfoContainer = apptTd.querySelector(".contactInfo");

  let html = "";
  if (email) {
    html += `<div>Email: ${email}</div>`;
  }

  if (homePhone && homePhone.phone) {
    html += `<div>Home: ${homePhone.phone}</div>`;
  }

  if (workPhone && workPhone.phone) {
    html += `<div>Work: ${workPhone.phone}</div>`;
  }
  contactInfoContainer.innerHTML = html;
}