import { getOrigin, getProvider } from "../Utils/Utils";
var originalFetch = require("cross-fetch");
const fetch = require("fetch-retry")(originalFetch);

/**
 * Tries to represent the masterfile in oscar.
 */
export class Masterfile {
  apptTD = null;
  url = null;
  page = null;
  container = null;

  constructor(apptTd) {
    this.apptTD = apptTd;
    this.url = this.getMasterFileUrl(apptTd);
  }

  /**
   * Returns master file URL for the given appointment
   * @params {HTMLTableDataCellElement} the appointment TD element.
   * @return {null} the url or null if the algorithm fails.
   */
  getMasterFileUrl(apptTd) {
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
    return url;
  }

  async fetchPage() {
    if (!this.url) {
      return;
    }

    try {
      const url = getOrigin() + "/" + getProvider() + this.url;
      const result = await fetch(url, {
        retryDelay: 3000,
        retryOn: function (attempt, error, response) {
          if (error !== null || response.status >= 400) {
            console.log(`retrying, attempt number ${attempt + 1}`);

            if (attempt === 1) {
              return false;
            }
            return true;
          }
        },
      });

      if (result.status !== 200) {
        throw result;
      }
      const page = await result.text();

      const container = document.createElement("div");
      container.innerHTML = page;
      this.page = container;

      return this.page;
    } catch (e) {
      console.error("Fetch error", e);
      return false;
    }
  }

  getEmail() {
    if (!this.page) {
      throw new Error("Masterfile Page does not exist");
    }

    const emailInput = this.page.querySelector('input[name="email"]');
    if (!emailInput) {
      return null;
    }

    return emailInput.value;
  }

  /**
   * Returns an array of phone numbers
   * @return []
   */
  getPhoneNumbers() {
    if (!this.page) {
      throw new Error("Masterfile Page does not exist");
    }

    const homePhone = this.page.querySelector('input[name="phone"]');
    const workPhone = this.page.querySelector('input[name="phone2"]');
    const cellPhone = this.page.querySelector('input[name="demo_cell"]');

    return [
      {
        type: "home",
        phone: homePhone && homePhone.value,
      },
      {
        type: "work",
        phone: workPhone && workPhone.value,
      },
      {
        type: "cell",
        phone: cellPhone && cellPhone.value,
      },
    ];
  }
}
