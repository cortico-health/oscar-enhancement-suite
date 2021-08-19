import { Ellipsis } from "../../Icons/Ellipsis";
import { getAppointments, getAppointmentInfo } from "./Appointments";
import "./AppointmentMenu.css";
import { Masterfile } from "../../core/Masterfile";
import { Appointment } from "../../core/Appointment";
import { getPortalPage, getCorticoAppointmentUrl } from "../../Utils/Utils";
import { CorticoIcon } from "../../Icons/CorticoIcon";
import { create, getCorticoUrl } from "../../Utils/Utils";
import { Loader } from "../../Loader/Loader";

export function addAppointmentMenu() {
  const appointments = getAppointments();
  const checkCache = JSON.parse(localStorage.checkCache || '{}')
  const pharmaciesCache = JSON.parse(localStorage.pharmaciesCache || '{"demographics":[]}')

  const apptInfo = getAppointmentInfo(appointments);
  console.log(apptInfo)

  appointments.map((appt) => {
    appt.appendChild(appointmentMenu(appt, apptInfo, checkCache, pharmaciesCache));
  });

  // clicks outside the menu, close it.
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

export function appointmentMenu(apptTd, apptInfo, checkCache, pharmaciesCache) {

  const appointment = new Appointment(apptTd);
  const appointmentNo = appointment.getAppointmentNo();
  const apptInfoItem = apptInfo.find((item) => {
    return item.appointment_no === appointmentNo
  }) || {}

  const cacheValue = checkCache[apptInfoItem.demographic_no]
  const isPharmacyCached = pharmaciesCache.demographics.includes(apptInfoItem.demographic_no)

  if (isPharmacyCached) {
    apptTd.querySelector('[title="Prescriptions"]').appendChild(create(`<small>&#10004;</small>`))
  }
  let cacheColor = '#555555';
  if (cacheValue) {
    cacheColor = cacheValue.verified ? '#00cc51' : '#cc0063';
  }

  const corticoIcon = CorticoIcon({
    attrs: {
      height: "15",
    },
  });
  const corticoLinks = getCorticoLinks(apptTd);
  const menuIcon = Ellipsis();

  const wrapper = create(`
  <div class='appointment-menu-wrapper'>
    <div class='appointment-menu-container' style='background-color:${cacheColor}'>
      <div class='appointment-menu'>
        <div class='appointment-menu-close'>x</div>
        <div class='appointment-menu-header'>
          ${corticoIcon.outerHTML}
          <h5 class='color-primary appointment-menu-heading'>Cortico</h5>
        </div>
        <h5 class='color-primary appointment-menu-subheading'>Cortico Links</h5>
        ${corticoLinks}
        <hr style='margin: 10px 0; border-color: rgba(255,255,255,0.3)'></hr>
        <h5 class='appointment-menu-subheading'>Contact Information</h5>
        <div class='contactInfo'></div>
      </div>
      ${menuIcon.outerHTML}
    </div>
  </div>
  `, {

    events: {

      "click .appointment-menu-container": (e) => {
        // close button doesn't re-open
        if (e.target.className == 'appointment-menu-close') { return }
        const openMenu = document.querySelector(".appointment-menu.show");
        if (openMenu) {
          openMenu.classList.remove("show");
        }
        const menu = wrapper.querySelector('.appointment-menu')
        menu.classList.toggle("show");
      },

      "click .appointment-menu-close": (e) => {
        const openMenu = document.querySelector(".appointment-menu.show");
        openMenu.classList.remove("show");
      }

    }
  })

  // additional one-off event listener for initial render.
  wrapper.addEventListener(
    "click",
    async (e) => {
      await renderPatientInfo(apptTd);
      const menu = wrapper.querySelector('.appointment-menu')
      const left = menu.getBoundingClientRect().left;
      if (left < 0) {
        menu.style = "left: 0; right: unset;";
      }
    },
    {
      once: true,
    }
  );

  return wrapper;
}

export function getCorticoLinks(apptTd) {
  if (!getCorticoUrl()) {
    return `
      <div style="white-space: initial;">
        Cortico clinic has not been set. Please set the Cortico Clinic URL from the sidebar.
      </div>
    `
  }
  const appointment = new Appointment(apptTd);
  const providerNo = appointment.getCurrentProvider();
  const appointmentNo = appointment.getAppointmentNo();

  return `
  <ul>
    <li>
      <a href="${getPortalPage()}" target="_blank">
        ☛ Portal Page
      </a>
    </li><li>
      <a href="${getCorticoAppointmentUrl(providerNo, appointmentNo)}" target="_blank">☛ Go To Appointment (Cortico)
      </a>
      </li>
  </ul>
  `
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
    const result = await masterFile.fetchPage();
    if (result === false) {
      throw "Could not fetch page";
    }
    const email = masterFile.getEmail();
    const phoneNumbers = masterFile.getPhoneNumbers();
    const homePhone = phoneNumbers.find((p) => p.type === "home");
    const workPhone = phoneNumbers.find((p) => p.type === "work");
    const cellphone = phoneNumbers.find((p) => p.type === "cell");

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

    if (cellphone && cellphone.phone) {
      html += `<div>☛ (Cell) <a href="tel:${cellphone.phone}">${cellphone.phone}</a></div>`;
    }
    contactInfoContainer.innerHTML = html;
  } catch (e) {
    console.error(e);
    contactInfoContainer.innerHTML = `<div style="white-space: initial;">Could not load contact information for this patient.</div>`;
  }
}
