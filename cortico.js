// ==UserScript==
// @name     Cortico
// @version  2.1
// @grant    none
// ==/UserScript==

import { pubSubInit } from "./modules/PubSub/PubSub";
import dayjs from "dayjs";
import {
  getAppointments,
  getAppointmentLink,
} from "./modules/cortico/Appointments/Appointments";
import { addAppointmentMenu } from "./modules/cortico/Appointments/AppointmentMenu";
import { Oscar } from "./modules/core/Oscar.js";
import "element-closest-polyfill";
import { getOrigin, getNamespace } from "./modules/Utils/Utils";
import { CorticoIcon } from "./modules/Icons/CorticoIcon";
import { debounce, create } from "./modules/Utils/Utils";
import "./index.css";
import { Modal } from "./modules/Modal/Modal";
import Dashboard from "./modules/cortico/Dashboard";
const CORTICO = {}; // container for global state. Use this rather than `window`
import Disclaimer from "./modules/cortico/Disclaimer";
// manually update this variable with the version in manifest.json
const version = 3.1;
const pubsub = pubSubInit();
const oscar = new Oscar(window.location.hostname);

const init_cortico = function () {


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
  /*
  const modal = new Modal();
  modal.setContent(Dashboard());
  modal.show();
*/
  if (
    route.indexOf("/appointment/addappointment.jsp") > -1 ||
    route.indexOf("/appointment/appointmentcontrol.jsp") > -1
  ) {
    init_appointment_page();
    init_recall_button();

    // Temporary fix, adding event listener does not work inside init_appointment_page
    // Note: event listeners inside init_recall_button seems to be working fine
    var resources_field = document.querySelector('[name="resources"]');
    var cortico_button = document.getElementById("cortico-video-appt-btn");
    // open a windows to the cortico video page for this appointment.
    window.addEventListener("click", (e) => {
      if (e.target.id === "cortico-video-appt-btn") {
        open_video_appointment_page(e);
      }
    });
    //You need to delegate
    //cortico_button.addEventListener("click", open_video_appointment_page);
    resources_field.addEventListener("change", update_video_button);

    // TODO: diagnostic results API needs authenticated first.
    init_diagnostic_viewer_button();
  } else if (route.indexOf("/provider/providercontrol.jsp") > -1) {
    init_schedule();

    if (!oscar.isJuno()) {
      dragAndDrop();
    }

    addCorticoLogo();
    addMenu();
    addAppointmentMenu();
    if (!oscar.isJuno() && !oscar.containsKaiBar()) {
      plusSignFromCache();
    }

    const isMarkham = window.location.href.includes("mmfcc");
    if (isMarkham) {
      plusSignFromCache();
    }

    setupPrescriptionButtons();
  } else if (
    route.indexOf("/eform/efmformadd_data.jsp") > -1 ||
    route.indexOf("/eform/efmshowform_data.jsp") > -1 ||
    route.indexOf("/casemgmt/forward.jsp") > -1
  ) {
    setupPatientEmailButton();
  } else if (route.indexOf("/oscarRx/ViewScript2.jsp") > -1) {
    // We need to determine first if the prescription is "delivery"
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
  var cortico_button = document.getElementById("cortico-video-appt-btn");
  var resources_field = document.querySelector('[name="resources"]');
  /* TODO: when other appoitment types supported. 
  cortico_button.innerText =
    resources_field.value === "virtual" ? "Join Video Call" : "Join Appointment";
  */
  cortico_button.style.display =
    resources_field.value === "virtual" ? "inline-block" : "none";
}

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
  window.open(
    "https://" +
    localStorage["clinicname"] +
    ".cortico.ca/appointment/" +
    appt_no
  );
}

function init_appointment_page() {
  // resources dropdown
  var resources_field = document.querySelector(
    'input[type="text"][name="resources"]'
  );
  const cortico_media = ["phone", "clinic", "virtual", "", "quiet"];

  const parent = resources_field.parentNode;

  console.log(
    "If test",
    cortico_media.indexOf(resources_field.value),
    resources_field.value
  );
  if (cortico_media.indexOf(resources_field.value) > -1) {
    let selectHtml = '<select name="resources">';
    cortico_media.forEach(function (value) {
      selectHtml +=
        "<option " +
        (value == resources_field.value ? "selected " : "") +
        'value="' +
        value +
        '">' +
        (value || "n/a") +
        "</option>";
    });
    selectHtml += "</select>";

    parent.innerHTML = selectHtml;

    const resourceCheckbox = document.createElement("input");
    resourceCheckbox.setAttribute("type", "checkbox");
    resourceCheckbox.setAttribute("id", "resourceCheck");

    const resourceLabel = document.createElement("label");
    resourceLabel.setAttribute("for", "resourceCheck");
    resourceLabel.textContent = "Text field";
    parent.appendChild(resourceCheckbox);
    parent.appendChild(resourceLabel);

    const resourceTextInput = document.createElement("input");
    resourceTextInput.setAttribute("type", "TEXT");
    resourceTextInput.setAttribute("name", "resources");
    resourceTextInput.setAttribute("tabindex", "5");
    resourceTextInput.setAttribute("width", "25");

    resourceCheckbox.addEventListener("input", (e) => {
      parent.innerHTML = "";
      if (e.target.checked === true) {
        parent.appendChild(resourceTextInput);
      } else {
        parent.innerHTML = selectHtml;
      }

      parent.appendChild(resourceCheckbox);
      parent.appendChild(resourceLabel);
    });

    resources_field = document.querySelector('[name="resources"]');
  }

  // telehealth button
  var last_button = document.querySelector("#printReceiptButton").parentNode;
  last_button.parentNode.appendChild(
    htmlToElement(
      "<button class='cortico-btn' type='button' id='cortico-video-appt-btn'>Video Call &phone;</button>"
    )
  );

  update_video_button();
}

async function setupPatientEmailButton() {

  let is_eform_page = true;
  const clinicName = localStorage["clinicname"];

  const email_parent = document.querySelector(".DoNotPrint td")
  if (!email_parent) {
    is_eform_page = false;
    const email_parent = document.querySelector("#save div:last-child");
  }

  const patient_info = await getPatientInfo();
  let mailto_str
  if (is_eform_page) {
    mailto_str = `mailto:${patient_info.email}?subject=Your+Document&body=Hi+${patient_info["First Name"]}%0A%0APlease find the attached document from your doctor at ${clinicName}.`
  } else {
    mailto_str = `mailto:${patient_info.email}`
  }

  const email_btn = htmlToElement(`
  <p style='margin-bottom:2em'>
    <a href='${mailto_str}' id='cortico-email-patient' class='cortico-btn'>Email Patient</a>
  </p>
  `);

  email_parent.appendChild(email_btn);

}

const init_styles = function () {
  var style = `.cortico-btn {
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
  var listitem = document.createElement("li");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", "https://cortico.ca");

  const corticoLogo = CorticoIcon({
    attrs: {
      height: "15",
      style: "position:relative; top: 2px;",
    },
  });

  anchor.appendChild(corticoLogo);
  listitem.appendChild(anchor);
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

function createSideBar() {
  if (window.corticoSidebar) {
    // TODO: is idempotency really needed here? it's a global init.
    return;
  }

  var sidebar = document.createElement("div");
  window.corticoSidebar = sidebar;
  sidebar.classList.add("cortico-sidebar");

  sidebar.innerHTML =
    '<a href="https://cortico.ca"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhCAYAAADGBs+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEqklEQVR4nO2dvXHbMBSAX3RpVNkb2BvYmcAaQIUa1nEmiDYIR1AmsFyrSe7Ux9lAniDWBlbF0jnIjzYlUyRAvAc8kO+707mxAAofQeLvAZ9eXl4gJaZZcQ4A1wAwObrsDQA8rFfj56R+EAAkI2GaFabg5wDwteVf7wFguV6NHwJdmjfiJeCdnwPAd8ev/jTfS6FmiJaAAswdfdUxiUcAuF2vxhviSyNFrAQCASVGxERyjRgJuIYPEAoATOMX8SWSIk4CsYCSm2lWzAjTI0WUBCYBJTlDmiSIkcAswHCFzVxxiJAQQEDJcQdPBNElBBQA2NMWR1QJgQUYLgPl40Q0CREEiCWKBBVwSHAJkQWIHNQLKkFADRA5hhRs7EiAgN16NT6PlHcjQWqCkHfAImLejbBLECJgO1gJglpBs0EOZQsS8E36pA6LBGEClpGvoRVyCSrAHVIJKqAbZBJUQHdIJKgAP7wlqAB/vCSoABo6S1ABdHSSoAJocZagAuhxkqACeLCWoAL4sJKgAnhplaAC+GmUoALC8PlULirAnUo83cZlEql2ol8F2DHNCrOib4afm5ov/cXYiGWTlA8SVEA7WEYmiPGH5Vd2Zo57vRrXLs8/kKAC2sHl9cuOZVQbuvUmQQW0gwJMGZ15JPNBRLV1pAIawJt06SkAsIwPlmPuJUyzYq4CWskJy8hEDb29H/aPo2lWPBMY9iGFVtA/4mTNy/rSPJZG06y4VQGtzBnSNGVuyn7/OIoZx5VKR4yrjKJLSGkogi2iFFDCBVMGTaQ0FMF6k5pmb4xwqV4PxnXgPLQEFVDDCNfuhyBJAdybV5n0R4HiuFKvAY+c6Y4CbEPTh0cQV23Yp1tK2DFl0pd3AFeo1T7dEY7mcWRiLcA007DnLpL1avyEe+pRco/pvg7g4WQD5XPPSQBWyzvJInAAj6oRs6sOhVSbqBMiEV0ElGNXYkXgE2NG8OjeHc8nUM6sbTFK0qq11TJB0teJnVLAQRmdmujPsbrYZvQbt760WmFg+UOkT/AsLDbKrWI2zZ3XldHJbRUwo1v81NWMLRbkwiVE1fFOSmGeIcdHed0YXFlGefkSrsN6bwvMsNy0yWldTSWNLlU5iWbuUfkYnpoKvkrIDUZ8nqW9HnMKtcHIxHOVgvTmqxchNhgxhfeHYAq1tyK4NxgxLYg7wiR7KYLlnYCPnwXjtGCv3hGkErDw8xOLY6npjQhvCVjwE+xPhJ6v7oWIzhKwXbyJvGYJBhvHDO/DuxPGuQhbkn9Ze7WOcLhCRXji3URVEf6Q9BNUhB9knTUV0R3SHrOK6Ab5sIWKcIdl7EhFuME6n0AUaEfBF8kb1LKOogqqEb9wulYk7PMJQkRcMIU8kZDK9CYFb4F6kfI/SbD4BAE14kzPWZMhQiVAfBF62F2JoFaTCKIddqci3ol67KOKeCX6AaiBRYjsNYs4CjigCJEnDgbrrNnA3KEb9mF3tjDXiOEeducKk4jhHnbXFWIRu8EedudLRYRPxGRtjJg0xEqAdxHXGBPnymMKAkBa66gJh8XGW4wRS2ZpZDISSnANrBFi/pYDcuZuN8syTSyd+Dv/AAD4D9nFlj4ll12bAAAAAElFTkSuQmCC"  alt="Cortico" style="margin-bottom: 25px;" /></a>';

  var sidebarClose = document.createElement("div");
  sidebarClose.classList.add("cortico-sidebar-close");
  sidebarClose.textContent = "Close";
  sidebarClose.style.cursor = "pointer";
  sidebarClose.addEventListener("click", function () {
    sidebar.classList.remove("cortico-sidebar-show");
    if (window.localStorage["firstRun"] === "true") {
      closeSidebarInstructions();
      window.localStorage["firstRun"] = false;
    }
  });
  sidebar.appendChild(sidebarClose);

  //var newUiOption = getNewUIOption();
  //sidebar.appendChild(newUiOption);

  sidebar.appendChild(getCorticoUrlOption());
  sidebar.appendChild(getRecallStatusOption());

  sidebar.appendChild(getEligButton());
  sidebar.appendChild(getEligStatus());
  sidebar.appendChild(getEligFailed());

  sidebar.appendChild(getBatchPharmaciesButton());
  sidebar.appendChild(getBatchPharmaciesStatus());

  var styleSheet = styleSheetFactory("cortico_sidebar");
  var styles = "";
  styles +=
    ".cortico-sidebar { position: fixed; top: 0; right: 0; bottom: 0; width: 300px; background-color: white; height: 100%; z-index: 10000; }";
  styles +=
    ".cortico-sidebar { transition: transform 0.25s ease-in; transform: translateX(300px); }";
  styles +=
    ".cortico-sidebar { display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 1px 5px 5px rgb(0, 0, 0); }";
  styles += ".cortico-sidebar-show { transform: translateX(0); }";
  styles +=
    ".cortico-sidebar-close { position: absolute; top: 10px; right: 10px; z-index: 500; }";
  styleSheet.innerText = styles;

  return sidebar;
}

function closeSidebarInstructions() {
  const sidebarInstructions = document.querySelector(".sidebar-instructions");
  if (sidebarInstructions) {
    sidebarInstructions.classList.add("sidebar-instructions-hidden");
  }
}

function showDiagnosticResults(html_string) {
  if (CORTICO.diagnosticResults) {
    CORTICO.diagnosticResults.style.display = "block";
  } else {
    var container = document.createElement("div");
    CORTICO.diagnosticResults = container;
    container.classList.add("cortico-diagnostic-viewer");
    container.innerHTML = html_string;
  }

  var containerClose = document.createElement("button");
  containerClose.classList.add("cortico-diagnostic-close");
  containerClose.textContent = "Close";
  containerClose.style.cursor = "pointer";
  containerClose.addEventListener("click", function () {
    container.style.display = "none";
  });
  container.appendChild(containerClose);

  var styleSheet = styleSheetFactory("cortico_sidebar");
  var styles = "";
  styles +=
    ".cortico-diagnostic-viewer { position: fixed; top: 20%; left: 50% ;width: 300px; background-color: white; transform: translate(-50%, 0) }";
  styles +=
    ".cortico-diagnostic-viewer { padding: 20px; padding-top: 30px; border: 1px solid }";
  styles +=
    ".cortico-diagnostic-viewer { overflow-y: scroll }";
  styles +=
    ".cortico-diagnostic-close { position: absolute; top: 10px; right: 10px; z-index: 500; }";
  styleSheet.innerText = styles;

  document.body.prepend(container);
}

function addMenu(container) {
  var navigation =
    document.querySelector("#firstMenu #navList") ||
    document.querySelector("#firstMenu #navlist");
  var menu = document.createElement("li");
  menu.textContent = "Cortico";
  menu.style.color = "rgb(75, 84, 246)";
  menu.style.cursor = "pointer";

  var sidebar = createSideBar();
  menu.addEventListener("click", function () {
    sidebar.classList.toggle("cortico-sidebar-show");
    if (window.localStorage["firstRun"] === "true") {
      closeSidebarInstructions();
      window.localStorage["firstRun"] = false;
    }
  });

  menu.addEventListener("click", () => {
    const opened = window.localStorage["disclaimer"];
    if (!opened) {
      const modal = new Modal();
      modal.setContent(Disclaimer());
      modal.show();
      window.localStorage["disclaimer"] = true;
    }
  });

  menu.addEventListener(
    "click",
    () => {
      if (window.localStorage["firstRun"] === undefined) {
        window.localStorage["firstRun"] = true;
      }
    },
    {
      once: true,
    }
  );

  document.body.prepend(sidebar);
  navigation.appendChild(menu);
}

function getRecallStatusOption() {
  var container = document.createElement("div");
  container.style.width = "100%";
  container.style.padding = "0px 10px";
  container.style.boxSizing = "border-box";

  var inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.justifyContent = "center";

  var input = document.createElement("input");
  input.setAttribute("id", "recall-status");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Recall Status");
  input.style.fontSize = "16px";
  input.style.padding = "5px 5px";
  input.style.margin = "0px 10px";
  input.style.width = "35%";
  input.style.backgroundColor = "transparent";
  input.style.border = "1px solid rgb(75, 84, 246)";

  inputContainer.appendChild(input);

  if (localStorage.getItem("recall-status")) {
    input.value = localStorage.getItem("recall-status");
  }

  var label = document.createElement("label");
  label.setAttribute("for", "recall-status");
  label.textContent = "Status to check for recall button";
  label.style.display = "block";
  label.style.marginTop = "30px";
  label.style.marginBottom = "10px";
  label.style.textAlign = "center";

  var button = htmlToElement(`<button class='cortico-btn'>Save</button>`)
  // document.createElement("button");
  // button.textContent = "Save";
  // button.style.width = "100%";
  // button.style.display = "inline-block";
  // button.style.margin = "10px auto";
  // button.className = "cortico-btn";

  container.appendChild(label);
  container.appendChild(inputContainer);
  container.appendChild(button);

  button.addEventListener("click", function () {
    if (input.value) {
      localStorage.setItem("recall-status", input.value);
      alert("Your recall status has changed");
    }
  });
  return container;
}

function getEligStatus() {
  var container = document.createElement("div");
  container.style.textAlign = "center";
  pubsub.subscribe("check-eligibility", (topic, data) => {
    const progress = "(" + data.current + "/" + data.total + ")";

    if (data.complete === true) {
      container.innerHTML = "Check Complete!";
    } else {
      const header = "Currently Processing" + progress + ":";
      const name = data.info.split("\n")[1];
      container.innerHTML = "<p>" + header + "<br/>" + name + "</p>";
    }
  });
  return container;
}

function getBatchPharmaciesStatus() {
  var container = document.createElement("div");
  container.style.textAlign = "center";
  pubsub.subscribe("check-batch-pharmacies", (topic, data) => {
    const progress = "(" + data.current + "/" + data.total + ")";

    if (data.complete === true) {
      container.innerHTML = "Setup Complete!";
    } else {
      const header = "Currently Processing" + progress + ":";
      container.innerHTML = "<p>" + header + "<br/>" + "</p>";
    }
  });
  return container;
}

function getEligFailed() {
  var container = document.createElement("div");
  container.style.textAlign = "center";
  pubsub.subscribe("check-eligibility-failed", (topic, data) => {
    container.innerHTML = '<p style="margin-top: 10px;">Failed to Verify:</p>';

    const list = getFailedList(data);
    container.appendChild(list);
  });

  return container;
}

function getFailedList(data) {
  let failed = JSON.parse(data);
  let listItems = "";

  // make sure that failed is of type array so map function works
  if (typeof failed === "string") {
    failed = JSON.parse(failed);
  }

  if (failed) {
    failed.map((f) => {
      listItems += `<li>Demographic No: ${f.demographic_no}</li>`;
    });
  }
  const list = document.createElement("ul");
  list.innerHTML = listItems;
  return list;
}

function getNewUIOption() {
  var container = document.createElement("div");

  var input = document.createElement("input");
  input.setAttribute("id", "corticoui");
  input.setAttribute("type", "checkbox");
  input.style.verticalAlign = "middle";
  container.appendChild(input);

  input.addEventListener("change", function () {
    if (this.checked) {
      localStorage.setItem("newui", "true");
      addNewUI();
    } else {
      localStorage.setItem("newui", "false");
      removeNewUI();
    }
  });

  if (localStorage.getItem("newui") === "true") {
    input.checked = true;
    addNewUI();
  }

  var label = document.createElement("label");
  label.setAttribute("for", "corticoui");
  label.textContent = "Activate New UI";
  label.style.marginLeft = "5px";
  container.appendChild(label);

  return container;
}

function getCorticoUrlOption() {
  var container = document.createElement("div");
  container.style.width = "100%";
  container.style.padding = "0px 10px";
  container.style.boxSizing = "border-box";
  var inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.justifyContent = "center";

  var prefix = document.createElement("span");
  prefix.textContent = "https://";
  var suffix = document.createElement("span");
  suffix.textContent = ".cortico.ca";
  var input = document.createElement("input");
  input.setAttribute("id", "cortico-url");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Clinic Name");
  input.style.fontSize = "16px";
  input.style.padding = "5px 5px";
  input.style.margin = "0px 10px";
  input.style.width = "35%";
  input.style.backgroundColor = "transparent";
  input.style.border = "1px solid rgb(75, 84, 246)";

  inputContainer.appendChild(prefix);
  inputContainer.appendChild(input);
  inputContainer.appendChild(suffix);

  if (localStorage.getItem("clinicname")) {
    input.value = localStorage.getItem("clinicname");
  }

  var label = document.createElement("label");
  label.setAttribute("for", "cortico-url");
  label.textContent = "Your cortico clinic name";
  label.style.display = "block";
  label.style.marginTop = "30px";
  label.style.marginBottom = "10px";
  label.style.textAlign = "center";

  var button = document.createElement("button");
  button.textContent = "Save";
  button.style.width = "100%";
  button.style.display = "inline-block";
  button.style.margin = "10px auto";
  button.className = "cortico-btn";

  if (window.localStorage["firstRun"] !== "false") {
    const instructions = create("div", {
      attrs: {
        class: "sidebar-instructions",
      },
      text: "Welcome to the Cortico Oscar plugin! Please set your cortico clinic name",
    });
    container.appendChild(instructions);
  }

  container.appendChild(label);
  container.appendChild(inputContainer);
  container.appendChild(button);

  button.addEventListener("click", function () {
    if (input.value) {
      const corticoUrl = input.value + ".cortico.ca";
      localStorage.setItem("clinicname", input.value);
      alert("Your clinic name has changed, the page will now reload");
      window.location.reload();
    }
  });
  return container;
}

function getEligButton() {
  var button = document.createElement("button");
  button.textContent = "Check Eligiblity";
  button.className = "cortico-btn";
  button.addEventListener("click", async (e) => {
    await checkAllEligibility();
  });
  //button.addEventListener("click", window.checkAllEligibility);
  return button;
}

function getBatchPharmaciesButton() {
  var button = document.createElement("button");
  button.textContent = "Set preferred pharmacies";
  button.className = "cortico-btn";
  button.addEventListener("click", setupPreferredPharmacies);
  return button;
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
      result = await cutAppointment(origin, namespace, formData);
      formData.set("provider_no", targetDoctor);

      handleAddData(formData);
      const data = new URLSearchParams(formData);
      result = await addAppointment(origin, namespace, data);

      window.location.reload();
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

function addToFailures(metadata) {
  const _cache = getFailureCache();
  const cache = JSON.parse(_cache) || [];
  if (cache && cache.push) {
    cache.push(metadata);
  }
  localStorage.setItem("failureCache", JSON.stringify(cache));
}

function clearFailureCache() {
  return localStorage.removeItem("failureCache");
}

function getFailureCache() {
  return localStorage.getItem("failureCache");
}

function addToCache(demographic_no, _verified) {
  const verified = _verified || false;
  const _cache = localStorage.getItem("checkCache");
  const _today = dayjs().format("YYYY-MM-DD");
  const cache = JSON.parse(_cache) || {};
  cache[demographic_no] = {
    date: _today,
    verified: verified,
  };

  localStorage.setItem("checkCache", JSON.stringify(cache));
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

async function checkAllEligibility() {
  //localStorage.removeItem("checkCache")

  if (window.checkAllEligibilityRunning === true) {
    return alert("Check Already Running");
  }

  clearFailureCache();
  var nodes = document.querySelectorAll("td.appt");
  var appointmentInfo = getAppointmentInfo(nodes);
  appointmentInfo = filterAppointments(appointmentInfo);

  var length = appointmentInfo.length;
  if (appointmentInfo.length === 0) {
    alert("No Appointments to Check");
  }

  const providerNo = getProviderNoFromTd(nodes[0]);
  var error = false;

  window.checkAllEligibilityRunning = true;
  try {
    for (let i = 0; i < length; i++) {
      const temp = Object.assign({}, appointmentInfo[i]);
      temp.total = length;
      temp.current = i + 1;
      pubsub.publish("check-eligibility", temp);

      const demographic_no = appointmentInfo[i].demographic_no;
      let result = null;
      try {
        result = await checkEligiblity(
          demographic_no,
          getOrigin(),
          getNamespace(),
          providerNo
        );
      } catch (e) {
        console.error(e);
      }

      let text = null;
      let lowerCaseText = null;

      if (result && result.status === 200) {
        let text = await result.text();
        lowerCaseText = text.toLowerCase();
      } else {
        text = "Failed to fetch";
        lowerCaseText = "Failed to fetch";
      }

      if (lowerCaseText.includes("error in teleplan connection")) {
        alert("Automatic Eligiblity Check Aborted. \n" + text);
        error = true;
        break;
      }

      let verified = false;

      if (
        (!lowerCaseText.includes("failure-phn") &&
          lowerCaseText.includes("success")) ||
        lowerCaseText.includes("health card passed validation")
      ) {
        plusSignAppointments(demographic_no);
        verified = true;
        console.log("Success!");
      } else {
        appointmentInfo[i]["reason"] = text;
        addToFailures(appointmentInfo[i]);
        pubsub.publish("check-eligibility-failed", getFailureCache());
      }
      addToCache(demographic_no, verified);
      console.log("Cached.");

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });
    }
  } catch (err) {
    console.log(err);
    alert(err);
  } finally {
    window.checkAllEligibilityRunning = false;
    pubsub.publish("check-eligibility", {
      complete: true,
      total: length,
      error,
    });
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

function checkEligiblity(demographicNo, origin, namespace, providerNo) {
  var url =
    origin +
    "/" +
    namespace +
    "/" +
    "billing/CA/BC/ManageTeleplan.do?demographic=" +
    demographicNo +
    "&method=checkElig";

  if (providerNo || providerNo === 0) {
    url += "&provider=" + providerNo;
  }
  // Taken from oscar, they bust cache with this
  const ran_number = Math.round(Math.random() * 1000000);
  url += "&rand=" + ran_number;

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
}

function getDemographicNo(apptUrl) {
  var searchParams = new URLSearchParams(apptUrl);
  return (
    searchParams.get("demographic_no") || searchParams.get("demographicNo")
  );
}

function getAppointmentInfo(apptNodes) {
  var appointmentInfo = [];
  apptNodes.forEach(function (node) {
    var temp = {};
    var apptLink = getAppointmentLink(node);

    // No Appointment link
    if (!apptLink) {
      return null;
    }

    // Already verified
    if (apptLink.textContent.includes("+")) {
      return;
    }
    var apptUrl = extractApptUrl(apptLink.attributes.onclick.textContent);
    var demographicNo = getDemographicNo(apptUrl);

    temp.demographic_no = demographicNo;
    temp.info = apptLink.attributes.title.nodeValue;
    appointmentInfo.push(temp);
  });

  //Remove duplicates and return
  return appointmentInfo.filter(
    (v, i, a) => a.findIndex((t) => t.demographic_no === v.demographic_no) === i
  );
}

function extractApptUrl(s) {
  return s.match(/'([^']+)'/)[1].substring(2);
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

function sendPatientPrescriptionNotification() {
  const clinicName = localStorage["clinicname"];
  const url = `http://${clinicName}.cortico.ca/notify-prescription/`;

  var formData = new FormData();
  formData.append("demographic_no", getDemographicFromLocation());
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
  const url = `https://${clinicName}.cortico.ca/api/pharmacies/?code=${pharmacyCode}`;

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
  var pharmacyCode = localStorage.getItem("currentPharmacyCode");

  if (code) {
    pharmacyCode = code;
  }
  const corticoPharmacy = await getPharmacyDetails(pharmacyCode);
  const corticoPharmacyText = JSON.parse(await corticoPharmacy.text());
  var faxNumber = corticoPharmacyText[0]["fax_number"] || null;
  var searchTerm = corticoPharmacyText[0]["name"] || null;

  // only use the first word on the pharmacy name to search for list
  searchTerm = searchTerm ? searchTerm.split(" ")[0] : null;

  // cleanup fax number to format starting with 1
  // This might be an issue if the oscar pharmacies don't match this format
  if (faxNumber) faxNumber = formatNumber(faxNumber);
  var demographicNo = demographic_no;
  if (!demographic_no) {
    demographicNo = getDemographicFromLocation();
  }

  const currPharmacyResults = await getCurrentPharmacy(demographicNo);
  const currPharmacyText = JSON.parse(await currPharmacyResults.text());
  var preferredPharmacy;
  console.log("Current Pharmacy:", currPharmacyText);
  if (currPharmacyText) {
    preferredPharmacy = currPharmacyText[0];
    localStorage.setItem("preferredPharmacy", preferredPharmacy);
  }

  const currentlyUsingPharmacy =
    preferredPharmacy &&
    preferredPharmacy.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (preferredPharmacy.fax === faxNumber ||
      faxNumber.includes(preferredPharmacy.fax));
  console.log(
    `currently using pharmacy ${searchTerm.toLowerCase()}, ${currentlyUsingPharmacy}`
  );

  storePharmaciesCache(demographicNo);

  if (searchTerm && !currentlyUsingPharmacy) {
    const results = await getPharmacyResults(searchTerm);
    const text = await results.text();
    const json = JSON.parse(text);
    const pharmacyUpdated = json.length > 0;

    const isRxPage =
      window.location.href.indexOf("oscarRx/choosePatient.do") > -1;

    if (pharmacyUpdated) {
      let pharmacy = json.length === 1 ? json[0] : null;

      if (json.length > 1) {
        pharmacy = json.find((item) => {
          return (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            item.fax.length > 8 &&
            // either if the fax is the same or the formatted fax has the values
            (formatNumber(item.fax) === faxNumber ||
              faxNumber.includes(item.fax))
          );
        });
      }

      if (pharmacy) {
        const setPharmacyResults = await setPreferredPharmacy(
          pharmacy,
          demographicNo
        );
        const setPharmacyText = await setPharmacyResults.text();

        if (isRxPage) alert("Updating preferred pharmacy, press Ok to reload");
        else console.log("Updating preferred pharmacy");
      }
    } else {
      const msg = `Customer pharmacy ${searchTerm} does not exist in your Oscar pharmacy database!`;
      storePharmaciesFailureCache(demographicNo, msg);
      displayPharmaciesFailure(demographicNo, msg);
      if (isRxPage) alert(msg);
      else console.warn(msg);
    }
  }
}

function displayPharmaciesFailure(demograhicNo, msg) {
  const sidebar_panel = document.querySelector(".cortico-sidebar");
  sidebar_panel.appendChild(
    htmlToElement("<div>demo#" + demograhicNo + " : " + msg)
  );
}

function storePharmaciesCache(demographicNo) {
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

  demographics.push(demographicNo);

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

async function getDiagnosticFromCortico(appt_no, notes) {
  const clinicName = localStorage["clinicname"];
  const url = `https://${clinicName}.cortico.ca/api/encrypted/diagnostic-results/?appointment_id=${appt_no}&notes=${notes}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getDemographicFromLocation() {
  const routeParams = new URLSearchParams(window.location.search);

  return routeParams.get("demographicNo");
}

async function setupPreferredPharmacies() {
  console.log("setting up batch pharmacies");
  window.setupPreferredPharmaciesRunning = true;

  clearFailureCache();
  const appointments = document.querySelectorAll(".apptLink");
  var error = false;
  for (let i = 0; i < appointments.length; i++) {
    var temp = {};
    temp.total = appointments.length;
    temp.current = i;
    pubsub.publish("check-batch-pharmacies", temp);

    const element = appointments[i];

    if (!element || !element.attributes) {
      continue;
    }
    let demographicNo = null;
    try {
      const apptUrl = extractApptUrl(element.attributes.onclick.textContent);
      demographicNo = getDemographicNo(apptUrl);
      const _pharmaciesCache = localStorage.getItem("pharmaciesCache");
      const pharmaciesCache = JSON.parse(_pharmaciesCache);
      var demographics = new Array();

      if (pharmaciesCache && pharmaciesCache["demographics"]) {
        let cachedDemographics = pharmaciesCache["demographics"];

        demographics = Array.isArray(cachedDemographics)
          ? cachedDemographics
          : JSON.parse(cachedDemographics);
      }

      if (
        demographics &&
        Array.isArray(demographics) &&
        demographics.includes(demographicNo) &&
        pharmaciesCache.date == dayjs().format("YYYY-MM-DD")
      ) {
        continue;
      }

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      const apptTitle = element.attributes.title.textContent;
      const pharmacyCode = getPharmacyCodeFromReasonOrNotes(apptTitle);
      if (!pharmacyCode) {
        continue;
      }

      await setupPreferredPharmacy(pharmacyCode, demographicNo);
    } catch (err) {
      console.error(err);
      storePharmaciesFailureCache(demographicNo, err.message);
      displayPharmaciesFailure(demographicNo, err.message);
    } finally {
    }
  }
  window.setupPreferredPharmaciesRunning = false;
  pubsub.publish("check-batch-pharmacies", {
    complete: true,
    total: length,
    error,
  });
}

async function init_diagnostic_viewer_button() {
  const notesField = document.querySelector("textarea[name='notes']");
  var notesValue = notesField.textContent;

  var last_button = document.querySelector(
    "#cortico-video-appt-btn"
  ).parentNode;
  last_button.parentNode.appendChild(
    htmlToElement(
      "<button class='cortico-btn' id='diagnostic-viewer-btn'>Patient Responses</button>"
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
    e.preventDefault();

    const appt_no = getQueryStringValue("appointment_no");
    const diagnostic_response = await getDiagnosticFromCortico(
      appt_no,
      notesValue
    );
    const diagnostic_text = String(await diagnostic_response.text());
    await showDiagnosticResults(diagnostic_text);
  }

  update_diagnostic_button_visibility();

  corticoDiagnosticViewBtn.addEventListener("click", open_diagnostic_viewer);
}

function htmlToElement(html) {
  const placeholder = document.createElement("div");
  placeholder.innerHTML = html;
  return placeholder.children.length
    ? placeholder.firstElementChild
    : undefined;
}

async function init_recall_button() {
  const statusOption = document.querySelector("select[name='status']");
  var statusValue = statusOption.options[statusOption.selectedIndex].text;

  var last_button = document.querySelector(
    "#cortico-video-appt-btn"
  ).parentNode;

  last_button.parentNode.appendChild(
    htmlToElement(
      "<button class='cortico-btn' type='button' id='recall-btn'>Recall email</button>"
    )
  );
  const corticoRecallButton = document.getElementById("recall-btn");

  function update_recall_button_visibility() {
    statusValue = statusOption.options[statusOption.selectedIndex].text;

    var recallStatus = localStorage["recall-status"]
      ? localStorage["recall-status"]
      : "todo";
    corticoRecallButton.style.display =
      statusValue.toLowerCase() === recallStatus.toLowerCase()
        ? "inline-block"
        : "none";
  }

  async function send_patient_recall_email(e) {
    e.preventDefault();

    const patientInfo = await getPatientInfo();
    const patientEmail = patientInfo.email;
    console.log(patientInfo);
    const formData = new FormData(
      document.querySelector("form[name=EDITAPPT]")
    );
    const apptTime = formData.get("start_time");
    const apptDate = formData.get("appointment_date");
    const apptPatient = formData.get("keyword");

    if (!patientEmail) {
      alert("Patient has no email");
      return;
    }
    if (!apptTime || !apptDate) {
      alert("Please provide date/time");
      return;
    }

    var apptSchedule = apptDate + "T" + apptTime;
    var cleanedSchedule = dayjs(apptSchedule).format("h:mmA on MMMM D");
    var cleanedPatient = apptPatient ? apptPatient : "Patient";
    var clinicName = localStorage["clinicname"];

    window.location.href =
      `mailto:${patientEmail}?subject=Your doctor wants to speak with you&` +
      `body=Dear ${cleanedPatient},%0d%0aYour doctor needs to follow up with you regarding some documents or results.%0d%0a` +
      `We have tentatively booked you an appointment at ${cleanedSchedule}.%0d%0a%0d%0aPlease confirm with the following link:` +
      `https://${clinicName}.cortico.ca/get-patient-appointment-lookup-url/%0d%0a%0d%0a` +
      `Sincerely,%0d%0a${clinicName.toUpperCase()} STAFF`

  }

  update_recall_button_visibility();

  statusOption.addEventListener("change", update_recall_button_visibility);
  corticoRecallButton.addEventListener("click", send_patient_recall_email);
}

async function getPatientInfo() {
  const result = await getDemographicPageResponse();
  const text = await result.text();

  var el = document.createElement("html");
  el.innerHTML = text;

  const info = {};
  el.querySelectorAll("span.label").forEach(function (label) {
    info[label.innerText.trim().replace(":", "")] = label.nextElementSibling
      ? label.nextElementSibling.innerText.trim()
      : null;
  });

  var re = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  var emails = text.match(re);

  if (emails.length) info.email = emails[0];

  // Should return 2 from view and edit, get atleast one
  return info;
}

function getDemographicPageResponse() {
  const origin = getOrigin();
  const namespace = getNamespace();

  const demographicNo =
    getDemographicNo(window.location.search) ||
    getDemographicNo(window.opener.location.search);

  if (!demographicNo) {
    console.trace();
    console.error("Failed to load demographics.");
    return "";
  }
  const url = `${origin}/${namespace}/demographic/demographiccontrol.jsp?demographic_no=${demographicNo}&displaymode=edit&dboperation=search_detail`;

  return fetch(url);
}
