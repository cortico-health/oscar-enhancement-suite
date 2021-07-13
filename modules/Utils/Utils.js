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

/**
 * Returns master file URL for the given appointment
 * @param {HTMLTableDataCellElement} the appointment TD element.
 * @return {string || null} the url or null if the algorithm fails.
 */

export function getMasterFileUrl(apptTd) {
  if (!apptTd) {
    return null;
  }

  const masterAnchor = apptTd.querySelector(".masterBtn");

  if (!masterAnchor) {
    return null;
  }

  let clickContent = masterAnchor.attributes.onclick.textContent;
  if (!clickContent) {
    return null;
  }

  clickContent = clickContent.split(",");
  let url = clickContent[2];

  if (!url) {
    return null;
  }

  url = url.substring(3).replace(/'/g, "");
  console.log(url);
}
