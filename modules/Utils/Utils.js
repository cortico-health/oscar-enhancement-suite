import dayjs from "dayjs";
import { Oscar } from "../../modules/core/Oscar.js";
const oscar = new Oscar(window.location.hostname);

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

export function getOrigin() {
  return window.location.origin;
}

export function getNamespace() {
  return window.location.pathname.split("/")[1];
}

export function getBaseUrl() {
  const origin = getOrigin();
  if (origin.includes("skymedical")) {
    return "/";
  }
  const namespace = getNamespace();
  return `${origin}/${namespace}/`;
}

export function getCorticoUrl() {
  // FOR TESTING:

  const clinicName = window.localStorage["clinicname"];
  if (clinicName === "localhost") {
    return "http://localhost"; // No HTTPS
  }
  let suffix = window.localStorage["customUrlSuffix"] || "cortico.ca";

  if (suffix.charAt(0) === ".") {
    suffix = suffix.substring(1);
  }
  if (!clinicName) {
    return null;
  }

  return `https://${clinicName}.${suffix}`;
}

export function getDaySheet() {
  const corticoUrl = getCorticoUrl();
  if (!corticoUrl) {
    return null;
  }

  return `${getCorticoUrl()}/virtual-portal`;
}

export function getCorticoAppointmentUrl(providerNo, appointmentNo) {
  const corticoUrl = getCorticoUrl();
  if (!corticoUrl) {
    return null;
  }

  return `${getCorticoUrl()}/provider/schedule/${providerNo}/?appointment_id=${appointmentNo}`;
}

export function create(_element, options, ...children) {
  if (!_element) {
    return null;
  }
  let element;
  if (_element.trim().startsWith("<")) {
    element = htmlToElement(_element);
  } else {
    element = document.createElement(_element);
  }

  if (!options) {
    return element;
  }

  if (options.attrs) {
    for (let prop in options.attrs) {
      element.setAttribute(prop, options.attrs[prop]);
    }
  }

  if (options.text) {
    element.textContent = options.text;
  }

  if (options.events) {
    for (let event in options.events) {
      const chunks = event.split(" ");
      const trigger = chunks.shift();
      const selector = chunks.join(" ");
      // closure
      const tmp = function (trigger, selector, handler) {
        element.addEventListener(trigger, function (e) {
          let target = selector ? e.target.closest(selector) : e.target;

          if (target) handler({ target: target, originalEvent: e });
        });
      };
      tmp(trigger, selector, options.events[event]);
    }
  }

  children.map((child) => {
    element.appendChild(child);
  });
  return element;
}

export function loadExtensionStorageValue(key) {
  return new Promise(function (resolve, reject) {
    const browser = browser || window.chrome;
    if (window.is_dev || !browser) {
      resolve(window.localStorage.getItem(key));
    } else {
      browser.storage.local.get(key, function (result) {
        resolve(result[key]);
      });
    }
  });
}

export async function removeExtensionStorageValue(key) {
  const browser = browser || window.chrome;
  if (window.is_dev || !browser) {
    window.localStorage.removeItem(key);
    return true;
  } else {
    return new Promise((resolve, reject) => {
      browser.storage.local.remove(key, function (result) {
        resolve(result);
      });
    });
  }
}

export function saveExtensionStorageValue(key, value) {
  const browser = browser || window.chrome;
  if (window.is_dev || !browser) {
    window.localStorage.setItem(key, value);
  } else {
    let to_set = {};
    to_set[key] = value;
    browser.storage.local.set(to_set);
  }
}

export function htmlToElement(html) {
  const placeholder = document.createElement("div");
  placeholder.innerHTML = html;
  return placeholder.children.length
    ? placeholder.firstElementChild
    : undefined;
}

export function getDemographicNo(apptUrl) {
  if (apptUrl) {
    var searchParams = new URLSearchParams(apptUrl);
    return (
      searchParams.get("demographic_no") ||
      searchParams.get("demographicNo") ||
      searchParams.get("functionid") ||
      searchParams.get("efmdemographic_no")
    );
  } else {
    // try several options
    let demographicNo = getDemographicNo(window.location.search);
    if (!demographicNo && window.opener) {
      demographicNo = getDemographicNo(window.opener.location.search);
    }

    if (!demographicNo) {
      console.log("Called!");
      const temp = document.body.innerHTML;
      demographicNo = temp.match(/demographic_no=[0-9]*/);
      if (demographicNo) {
        console.log(demographicNo);
        demographicNo = demographicNo[0].split("=")[1];
        console.log(demographicNo);
        console.log("Found demographic Number!", demographicNo);
      }
    }

    return demographicNo;
  }
}

export function getAppointmentNo(apptUrl) {
  var searchParams = new URLSearchParams(apptUrl.split("?")[1]);
  return searchParams.get("appointment_no");
}

export function addToCache(demographic_no, _verified) {
  const verified = _verified || false;
  const _cache = window.localStorage.getItem("checkCache");
  const _today = dayjs().format("YYYY-MM-DD");
  const cache = JSON.parse(_cache) || {};
  cache[demographic_no] = {
    date: _today,
    verified: verified,
  };

  window.localStorage.setItem("checkCache", JSON.stringify(cache));
}

export function checkCorticoUrl(event) {
  if (!getCorticoUrl()) {
    return false;
  }
  return true;
}

export async function isLoggedIn() {
  const token = await loadExtensionStorageValue("jwt_access_token");
  return !!token;
}

export async function convertImagesToDataURLs(el) {
  // convert bg images to data URL.
  const bg_images = el.querySelectorAll("img");
  for (let i = 0; i < bg_images.length; i++) {
    let bg = bg_images[i];
    try {
      //let bg = document.getElementById('BGImage')
      const blob = await fetch(bg.src).then((r) => r.blob());
      const dataUrl = await new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      bg.src = dataUrl;
    } catch (e) {
      // some images may have cross origin restrictions.
      console.warn("failed to convert image: ", bg, e);
    }
  }
}

export function stripScripts(el) {
  var scripts = el.getElementsByTagName("script");
  var i = scripts.length;
  while (i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
}

export function addNewUI() {
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

export function removeNewUI() {
  var styleSheet = styleSheetFactory("newUIStyleSheet");
  var styles = "";
  styleSheet.innerText = styles;
}

export function styleSheetFactory(namespace) {
  if (!window[namespace]) {
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);
    window[namespace] = styleSheet;
    return styleSheet;
  }
  return window[namespace];
}

export async function setupEFormPage() {
  let is_eform_page = true;
  const clinicName = localStorage["clinicname"];

  const email_parent =
    document.querySelector(".DoNotPrint td") ||
    document.querySelector("#BottomButtons") ||
    document.querySelector("#topbar > form") ||
    document.body;

  if (!email_parent) {
    is_eform_page = false;
    const email_parent = document.querySelector("#save div:last-child");
  }
  if (!email_parent) {
    // bail
    console.warn("Cannot find position for email button.");
    return;
  }

  let html = document.cloneNode(true);
  await convertImagesToDataURLs(html);
  stripScripts(html);
  html = html.documentElement.outerHTML;

  return {
    name: "eForm",
    html,
  };
}

export function getAccountProviderNo() {
  const firstMenu = document.getElementById("firstMenu");

  if (!firstMenu) {
    return null;
  }

  const inboxFirstChild = firstMenu.querySelector("#oscar_new_lab");

  if (!inboxFirstChild) {
    return null;
  }

  const inboxAnchorElement = inboxFirstChild.parentElement;

  if (!inboxAnchorElement) {
    return null;
  }

  let target = null;
  if (oscar.isKaiOscarHost()) {
    target = inboxAnchorElement.getAttribute("href");
  } else {
    target = inboxAnchorElement.getAttribute("onclick");
  }

  if (!target) {
    return null;
  }
  const providerNoStrings = target.match(/providerNo=\d+/g);
  if (!providerNoStrings || providerNoStrings.length === 0) {
    return null;
  }
  const providerNoString = providerNoStrings[0];
  const providerNo = providerNoString.replace(/[^0-9.]/g, "");
  return providerNo;
}

export async function setFormInputValueAttributes(document) {
  document.querySelectorAll("input").forEach((input) => {
    input.setAttribute("value", input.value);

    if (input.checked === true) {
      input.setAttribute("checked", true);
    }
  });
  document.querySelectorAll("textarea").forEach((input) => {
    input.innerHTML = input.value;
  });

  document.querySelectorAll("select").forEach((input) => {
    input.setAttribute("value", input.value);
  });
  await convertImagesToDataURLs(document);
  stripScripts(document);
  return document.documentElement.outerHTML;
}

export function formEncounterMessage(scheme, subject, body) {
  const prefix = `\n\n[${dayjs().format(
    "DD-MM-YYYY, HH:mm:ss"
  )} .: ${scheme} sent to patient]\n${subject}:\n\n`;
  const suffix = `\n-------------------------------------------\n`;
  return prefix + body + suffix;
}
