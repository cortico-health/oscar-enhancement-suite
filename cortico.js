// ==UserScript==
// @name     Cortico
// @version  2022.4.6
// @grant    none
// ==/UserScript==

/**
 *
 *  Oscar Enhancement Suite
    Copyright (C) 2021 Cortico Health Technologies

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import "cleanslate";
import { pubSubInit } from "./modules/PubSub/PubSub";
import dayjs from "dayjs";
import {
  getAppointments,
  getAppointmentLink,
  extractApptUrl,
  getAppointmentInfo,
} from "./modules/cortico/Appointments/Appointments";
import { addAppointmentMenu } from "./modules/cortico/Appointments/AppointmentMenu";
import { Oscar } from "./modules/core/Oscar.js";
import "element-closest-polyfill";
import { getOrigin, getNamespace, htmlToElement } from "./modules/Utils/Utils";
import { CorticoIcon } from "./modules/Icons/CorticoIcon";
import {
  debounce,
  create,
  getDemographicNo,
  getCorticoUrl,
  convertImagesToDataURLs,
  stripScripts,
} from "./modules/Utils/Utils";
import {
  loadExtensionStorageValue,
  addToCache,
  checkCorticoUrl,
} from "./modules/Utils/Utils";
import "./index.css";
const CORTICO = {}; // container for global state. Use this rather than `window`

import LoginOscar from "./modules/Login/LoginOscar";
import CorticoWidget from "./modules/cortico/Widget/CorticoWidget";
import produce from "immer";
import { initialState as setupPharmacyState } from "./modules/cortico/Widget/features/Pharmacy/SetupPreferredPharmacies";
import { initialState as eligCheckState } from "./modules/cortico/Widget/features/EligCheck/EligCheck";
import widgetStore from "./modules/cortico/Widget/store/store";
import { getAccountProviderNo } from "./modules/Utils/Utils";
const version = "2022.4.6";
const pubsub = pubSubInit();
const oscar = new Oscar(window.location.hostname);
window.is_dev = process.env.NODE_ENV === "development" ? true : false;
window.corticoOscar = oscar;
const cortico_media = ["phone", "clinic", "virtual", "", "quiet"];
const corticoWidgetContainer = document.createElement("div");
document.body.append(corticoWidgetContainer);

const init_cortico = async function () {
  // create an element to indicate the library is loaded in the dom, and to contain fixed menus/elements.
  const anchor = document.createElement("div");
  anchor.id = "cortico_anchor";
  document.body.appendChild(anchor);

  const route = "" + window.location;
  const oscar_elements = Array.from(
    document.getElementsByTagName("script")
  ).filter(function (s) {
    return (
      s.src.indexOf("/Oscar.js") > 0 ||
      s.src.indexOf("/oscar/js/") > 0 ||
      s.src.indexOf("/appointment.js") > 0 ||
      s.src.indexOf("phr/phr.js" > -1) // Encounter page
    );
  });

  // some pages have no scripts, but they have other elements.
  if (!oscar_elements) {
    oscar_elements = document.querySelectorAll("div.DoNotPrint>table");
  }

  // do not run unless we're on an Oscar page.

  if (oscar_elements.length === 0) {
    console.log("Cortico could not find any oscar script");
    return;
  }

  console.log("cortico plug-in initializing, version:", version);
  window.pubsub = pubsub;

  const corticoWidgetContainer = document.createElement("div");
  document.body.append(corticoWidgetContainer);

  /*
  const modal = new Modal();
  modal.setContent(Dashboard());
  modal.show();
*/
  if (
    route.indexOf("/appointment/addappointment.jsp") > -1 ||
    route.indexOf("/appointment/appointmentcontrol.jsp") > -1
  ) {
    CorticoWidget(document.body, corticoWidgetContainer, {
      mode: "appointment",
    });

    if ((window.location.href + "").includes("appointment_no")) {
      init_diagnostic_viewer_button();
    }

    // only show on add appointment
    if (route.indexOf("/appointment/addappointment.jsp") > -1) {
    }
  } else if (oscar.isSchedulePage()) {
    init_schedule();

    /**
     * Drag and drop - disabled for stability reasons.
     * TODO: fixme?
     */
    if (!oscar.isJuno() && !oscar.isKaiOscarHost()) {
      dragAndDrop();
    }

    addCorticoLogo();
    addMenu();
    getAccountProviderNo();

    CorticoWidget(document.body, corticoWidgetContainer, {
      disabledFeatures: ["messenger"],
    });
    addAppointmentMenu();

    const isMarkham = window.location.href.includes("mmfcc");
    if ((!oscar.isJuno() && !oscar.containsKaiBar()) || isMarkham) {
      plusSignFromCache();
    }

    setupPrescriptionButtons();
  } else if (
    route.indexOf("/eform/efmformadd_data.jsp") > -1 ||
    route.indexOf("/eform/efmshowform_data.jsp") > -1 ||
    route.indexOf("/casemgmt/forward.jsp") > -1
  ) {
    //const patient_info = await getPatientInfo();

    if (oscar.isEncounterPage()) {
      CorticoWidget(document.body, corticoWidgetContainer, {
        disabledFeatures: ["automation"],
      });
    } else {
      CorticoWidget(document.body, corticoWidgetContainer, {
        disabledFeatures: ["text", "automation"],
        eForm: true,
      });

      if (oscar.isKaiOscarHost()) {
        document.body.setAttribute(
          "style",
          "margin-top: 0px; transform: scale(1)"
        );
      }
    }
  } else if (oscar.isDocumentPage()) {
    CorticoWidget(document.body, corticoWidgetContainer, {
      disabledFeatures: ["text", "automation"],
      document: true,
    });
  } else if (oscar.isInboxDocument()) {
    CorticoWidget(document.body, corticoWidgetContainer, {
      disabledFeatures: ["text", "encounter", "automation"],
      inboxDocument: true,
    });
  } else if (route.indexOf("/oscarRx/ViewScript2.jsp") > -1) {
    // We need to determine first if the prescription is "delivery"
    console.log("Fax Page");
    const currentPharmacyCode = localStorage.getItem("currentPharmacyCode");
    if (currentPharmacyCode.toLowerCase().indexOf("dlvr") > -1) {
      const additionalNotes = document.getElementById("additionalNotes");
      additionalNotes.value = "FOR DELIVERY";
      // make sure the preview frame is loaded before adding the notes
      const previewFrame = document.getElementById("preview");

      previewFrame.addEventListener("load", function () {
        // addNotes is a function in oscar
        addNotes();
      });

      // setupFaxButton();
    }
  }
  init_styles();
};

const init_schedule = function () {
  if (
    !(
      oscar.isOscarGoHost() ||
      oscar.isKaiOscarHost() ||
      oscar.containsKaiBar() ||
      oscar.containsOscarGoOceanScript()
    )
  ) {
    const debounced = debounce(oscar.updateDoctorHeadings.bind(oscar), 50);
    window.addEventListener("scroll", debounced);
  } else {
    console.log(
      "Oscar Go or KAI Oscar detected; disabling sticky headers for doctor names"
    );
  }

  // cancel the <meta http-equiv="refresh" content="60;">
  // note: this is currently set to 30 seconds, which is enough time (the refresh occurs
  // at 60s). Calling window.stop() too early breaks the Oscar menus ("Inbox" "Msg" "Consultations"
  // "Tickler") that are loaded by ajax

  // This no longer seems necessary.
  //if (!(window.location + '').includes('casemgmt/forward.jsp')) { // Don't break autosave in eChart

  window.setTimeout(window.stop, 10000);

  // refresh when idle for 1 minute.

  let last_interaction = new Date();
  window.addEventListener("click", (e) => {
    last_interaction = new Date();
  });
  window.addEventListener("keydown", (e) => {
    last_interaction = new Date();
  });
  const reloadHandler = setInterval(function () {
    const now = new Date();
    if (now.valueOf() - last_interaction.valueOf() > 180000) {
      clearInterval(reloadHandler);
      if (
        window.checkAllEligibilityRunning !== true &&
        window.setupPreferredPharmaciesRunning !== true
      ) {
        window.location.reload();
      }
    }
  }, 1000);
};

function update_video_button() {
  console.log("It got here");
  var cortico_button = document.getElementById("cortico-video-appt-btn");
  var resources_field = document.querySelector('[name="resources"]');
  /* TODO: when other appoitment types supported. 
  cortico_button.innerText =
    resources_field.value === "virtual" ? "Join Video Call" : "Join Appointment";
  */
}

/*
function open_video_appointment_page(e) {
  e.preventDefault(); // don't submit the form.

  if (!localStorage["clinicname"]) {
    var clinicname = prompt("what is your Cortico website URL?");
    if (clinicname.indexOf(".cortico.ca") > -1) {
      clinicname = clinicname.substr(0, clinicname.indexOf(".cortico.ca"));
      clinicname = clinicname.replace(/https?:\/\//, "");
    }
    localStorage["clinicname"] = clinicname;
  }
  var appt_no = getQueryStringValue("appointment_no");
  if (!appt_no) {
    return alert(
      "Please save your appointment first, before starting a video call."
    );
  }
  window.open(getCorticoUrl() + "/appointment/" + appt_no);
}
*/

/*
  // telehealth button
  var last_button = document.querySelector("#printReceiptButton");
  var last_button_parent = last_button ? last_button.parentNode : null;

  if (last_button_parent) {
    last_button_parent.parentNode.appendChild(
      create(
        `<button class='cortico-btn' type='button' id='cortico-video-appt-btn'>
          Video Call &phone;
        </button>`
      )
    );

    update_video_button();
  }
}
*/

export async function setupEFormPage() {
  await loadExtensionStorageValue("jwt_access_token").then(async function (
    access_token
  ) {
    let html = document.cloneNode(true);
    await convertImagesToDataURLs(html);
    stripScripts(html);
    html = html.documentElement.outerHTML;
  });
}

function delegate(element, event, descendentSelector, callback) {
  element.addEventListener(
    event,
    function (e) {
      var elem = e.target.closest(descendentSelector);
      // returns null if no matching parentNode is found
      if (elem) {
        callback(elem, e);
      }
    },
    false
  );
}

const init_styles = function () {
  var style = `
  @media print
  {    
      .no-print, .no-print *
      {
          display: none !important;
      }
  }  
  .cortico-btn {
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  margin: 0.5rem;
  background:#5b6ce2;
  border: 1px solid #d8ddff;
  border-radius:.5rem;
  color:#fff;
  cursor:pointer;
  display:inline-block;
  font-family:Montserrat,sans-serif;
  font-size:.8rem;
  font-weight:600;
  height:30px;
  line-height:1.2rem;
  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);
  outline:0;
  padding:0 1rem;
  text-align:center;
  text-decoration:none;
  transition:background .2s,border .2s,box-shadow .2s,color .2s;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  vertical-align:middle;
  white-space:nowrap;
  }
  .cortico-btn:focus {
  box-shadow:0 0 0 .1rem rgba(92,112,255,.2)
  }
  .cortico-btn:focus,
  .cortico-btn:hover {
  background:white;
  border-color:#5b6ce2;
  color: #5b6ce2;
  text-decoration:none
  }
  .cortico-btn.active,
  .cortico-btn:active {
  background:white;
  border-color:#5b6ce2;
  color: #5b6ce2;
  text-decoration:none
  }
  .cortico-btn-small {
    height: auto;
    padding: 2px;
  }
  .cortico-input {
  font-size: 16px;
  padding: 5px 5px;
  margin: 0px 10px;
  width: 35%;
  background-color: transparent;
  border: 1px solid rgb(75, 84, 246);
  }
  .cortico-input.disabled {
  background-color: #DDD;
  color: #999;
  }
  .cortico-btn.inline {
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  }
  .bottom {
  position: absolute;
  bottom: 1px;
  left: 10px;
  }
  .warning {
  background-color: #cc3300;
  }
  `;

  if (!(oscar.isKaiOscarHost() || oscar.containsKaiBar())) {
    style += `
  .infirmaryView:first-child {
  /*position:fixed;*/
  margin-left: 57px;
  padding: 1px 15px;

  }`;
  }
  addGlobalStyle(style);
};

if (!document.getElementById("cortico_anchor")) {
  // avoid duplicating the extension/script.
  init_cortico();
} else {
  console.warn("Cortico plug-in installed more than once. A");
}

// -- utilities
function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName("head")[0];
  if (!head) {
    return;
  }
  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}

function addCorticoLogo() {
  var menu =
    document.querySelector("#firstMenu #navList") ||
    document.querySelector("#firstMenu #navlist");
  var listitem = create(`
    <li style="background:white;border-radius:2px;padding:2px">
      <a target="_blank" href="https://cortico.health"></a>
    </li>
  `);

  const corticoLogo = CorticoIcon({
    attrs: {
      height: "15",
      style: "position:relative; top: 3px;",
    },
  });

  listitem.firstElementChild.appendChild(corticoLogo);

  menu.appendChild(listitem);
}

function styleSheetFactory(namespace) {
  if (!window[namespace]) {
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);
    window[namespace] = styleSheet;
    return styleSheet;
  }
  return window[namespace];
}

function showDiagnosticResults(html_string) {
  var container = document.createElement("div");

  if (CORTICO.diagnosticResults) {
    CORTICO.diagnosticResults.style.display = "block";
  } else {
    CORTICO.diagnosticResults = container;
    container.classList.add("cortico-diagnostic-viewer");
    container.innerHTML = html_string;

    var containerClose = create(
      `<button class='cortico-diagnostic-close' style='cursor: pointer;'>Close</button>`
    );

    containerClose.addEventListener("click", function () {
      container.style.display = "none";
    });
    container.appendChild(containerClose);
  }

  document.body.prepend(container);
}

async function addMenu(container) {
  var navigation =
    document.querySelector("#firstMenu #navList") ||
    document.querySelector("#firstMenu #navlist");
  var menu = document.createElement("li");
  menu.textContent = "Cortico";
  menu.style.color = "rgb(75, 84, 246)";
  menu.style.cursor = "pointer";
  menu.style.backgroundColor = "white";
  menu.style.borderRadius = "2px";
  menu.style.padding = "2px";
  menu.style.marginLeft = "2px";

  menu.addEventListener("click", function () {
    pubsub.publish("corticoWidget/toggle");
  });

  //document.body.prepend(sidebar);
  navigation.appendChild(menu);
}

function addNewUI() {
  var styleSheet = styleSheetFactory("newUIStyleSheet");
  var styles = "#providerSchedule td { padding: 2px; }";
  styles +=
    ".adhour { text-shadow: 1px 1px 1px rgba(0,0,0,1); font-size: 14px; }";
  styles += ".appt { box-shadow: 1px 3px 3px rgba(0,0,0,0.1); }";
  styles += "#providerSchedule { border: 0; }";
  styles +=
    "#providerSchedule td { border: 0; border-bottom: 1px solid rgba(0,0,0,0.2); font-size: 14px; }";
  styles +=
    "#providerSchedule td.noGrid { border: 0; border-bottom: 1px solid rgba(0,0,0,0.2); font-size: 14px; }";
  styles +=
    "#firstTable { background-color: #efeef3; } #firstMenu a { font-weight: 400; color: #171458; font-size: 14px; }";
  styles += "#ivoryBar td { background-color: white; padding: 5px; }";
  styles += ".infirmaryView { background-color: #efeef3; }";
  styles +=
    "#ivoryBar input, #ivoryBar select, .infirmaryView input, .infirmaryView .ds-btn { background-color: #171458 !important; color: white !important; font-weight: bold !important; padding: 2px;  }";
  styles += "#ivoryBar input:placeholder { font-weight: bold; color: white; }";
  styleSheet.innerText = styles;
}

function removeNewUI() {
  var styleSheet = styleSheetFactory("newUIStyleSheet");
  var styles = "";
  styleSheet.innerText = styles;
}

/* Drag and Drop Feature Begin */

function appointmentRowDragStart(ev) {
  if (ev.target.matches("td.appt")) {
    window.dragSelectedTarget = ev.target;
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
  } else {
    ev.preventDefault();
  }
}

function isValidDragItem() {
  return !!window.dragSelectedTarget;
}

function isSameDay(startDate, endDate) {
  return startDate.isSame(endDate, "day");
}

function dragAndDrop() {
  if (document.readyState !== "loading") {
    var appointmentRows = document.querySelectorAll("td.appt");
    appointmentRows.forEach(function (node) {
      node.setAttribute("draggable", true);
      node.addEventListener("dragstart", appointmentRowDragStart);
    });
  } else {
    window.addEventListener("DOMContentLoaded", () => {
      var appointmentRows = document.querySelectorAll("td.appt");
      appointmentRows.forEach(function (node) {
        node.setAttribute("draggable", true);
        node.addEventListener("dragstart", appointmentRowDragStart);
      });
    });
  }

  function dragover_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }

    ev.preventDefault();
    ev.dataTransfer.dropEffect = "link";
    var target = ev.target;

    var isAppt = target.classList.contains("appt");
    var isEmpty = target.classList.contains("noGrid");
    if (isAppt || isEmpty) {
      target.style.backgroundColor = "yellow";
      window.dragTarget = target;
    }
  }

  function dragleave_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }
    if (!dragTarget) {
      return;
    }
    //Comment because unstable, this will undo highlight multiple rows in the table
    //target.setAttribute('rowspan', 1)
    handleColors(dragTarget);
  }

  function handleColors(target) {
    //Appropriately reset colors on hover and dragend, dragover
    var isAppt = target.classList.contains("appt");
    var isEmpty = target.classList.contains("noGrid");
    if (isAppt) {
      target.style.backgroundColor = "#FDFEC7";
    } else if (isEmpty) {
      target.style.backgroundColor = "#486ebd";
    }
  }

  async function drop_handler(ev) {
    if (!isValidDragItem()) {
      return;
    }

    handleColors(ev.target);

    // Sibling table cell has the start time
    const newStartTime =
      ev.target.parentElement.firstElementChild.firstElementChild.textContent.trim();

    // Get the appointment edit link, we're going to fetch this page in memory later
    const apptLink = getAppointmentLink(dragSelectedTarget);
    if (!apptLink) {
      alert("No Valid Appointment Link Found");
      return false;
    }

    const apptLinkText = apptLink.attributes.onclick.textContent;

    //Get the URL and Take out the "../" in front
    const apptUrl = extractApptUrl(apptLinkText);

    //Get our base url with the provider
    const origin = getOrigin();
    const namespace = getNamespace();

    let result = await appointmentEditRequest(origin, namespace, apptUrl);
    let text = await result.text();

    //Make an element in memory, and we're gonna place the contents of the fetched page here, so we can grab the formdata
    const temp = document.createElement("div");
    temp.style.display = "none";
    temp.innerHTML = text;

    const formData = new FormData(temp.querySelector("FORM"));
    const originalStartTime = formData.get("start_time");
    const apptDate = formData.get("appointment_date");
    const duration = formData.get("duration") - 1;

    const newEndTime = dayjs(apptDate + "T" + newStartTime)
      .add(duration, "minute")
      .format("HH:mm");

    // We check to see if the drag and drop overlaps to the next day, if it does we prevent.
    const _newStartTime = dayjs(apptDate + "T" + newStartTime);
    const _newEndTime = dayjs(apptDate + "T" + newStartTime).add(
      duration,
      "minute"
    );

    if (!isSameDay(_newStartTime, _newEndTime)) {
      alert("Cannot overlap to the next day");
      return;
    }

    const apptDoctor = formData.get("provider_no");
    const targetDoctor = getCurrentProviderNoFromTd(ev.target);
    const isSameDoctor = apptDoctor === targetDoctor;
    const doctor = targetDoctor;

    formData.set("start_time", newStartTime);
    formData.set("end_time", newEndTime);

    if (isSameDoctor) {
      result = await updateAppointment(origin, namespace, formData);
      text = await result.text();

      const parent = ev.target.parentElement;
      parent.insertBefore(dragSelectedTarget, ev.target);

      updateAppointmentAnchorLinks(
        dragSelectedTarget,
        { start_time: originalStartTime, provider_no: apptDoctor },
        { start_time: newStartTime, provider_no: targetDoctor }
      );
    } else {
      alert("Moving appointments to other providers is currently disabled.");
      // result = await cutAppointment(origin, namespace, formData);
      // formData.set("provider_no", targetDoctor);

      // handleAddData(formData);
      // const data = new URLSearchParams(formData);
      // result = await addAppointment(origin, namespace, data);

      // window.location.reload();
    }
  }

  // Maybe better to use event delegation in the future
  var emptyRows = document.querySelectorAll("td.noGrid");
  emptyRows.forEach(function (node) {
    node.addEventListener("dragover", dragover_handler);
    node.addEventListener("dragleave", dragleave_handler);
    node.addEventListener("drop", drop_handler);
  });

  var appointmentRows = document.querySelectorAll("td.appt");
  appointmentRows.forEach(function (node) {
    node.addEventListener("dragover", dragover_handler);
    node.addEventListener("dragleave", dragleave_handler);
    node.addEventListener("drop", drop_handler);
  });
}

/* Drag and Drop Feature end */

function clearFailureCache() {
  return localStorage.removeItem("failureCache");
}

function getFailureCache() {
  return localStorage.getItem("failureCache");
}

function filterAppointments(appointments) {
  const _cache = localStorage.getItem("checkCache");
  const _today = dayjs().format("YYYY-MM-DD");
  if (!_cache) {
    return appointments;
  }
  const cache = JSON.parse(_cache);
  return appointments.filter((appt) => {
    const demographic_no = appt.demographic_no;
    // Check appointment if it doesn't exist in cache
    if (!cache.hasOwnProperty(demographic_no)) {
      return true;
    }
    const cachedDate = cache[demographic_no].date;
    // Check appointment if it exists in cache, but expired
    if (isDateExpired(dayjs(cachedDate), _today, 5)) {
      return true;
    }
    return false;
  });
}

function isDateExpired(past, now, days) {
  const diff = past.diff(now, "day");
  return Math.abs(diff) > days;
}

function isEligibleSuccess(text) {
  return (
    (!text.includes("failure-phn") &&
      !text.includes("results unavailable") &&
      !text.includes("failure") &&
      text.includes("success")) ||
    text.includes("success-phn") ||
    text.includes("health card passed validation") ||
    text.includes("patient eligible")
  );
}

export async function checkAllEligibility() {
  let state = { ...eligCheckState };
  let failures = [];
  //localStorage.removeItem("checkCache")
  if (window.checkAllEligibilityRunning === true) {
    return alert("Check Already Running");
  }

  clearFailureCache();
  var nodes = document.querySelectorAll("td.appt");
  var appointmentInfo = getAppointmentInfo(nodes);
  appointmentInfo = filterAppointments(appointmentInfo);

  var length = appointmentInfo.length;
  if (appointmentInfo.length === 0 || false) {
    state.empty = true;
    state.complete = true;
    pubsub.publish("automations/eligibility", Object.assign({}, state));
    return;
  }

  let providerNo = getProviderNoFromTd(nodes[0]);

  if (oscar.isKaiOscarHost()) {
    providerNo = getAccountProviderNo();
  }
  window.checkAllEligibilityRunning = true;
  state.running = true;
  pubsub.publish("automations/eligibility", Object.assign({}, state));

  try {
    for (let i = 0; i < length; i++) {
      //Delay when it starts
      if (i > 0) {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
      }

      const demographic_no = appointmentInfo[i].demographic_no;
      let result = null;
      let patientInfo = null;
      let healthNumber = null;
      let province = null;
      // empty appointment node, do not check
      if (!demographic_no || demographic_no == 0) continue;

      state.current = i + 1;
      state.total = length;
      state.demographicNo = demographic_no;
      pubsub.publish("automations/eligibility", Object.assign({}, state));

      // In cases where the first appointment in the schedule is an empty
      // appointment, get the providerNo from the node itself
      if (!providerNo) {
        providerNo = getProviderNoFromTd(nodes[i]);
      }

      try {
        patientInfo = await getPatientInfo(demographic_no);
        console.info("Patient Info:", patientInfo);
      } catch (e) {
        console.error(e);
        failures = produce(failures, (draft) => {
          draft.push({
            firstName: null,
            lastName: null,
            demographicNo: demographic_no,
            reason: "Could not get Patient's infomration",
          });
        });
        pubsub.publish("automations/eligibility/failures", failures);
        continue;
      }

      healthNumber = patientInfo["Health Ins"]?.replace(/\s+/g, " ").trim();

      if (!healthNumber) {
        failures = produce(failures, (draft) => {
          draft.push({
            firstName: patientInfo["First Name"],
            lastName: patientInfo["Last Name"],
            demographicNo: demographic_no,
            reason: "Could not get Patient's Health Number",
          });
        });
        pubsub.publish("automations/eligibility/failures", failures);
        continue;
      }

      province = patientInfo["Province"].replace(/\s+/g, " ").trim();

      if (!province) {
        failures = produce(failures, (draft) => {
          draft.push({
            firstName: null,
            lastName: null,
            demographicNo: demographic_no,
            reason: "Could not get Patient's Province",
          });
        });
        pubsub.publish("automations/eligibility/failures", failures);
        continue;
      }

      try {
        result = await checkEligiblity(
          demographic_no,
          getOrigin(),
          getNamespace(),
          providerNo,
          healthNumber,
          province
        );
      } catch (e) {
        console.error(e);
        failures = produce(failures, (draft) => {
          draft.push({
            firstName: null,
            lastName: null,
            demographicNo: demographic_no,
            reason: "Network Error, please check manually",
          });
        });
        pubsub.publish("automations/eligibility/failures", failures);
        continue;
      }

      let text = null;
      let lowerCaseText = null;
      let requestSuccess = false;

      if (result && result.status === 200) {
        let text = await result.text();
        lowerCaseText = text.toLowerCase();

        if (oscar.isOscarGoHost()) {
          const jsonRes = JSON.parse(lowerCaseText);

          if (jsonRes && jsonRes.ret) {
            requestSuccess = true;
          }
        }
      } else {
        failures = produce(failures, (draft) => {
          draft.push({
            firstName: null,
            lastName: null,
            demographicNo: demographic_no,
            reason: "Failed to set eligiblity",
          });
        });
        pubsub.publish("automations/eligibility/failures", failures);
        continue;
      }

      if (lowerCaseText.includes("error in teleplan connection")) {
        state.teleplan = true;
        pubsub.publish("automations/eligibility", Object.assign({}, state));
        break;
      }

      let verified = false;
      if (lowerCaseText.includes("this is not an insured benefit")) {
        verified = "uninsured";
      } else if (isEligibleSuccess(lowerCaseText) || requestSuccess) {
        plusSignAppointments(demographic_no);
        verified = true;
      } else {
        failures = produce(failures, (draft) => {
          draft.push({
            firstName: null,
            lastName: null,
            demographicNo: demographic_no,
            reason: "Check manually to determine reason",
          });
        });
        pubsub.publish("automations/eligibility/failures", failures);
        continue;
      }
      addToCache(demographic_no, verified);
    }
  } catch (err) {
    console.error(err);
    state.error = true;
    state._error = true;
    pubsub.publish("automations/eligibility", Object.assign({}, state));
  } finally {
    window.checkAllEligibilityRunning = false;
    state.complete = true;
    state.running = false;
    pubsub.publish("automations/eligibility", Object.assign({}, state));
  }
}

function getPharmacyResults(searchTerm) {
  const uriSafeSearch = searchTerm.toLowerCase().replace(" ", "+");
  const newLocal =
    "oscarRx/managePharmacy.do?method=search&search&term=" + uriSafeSearch;
  var url = getOrigin() + "/" + getNamespace() + "/" + newLocal;

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Content-Type": "application/json",
    },
  });
}

function getCurrentPharmacy(demographicNo) {
  const newLocal =
    "oscarRx/managePharmacy.do?method=getPharmacyFromDemographic&demographicNo=" +
    demographicNo;
  var url = getOrigin() + "/" + getNamespace() + "/" + newLocal;

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Content-Type": "application/json",
    },
  });
}

function setPreferredPharmacy(pharmacyObj, demographicNo) {
  const url =
    getOrigin() +
    "/" +
    getNamespace() +
    "/" +
    "oscarRx/managePharmacy.do?method=setPreferred";

  pharmacyObj.name = pharmacyObj.name.replace(" ", "+");

  var formData = new FormData();
  // Used by LDRS, and possibly other WELL oscars
  formData.append("pharmId", pharmacyObj.id);
  formData.append("pharmacyId", pharmacyObj.id);
  formData.append("demographicNo", demographicNo);
  formData.append("pharmacyName", pharmacyObj.name);
  formData.append("pharmacyAddress", pharmacyObj.address);
  formData.append("pharmacyCity", pharmacyObj.city);
  formData.append("pharmacyProvince", pharmacyObj.province);
  formData.append("pharmacyPostalCode", pharmacyObj.postalCode);
  formData.append("pharmacyPhone1", pharmacyObj.phone1);
  formData.append("pharmacyPhone2", pharmacyObj.phone2);
  formData.append("pharmacyFax", pharmacyObj.fax);
  formData.append("pharmacyEmail", pharmacyObj.email);
  formData.append(
    "pharmacyServiceLocationId",
    pharmacyObj.serviceLocationIdentifier
  );
  formData.append("pharmacyNotes", pharmacyObj.notes);
  formData.append("preferredOrder", "1");

  const data = new URLSearchParams(formData);

  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

function checkEligiblity(
  demographicNo,
  origin,
  namespace,
  providerNo,
  healthNumber,
  province
) {
  var url =
    `${origin}/${namespace}/billing/CA/BC/ManageTeleplan.do?` +
    `demographic=${demographicNo}&method=checkElig`;

  if (origin.includes("skymedical")) {
    url = `/demographic/demographiccontrol.jsp?demographic_no=${demographicNo}&displaymode=edit&dboperation=search_detail`;
  }

  // Taken from oscar, they bust cache with this
  const ran_number = Math.round(Math.random() * 1000000);
  url += "&rand=" + ran_number;

  if (oscar.isOscarGoHost() && province === "ON") {
    const [hin, ver] = healthNumber.split(" ");
    url =
      `${origin}/${namespace}/hcv/validate.do?` +
      `method=validateHin&hin=${hin}&ver=${ver}&sc=`;
  }
  if (oscar.isKaiOscarHost() && province === "ON") {
    url = `${origin}/CardSwipe/?hc=${healthNumber}`;
  }

  if (providerNo || providerNo === 0) {
    url += "&provider=" + providerNo;
  }

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
}

function appointmentEditRequest(origin, namespace, apptUrl) {
  return fetch(origin + "/" + namespace + apptUrl);
}

function handleAddData(data) {
  if (!oscar.isJuno()) {
    return data;
  }

  data.set("appointmentNo", data.get("appointment_no"));
  data.delete("appointment_no");
  data.set("dboperation", "search_titlename");
  data.set("sendBookingNotification", "false");
  data.set("outofdomain", "true");
  data.set("operationType", "CUT");
  data.set("fromAppt", "1");
}

function addAppointment(origin, namespace, data) {
  data.set("displaymode", "Add Appointment");
  const _data = new URLSearchParams(data);
  return appointmentRequest(origin, namespace, _data);
}
function cutAppointment(origin, namespace, data) {
  data.set("displaymode", "Cut");
  const _data = new URLSearchParams(data);
  return appointmentRequest(origin, namespace, _data);
}

function updateAppointment(origin, namespace, data) {
  data.set("displaymode", "Update Appt");
  const _data = new URLSearchParams(data);
  return appointmentRequest(origin, namespace, _data);
}

function appointmentRequest(origin, namespace, data) {
  return fetch(
    origin + "/" + namespace + "/appointment/appointmentcontrol.jsp",
    {
      method: "POST",
      body: data,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
}

// This TD Element needs to be an appointment or empty slot.
function getProviderNoFromTd(tdElement) {
  if (!tdElement) {
    return null;
  }
  const encounterButton = tdElement.querySelector(".encounterBtn");

  if (!encounterButton) {
    return null;
  }

  const value = encounterButton.attributes.onclick.textContent;
  if (!value) {
    return null;
  }

  const split = value.split(",");
  const url = split[2];
  if (!url) {
    return null;
  }
  const queryString = url.split("?")[1];

  const searchParams = new URLSearchParams(queryString);
  const providerNo = searchParams.get("providerNo");
  return providerNo;
}

function getCurrentProviderNoFromTd(tdElement) {
  //oscar osp
  var dsButton = tdElement
    .closest("table")
    .closest("tbody")
    .querySelector(".ds-btn");
  if (dsButton) {
    return dsButton.dataset.provider_no;
  }

  //juno
  var dsInput = tdElement
    .closest("table")
    .closest("tbody")
    .querySelector('input[name="searchview"]');
  if (dsInput) {
    return dsInput.attributes.onclick.nodeValue.match(/'([^']+)'/)[1];
  }

  return null;
}

function updateAppointmentAnchorLinks(apptTdElement, oldOptions, newOptions) {
  apptTdElement.querySelectorAll("a").forEach((node) => {
    var linkAttribute = node.attributes.onclick || node.attributes.href;
    var linkValue = linkAttribute.nodeValue;

    var { start_time: oldStartTime, provider_no: oldProviderNo } = oldOptions;
    var { start_time: newStartTime, provider_no: newProviderNo } = newOptions;

    linkValue = linkValue.replace(
      "start_time=" + oldStartTime,
      "start_time=" + newStartTime
    );
    linkValue = linkValue.replace(
      "startTime=" + oldStartTime,
      "startTime=" + newStartTime
    );

    /*
    linkValue = linkValue.replace("providerNo=" + oldProviderNo, "providerNo=" + newProviderNo);
    linkValue = linkValue.replace("apptProvider_no=" + oldProviderNo, "apptProvider_no=" + newProviderNo);
    linkValue = linkValue.replace("provider_no=" + oldProviderNo, "provider_no=" + newProviderNo);
    */

    linkAttribute.nodeValue = linkValue;
  });
}

function addVerifiedMark(mark, node) {
  if (node && mark) {
    node.innerHTML = mark + node.innerHTML;
    return node;
  }
  return null;
}

function plusSignAppointments(demographic_no) {
  const appointments = getAppointments(demographic_no);
  appointments.map((appt) => {
    var apptLink = getAppointmentLink(appt);
    addVerifiedMark(" + &nbsp;", apptLink);
  });
}

function plusSignFromCache() {
  const _cache = localStorage.getItem("checkCache");
  if (!_cache) return;
  const cache = JSON.parse(_cache);

  const _today = dayjs().format("YYYY-MM-DD");

  for (let key in cache) {
    if (cache[key].verified === true) {
      const cachedDate = cache[key].date;
      // Check appointment if it exists in cache, but expired
      if (isDateExpired(dayjs(cachedDate), _today, 5)) {
        continue;
      }
      plusSignAppointments(key);
    }
  }
}

/**
 * Parse strings of the form ['key1:value1', 'key2:value2'] -> {key1: value1, key2: value2}
 * @param {} stringArray
 * @returns
 */
function stringArrayToObj(stringArray) {
  var obj = {};
  for (var i = 0; i < stringArray.length; i++) {
    var split = stringArray[i].split(":");

    if (!split[0] || !split[1]) {
      continue;
    }
    obj[split[0].trim()] = split[1].trim();
  }

  return obj;
}

function getPharmacyCodeFromReasonOrNotes(textContent) {
  var titleContents = textContent.split("\n");
  var apptFields = stringArrayToObj(titleContents);

  // assuming that the notes is always the last field in the textContent
  var textContentList = textContent.split("notes: ");
  var notesValue = textContentList[textContentList.length - 1];

  var notesValuesList = notesValue.match(/\[(.*?)\]/g);
  var pharmacyCode =
    notesValuesList && notesValuesList.length > 0 ? notesValuesList[0] : null;

  // Check RFV field if not existing in notes
  if (!pharmacyCode) {
    console.log("Checking RFV field");
    var reason = apptFields["reason"];
    var reasonValuesList = reason.match(/\[(.*?)\]/g);

    // we are assuming here that the pharmacy code is the 2nd
    pharmacyCode =
      reasonValuesList && reasonValuesList.length > 0
        ? reasonValuesList[1]
        : null;
  }

  if (pharmacyCode) {
    pharmacyCode = pharmacyCode.replace(/[\[\]']+/g, "");
  }
  return pharmacyCode;
}

function setupPrescriptionButtons() {
  const providerSchedule = document.querySelector("#providerSchedule");

  if (providerSchedule) {
    providerSchedule.addEventListener(
      "click",
      function (e) {
        if (e.target.matches('a[title="Prescriptions"]')) {
          var element = e.target;
          while (element.className != "apptLink") {
            element = element.previousElementSibling;
          }

          var apptTitle = element.attributes.title.textContent;
          var pharmacyCode = getPharmacyCodeFromReasonOrNotes(apptTitle);

          localStorage.setItem("currentPharmacyCode", pharmacyCode);
        }
      },
      false
    );
  }
}

function sendPatientPrescriptionNotification() {
  const clinicName = localStorage["clinicname"];
  const url = `${getCorticoUrl()}/notify-prescription/`;

  var formData = new FormData();
  formData.append("demographic_no", getDemographicNo());
  formData.append("pharmacy", localStorage.getItem("preferredPharmacy"));

  const data = new URLSearchParams(formData);

  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

function setupFaxButton() {
  const prescriptionFrame = document.getElementById("AutoNumber1");
  prescriptionFrame.addEventListener(
    "click",
    async function (e) {
      if (e.target.matches("#faxBUtton, #faxAndPasteButton")) {
        const result = await sendPatientPrescriptionNotification();
        const text = await result.text();
        const json = JSON.parse(text);
      }
    },
    false
  );
}

function getPharmacyDetails(pharmacyCode) {
  const clinicName = localStorage["clinicname"];
  const url = `${getCorticoUrl()}/api/pharmacies/?code=${pharmacyCode}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function formatNumber(number) {
  if (!number) return "";
  return `1${number.match(/\d+/g).join("")}`;
}

async function setupPreferredPharmacy(code, demographic_no) {
  console.log("Setup Preferred Pharmacy Running");
  let corticoPharmacy = null;
  let corticoPharmacyText = null;
  const state = {
    error: false,
    errorMessage: null,
    infoMessage: null,
  };

  var pharmacyCode = localStorage.getItem("currentPharmacyCode");

  if (code) {
    pharmacyCode = code;
  }

  try {
    corticoPharmacy = await getPharmacyDetails(pharmacyCode);
    corticoPharmacyText = await corticoPharmacy.text();
  } catch (e) {
    console.error(e);
    state.error = true;
    state.errorMessage = "Pharmacy not found";
    return state;
  }

  corticoPharmacyText = JSON.parse(corticoPharmacyText);
  if (corticoPharmacyText.length <= 0) {
    //Show this message if the pharmacy code is not found
    state.error = true;
    state.errorMessage = "Pharmacy not found";
    return state;
  }
  let corticoFaxNumber = corticoPharmacyText[0]["fax_number"] || null;

  if (!corticoFaxNumber) {
    state.error = true;
    state.errorMessage = "Cortico Fax Number is blank";
    return;
  }

  // cleanup fax number to format starting with 1
  // This might be an issue if the oscar pharmacies don't match this format
  corticoFaxNumber = formatNumber(corticoFaxNumber);

  let corticoSearchTerm = corticoPharmacyText[0]["name"] || null;

  if (!corticoSearchTerm) {
    state.error = true;
    state.errorMessage = "Cortico Pharmacy Name is blank";
    return;
  }

  let fullPharmacyName = corticoSearchTerm;
  // only use the first word on the pharmacy name to search for list
  // then remove letter or number
  corticoSearchTerm = corticoSearchTerm.split(" ")[0];
  corticoSearchTerm = corticoSearchTerm.replace(/[^\w\s]/gi, "");

  let demographicNo = demographic_no;
  if (!demographic_no) {
    demographicNo = getDemographicNo();
  }

  let currPharmacyResults = null;
  let currPharmacyText = null;
  try {
    currPharmacyResults = await getCurrentPharmacy(demographicNo);
    currPharmacyText = JSON.parse(await currPharmacyResults.text());
  } catch (e) {
    console.error(e);
    state.error = true;
    state.errorMessage = "Error getting patient's current pharmacy from oscar";
    return state;
  }

  let preferredPharmacy;
  console.log("Current Pharmacy:", currPharmacyText);

  //Check if the currenct pharmcy is set for this patient (in oscar)
  if (currPharmacyText) {
    preferredPharmacy = currPharmacyText[0];
    //localStorage.setItem("preferredPharmacy", preferredPharmacy);
  }

  const currentlyUsingPharmacy =
    preferredPharmacy &&
    preferredPharmacy.name
      .toLowerCase()
      .includes(corticoSearchTerm.toLowerCase()) &&
    corticoFaxNumber.includes(preferredPharmacy.fax);

  console.log(
    `currently using pharmacy ${corticoSearchTerm.toLowerCase()}, ${currentlyUsingPharmacy}`
  );

  if (currentlyUsingPharmacy) {
    state.infoMessage = "Pharmacy already set";
    return state;
  }

  let text = null;
  try {
    const results = await getPharmacyResults(corticoSearchTerm);
    text = await results.text();
  } catch (e) {
    console.error(e);
    state.error = true;
    state.errorMessage = "Failed to search oscar pharmacies";
    return state;
  }

  const pharmacies = JSON.parse(text);
  const pharmacyFound = pharmacies.length > 0;

  const isRxPage =
    window.location.href.indexOf("oscarRx/choosePatient.do") > -1;

  if (pharmacyFound) {
    const pharmacy = pharmacies.find((item) => {
      let item_name = item.name.toLowerCase();
      let cleaned_item_name = item_name.replace(/[^\w\s]/gi, "");
      return (
        (item_name.includes(corticoSearchTerm.toLowerCase()) ||
          cleaned_item_name.includes(corticoSearchTerm.toLowerCase())) &&
        item.fax.length > 8 &&
        // either if the fax is the same or the formatted fax has the values
        (formatNumber(item.fax) === corticoFaxNumber ||
          corticoFaxNumber.includes(item.fax))
      );
    });

    if (pharmacy) {
      try {
        const setPharmacyResults = await setPreferredPharmacy(
          pharmacy,
          demographicNo
        );
        const setPharmacyText = await setPharmacyResults.text();
        state.infoMessage = "Successfully updated pharmacy";
        return state;
      } catch (e) {
        console.error(e);
        state.error = true;
        state.errorMessage = "Failed to save preferred pharmacy";
        return state;
      }

      if (isRxPage) {
        alert("Updating preferred pharmacy, press Ok to reload");
      } else {
        console.log("Updating preferred pharmacy");
      }
    } else {
      state.error = true;
      state.errorMessage = `"${fullPharmacyName}" Fax number did not match: ${corticoFaxNumber}`;
      return state;
    }
  } else {
    //isRxPage ? alert(msg) : console.warn(msg);
    state.error = true;
    state.errorMessage = `"${fullPharmacyName}" does not exist in your Oscar pharmacy database!`;
    return state;
  }
}

function displayPharmaciesFailure(demograhicNo, msg) {
  const sidebar_panel = document.querySelector(".cortico-sidebar");
  sidebar_panel.appendChild(
    htmlToElement("<div>demo#" + demograhicNo + " : " + msg)
  );
}

function storePharmaciesCache(demographicNo, hasPharmacy) {
  console.log("storing demographic in cache", demographicNo);
  var _cache = localStorage.getItem("pharmaciesCache");
  var cache = JSON.parse(_cache);
  var demographics = null;

  var date = dayjs().format("YYYY-MM-DD");
  // this should be done when we access. not write.
  if (cache && cache["date"] === date) {
    if (cache["demographics"]) {
      demographics = cache["demographics"];
    }
  } // erase the cache when new day (next line)

  // make sure demographics is array before pushing
  if (!Array.isArray(demographics)) {
    demographics = [];
  }

  demographics.push({
    demographicNo: demographicNo,
    hasPharmacy: hasPharmacy,
  });

  cache = {
    date: date,
    demographics: demographics,
  };
  localStorage.setItem("pharmaciesCache", JSON.stringify(cache));
}

function storePharmaciesFailureCache(demographicNo, message) {
  var _cache = localStorage.getItem("pharmaciesCacheFailure");
  var cache = JSON.parse(_cache);

  var date = dayjs().format("YYYY-MM-DD");
  var failures = new Array();

  if (cache && cache["date"] === date) {
    localStorage["pharmaciesCacheFailure"] = null;
    cache = null;
  }
  if (cache && cache["failures"]) {
    failures = cache["failures"];
  }

  var data = {
    demographicNo: demographicNo,
    message: message,
  };
  failures.push(data);

  cache = {
    date: date,
    failures: failures,
  };
  localStorage.setItem("pharmaciesCacheFailure", JSON.stringify(cache));
}

async function getDiagnosticFromCortico(appt_no, notes, token) {
  const clinicName = localStorage["clinicname"];
  const url = `${getCorticoUrl()}/api/encrypted/diagnostic-results/?appointment_id=${appt_no}&notes=${notes}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => {
      console.log("IT GOT HEREEEE");
      if ((res + "").includes("Unauthorized") || res.status == 401) {
        pubsub.publish("signin");

        return;
      }

      return res;
    })
    .catch((err) => {
      if ((err + "").includes("Unauthorized")) {
        pubsub.publish("signin");
      } else {
        alert(
          "Failed to fetch data. There might be a problem with Cortico or the patient responses do not exist"
        );
      }
    });
}

export async function setupPreferredPharmacies() {
  const setupPharmacyState = { ...setupPharmacyState };
  window.setupPreferredPharmaciesRunning = true;
  setupPharmacyState.running = true;
  widgetStore.dispatch({
    type: "setupPharmacy/setAll",
    payload: setupPharmacyState,
  });

  clearFailureCache();
  const appointments = getAppointments();
  if (appointments.length === 0) {
    setupPharmacyState.empty = true;
    widgetStore.dispatch({
      type: "setupPharmacy/setAll",
      payload: setupPharmacyState,
    });
    return;
  }

  var error = false;
  for (let i = 0; i < appointments.length; i++) {
    setupPharmacyState.total = appointments.length;
    setupPharmacyState.current = i + 1;
    widgetStore.dispatch({
      type: "setupPharmacy/setAll",
      payload: setupPharmacyState,
    });

    const element = appointments[i].querySelector("a.apptLink");
    if (!element || !element.attributes) {
      widgetStore.dispatch({
        type: "setupPharmacyFailures/add",
        payload: {
          reason: "Could not get appointment link",
        },
      });
      continue;
    }
    let demographicNo = null;
    try {
      const apptUrl = extractApptUrl(element.attributes.onclick.textContent);
      demographicNo = getDemographicNo(apptUrl);
      setupPharmacyState.demographicNo = demographicNo;
      widgetStore.dispatch({
        type: "setupPharmacy/setAll",
        payload: setupPharmacyState,
      });

      if (!demographicNo) {
        widgetStore.dispatch({
          type: "setupPharmacyFailures/add",
          payload: {
            reason: "Could not get demographic Number",
          },
        });
        continue;
      }

      const cancelled = appointments[i].querySelector(
        "a.apptStatus[title='Cancelled ']"
      );
      if (cancelled) {
        widgetStore.dispatch({
          type: "setupPharmacyFailures/add",
          payload: {
            demographicNo,
            reason: "Appointment cancelled",
          },
        });
        continue;
      }

      const _pharmaciesCache = localStorage.getItem("pharmaciesCache");
      const pharmaciesCache = JSON.parse(_pharmaciesCache);
      var demographics = new Array();

      console.log("Checking if demographic is cached...");
      if (pharmaciesCache && pharmaciesCache["demographics"]) {
        let cachedDemographics = pharmaciesCache["demographics"];

        demographics = Array.isArray(cachedDemographics)
          ? cachedDemographics
          : JSON.parse(cachedDemographics);
        demographics = demographics.map((x) => x.demographicNo);
      }

      if (
        demographics &&
        Array.isArray(demographics) &&
        demographics.includes(demographicNo) &&
        pharmaciesCache.date == dayjs().format("YYYY-MM-DD")
      ) {
        console.log(`Demographic ${demographicNo} is cached, skipping`);
        continue;
      }

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      console.log("Checking if appt has pharmacy codes...");
      const apptTitle = element.attributes.title.textContent;
      const pharmacyCode = getPharmacyCodeFromReasonOrNotes(apptTitle);
      if (!pharmacyCode) {
        storePharmaciesCache(demographicNo, false);
        widgetStore.dispatch({
          type: "setupPharmacyFailures/add",
          payload: {
            demographicNo,
            reason: "Pharmacy code not found from appt",
          },
        });
        continue;
      }
      storePharmaciesCache(demographicNo, true);

      console.log("phar", pharmacyCode);
      const demographicState = await setupPreferredPharmacy(
        pharmacyCode,
        demographicNo
      );

      if (demographicState.error === true) {
        widgetStore.dispatch({
          type: "setupPharmacyFailures/add",
          payload: {
            demographicNo,
            reason: demographicState.errorMessage,
          },
        });
      }
      console.log("demographicState", demographicState);
    } catch (err) {
      console.error(err);
      storePharmaciesFailureCache(demographicNo, err.message);
      displayPharmaciesFailure(demographicNo, err.message);
      widgetStore.dispatch({
        type: "setupPharmacyFailures/add",
        payload: {
          demographicNo,
          reason: err.message,
        },
      });
    }
  }
  window.setupPreferredPharmaciesRunning = false;
  setupPharmacyState.running = false;
  setupPharmacyState.complete = true;
  widgetStore.dispatch({
    type: "setupPharmacy/setAll",
    payload: setupPharmacyState,
  });
}

async function init_diagnostic_viewer_button() {
  const notesField = document.querySelector("textarea[name='notes']");
  var notesValue = notesField.textContent;

  var last_button = document.querySelector("#printReceiptButton");
  if (last_button) {
    last_button = last_button.parentNode;
  } else {
    return;
  }
  last_button.parentNode.appendChild(
    htmlToElement(
      "<a class='cortico-btn' id='diagnostic-viewer-btn'>Patient Responses</a>"
    )
  );

  const corticoDiagnosticViewBtn = document.getElementById(
    "diagnostic-viewer-btn"
  );
  function update_diagnostic_button_visibility() {
    notesValue = notesField.textContent;

    corticoDiagnosticViewBtn.style.display = notesValue.includes(
      "-- Cortico data below, do not change!"
    )
      ? "inline-block"
      : "none";
  }

  async function open_diagnostic_viewer(e) {
    console.log("Clicked");
    if (!checkCorticoUrl(e.originalEvent)) {
      pubsub.publish("signin");
      return;
    }
    const appt_no = getQueryStringValue("appointment_no");
    const access_token =
      (await loadExtensionStorageValue("jwt_access_token")) ||
      localStorage.getItem("jwt_access_token");

    if (access_token) {
      const diagnostic_response = await getDiagnosticFromCortico(
        appt_no,
        notesValue,
        access_token
      );
      if (diagnostic_response) {
        const diagnostic_text = String(await diagnostic_response.text());
        await showDiagnosticResults(diagnostic_text);
      }
    } else {
      pubsub.publish("signin");
    }
  }

  update_diagnostic_button_visibility();

  corticoDiagnosticViewBtn.addEventListener("click", open_diagnostic_viewer);
}

export async function getPatientInfo(demographicNo) {
  const result = await getDemographicPageResponse(demographicNo);
  if (!result) {
    return {};
  }
  const text = await result.text();

  var el = document.createElement("html");
  el.innerHTML = text;

  const info = {};
  el.querySelectorAll("span.label").forEach(function (label) {
    if (label.closest("#otherContacts2")) return; // do not match contacts.

    info[label.innerText.replace(/[^\w\s]+/g, "")?.trim()] =
      label.nextElementSibling
        ? label.nextElementSibling.innerText.trim()
        : null;
  });

  const emailInput = el.querySelector("input[name='email']");
  info.email = info.email || info.Email || "";
  if (
    !info.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    if (emailInput && emailInput.value) {
      info.email = emailInput.value;
    }
  }

  // TODO: The following method of parsing the markup for email addresses is disabled below since it can find
  // contacts or other bad strings.
  // var re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  // var emails = text.match(re);
  // if (emails && emails.length) info.email = emails[0];

  return info;
}

function getDemographicPageResponse(demographic) {
  const origin = getOrigin();
  const namespace = getNamespace();

  let demographicNo = demographic || getDemographicNo(window.location.search);

  if (!demographicNo && window.opener)
    demographicNo = getDemographicNo(window.opener.location.search);

  if (!demographicNo) {
    // TODO: always try this when getting demo #.
    document.querySelectorAll("form").forEach(function (f) {
      console.log(f);
      demographicNo = demographicNo || getDemographicNo(f.action).trim();
    });
  }
  //const demographicNo = demographic || getDemographicNo();

  if (!demographicNo) {
    console.trace();
    console.error("Failed to load demographics.");
    return "";
  }
  let url = `${origin}/${namespace}/demographic/demographiccontrol.jsp?demographic_no=${demographicNo}&displaymode=edit&dboperation=search_detail`;

  if (origin.includes("skymedical")) {
    url = `/demographic/demographiccontrol.jsp?demographic_no=${demographicNo}&displaymode=edit&dboperation=search_detail`;
  }
  //const originalFetch = require("cross-fetch");
  //const fetch = require("fetch-retry")(originalFetch);
  return fetch(url);
}
