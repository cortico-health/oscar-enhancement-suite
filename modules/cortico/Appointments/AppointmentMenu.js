import { Ellipsis } from "../../Icons/Ellipsis";
import { getAppointments } from "./Appointments";
import "./AppointmentMenu.css";
import { Modal } from "../../Modal/Modal";
import { Masterfile } from "../../core/Masterfile";
import { Appointment } from "../../core/Appointment";
import { getPortalPage, getCorticoAppointmentUrl } from "../../Utils/Utils";
import { CorticoIcon } from "../../Icons/CorticoIcon";
import { create } from "../../Utils/Utils";

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
  const wrapper = document.createElement("div");
  wrapper.classList.add("appointment-menu-wrapper");
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

    console.log({ menu }, isOverflown(menu));

    function isOverflown(element) {
      return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
      );
    }
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

  const menuItems = appointmentMenuItems(apptTd);

  const title = document.createElement("div");
  title.classList.add("appointment-menu-header");
  const corticoIcon = CorticoIcon({
    attrs: {
      height: "15",
    },
  });
  title.appendChild(corticoIcon);

  const h5 = create("h5", {
    attrs: {
      class: "color-primary appointment-menu-heading",
    },
    text: "Cortico",
  });

  title.appendChild(h5);

  menu.appendChild(title);
  menu.appendChild(menuItems);

  const linkHeading = create("h5", {
    attrs: {
      class: "appointment-menu-subheading",
    },
    text: "Cortico Links",
  });

  menu.appendChild(linkHeading);

  wrapper.appendChild(container);
  return wrapper;
}

export function appointmentMenuItems(apptTd) {
  const appointment = new Appointment(apptTd);
  const providerNo = appointment.getCurrentProvider();
  const appointmentNo = appointment.getAppointmentNo();
  const items = [
    {
      title: "Portal Page",
      href: getPortalPage(),
    },
    {
      title: "Go To Appointment (Cortico)",
      href: getCorticoAppointmentUrl(providerNo, appointmentNo),
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
