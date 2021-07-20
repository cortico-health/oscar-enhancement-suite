import { Ellipsis } from "../../Icons/Ellipsis";
import { getAppointments } from "./Appointments";
import "./AppointmentMenu.css";
import { Masterfile } from "../../core/Masterfile";
import { Appointment } from "../../core/Appointment";
import { getPortalPage, getCorticoAppointmentUrl } from "../../Utils/Utils";
import { CorticoIcon } from "../../Icons/CorticoIcon";
import { create, getCorticoUrl } from "../../Utils/Utils";
import { Loader } from "../../Loader/Loader";

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
  const menuIcon = Ellipsis();
  const menu = create("div", {
    attrs: {
      class: "appointment-menu",
    },
  });

  const container = create(
    "div",
    {
      attrs: {
        class: "appointment-menu-container",
      },
    },
    menuIcon,
    menu
  );

  const wrapper = create(
    "div",
    {
      attrs: {
        class: "appointment-menu-wrapper",
      },
    },
    container
  );

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
      console.log(menu.getBoundingClientRect());
      const left = menu.getBoundingClientRect().left;
      if (left < 0) {
        menu.style = "left: 0; right: unset;";
      }
    },
    {
      once: true,
    }
  );

  const corticoLinks = getCorticoLinks(apptTd);

  const title = create("div", {
    attrs: {
      class: "appointment-menu-header",
    },
  });

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

  const linkHeading = create("h5", {
    attrs: {
      class: "appointment-menu-subheading",
    },
    text: "Cortico Links",
  });

  menu.appendChild(linkHeading);
  menu.appendChild(corticoLinks);

  const patientInfoHeading = create("h5", {
    attrs: {
      class: "appointment-menu-subheading",
    },
    text: "Contact Information",
  });

  const contactInfoContainer = create("div", {
    attrs: {
      class: "contactInfo",
    },
  });

  const hr = create("hr", {
    attrs: {
      style: "margin: 10px 0; border-color: rgba(255,255,255,0.3)",
    },
  });
  menu.appendChild(hr);

  menu.appendChild(patientInfoHeading);
  menu.appendChild(contactInfoContainer);
  wrapper.appendChild(container);
  return wrapper;
}

export function getCorticoLinks(apptTd) {
  if (!getCorticoUrl()) {
    const errorMessage = create("div", {
      attrs: {
        style: "white-space: initial;",
      },
      text: "Cortico clinic has not been set. Please set the Cortico Clinic URL from the sidebar.",
    });
    return errorMessage;
  }
  const appointment = new Appointment(apptTd);
  const providerNo = appointment.getCurrentProvider();
  const appointmentNo = appointment.getAppointmentNo();
  const items = [
    {
      title: "☛ Portal Page",
      href: getPortalPage(),
    },
    {
      title: "☛ Go To Appointment (Cortico)",
      href: getCorticoAppointmentUrl(providerNo, appointmentNo),
    },
  ];

  const list = create("ul");
  items.map((item) => {
    const listItem = create("li");
    const anchor = create("a");
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

  return list;
}

async function renderPatientInfo(apptTd) {
  if (!apptTd) {
    return;
  }

  const masterFile = new Masterfile(apptTd);

  const contactInfoContainer = apptTd.querySelector(".contactInfo");

  const loaderContainer = create(
    "div",
    {
      attrs: {
        style:
          "display: flex; width: 100%; justify-content: center; padding: 5px 0;",
      },
    },
    Loader()
  );
  contactInfoContainer.appendChild(loaderContainer);

  try {
    await masterFile.fetchPage();
    const email = masterFile.getEmail();
    const phoneNumbers = masterFile.getPhoneNumbers();
    const homePhone = phoneNumbers.find((p) => p.type === "home");
    const workPhone = phoneNumbers.find((p) => p.type === "work");

    let html = "";
    if (email) {
      html += `<div>☛ <a href="mailto:${email}">${email}</a></div>`;
    }

    if (homePhone && homePhone.phone) {
      html += `<div>☛ (Home) <a href="tel:${homePhone.phone}">${homePhone.phone}</a></div>`;
    }

    if (workPhone && workPhone.phone) {
      html += `<div>☛ (Work) <a href="tel:${workPhone.phone}">${workPhone.phone}</a></div>`;
    }
    contactInfoContainer.innerHTML = html;
  } catch (e) {
    console.error(e);
    contactInfoContainer.innerHTML = `<div style="white-space: initial;">Could not load contact information for this patient.</div>`;
  }
}
