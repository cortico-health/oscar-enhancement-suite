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
  const clinicName = window.localStorage["clinicname"];
  if (!clinicName) {
    return null;
  }

  return `https://${clinicName}.cortico.ca`;
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