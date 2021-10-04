
import dayjs from "dayjs";

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

export function getCorticoUrl() {
  // FOR TESTING:
  //return 'http://localhost';

  const clinicName = window.localStorage["clinicname"];
  let suffix = window.localStorage["customUrlSuffix"] || 'cortico.ca';

  if (suffix.charAt(0) === ".") {
    suffix = suffix.substring(1)
  }
  if (!clinicName) {
    return null;
  }

  return `https://${clinicName}.${suffix}`;
}

export function getPortalPage() {
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
    element = htmlToElement(_element)
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
      console.log('*', event)
      const chunks = event.split(' ')
      const trigger = chunks.shift()
      const selector = chunks.join(' ')
      // closure
      const tmp = function (trigger, selector, handler) {
        element.addEventListener(trigger, function (e) {
          let target = selector ? e.target.closest(selector) : e.target;

          if (target) handler({ target: target, originalEvent: e })
        })
      }
      tmp(trigger, selector, options.events[event])
    }
  }

  children.map((child) => {
    element.appendChild(child);
  });

  return element;
}

export function loadExtensionStorageValue(key) {
  return new Promise(function (resolve, reject) {
    chrome.storage.local.get(key, function (result) {
      resolve(result[key])
    })
  })
}

export function htmlToElement(html) {
  const placeholder = document.createElement("div");
  placeholder.innerHTML = html;
  return placeholder.children.length
    ? placeholder.firstElementChild
    : undefined;
}

export function getDemographicNo(apptUrl) {
  var searchParams = new URLSearchParams(apptUrl);
  return (
    searchParams.get("demographic_no") || searchParams.get("demographicNo")
  );
}

export function getAppointmentNo(apptUrl) {
  console.log(apptUrl)
  var searchParams = new URLSearchParams(apptUrl.split('?')[1]);
  return (
    searchParams.get("appointment_no")
  );
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

export function createSidebarContainer(child, events) {
  var html = child ? (
    typeof child === 'string' ? child : child.outerHTML
  ) : ''
  var events = events ? events : {}

  var container = create(
    `<div style='width: 100%; padding: 0px 10px; box-sizing: border-box'>
    ${html}
  </div>`, events)

  return container
}

export function checkCorticoUrl(event) {
  if (!getCorticoUrl()) {
    event.preventDefault();
    alert("Please set the cortico URL to use this feature.");

    return false;
  }

  return true;
}
