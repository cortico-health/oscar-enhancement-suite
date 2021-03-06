import { getOrigin, getProvider } from "../../modules/Utils/Utils";

/**
 * Tries to represent the masterfile in oscar.
 */
export class Masterfile {
  apptTD = null;
  url = null;
  page = null;

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
      const result = await fetch(url);
      const page = await result.text();
      this.page = page;
      return this.page;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  getEmail() {
    if (!this.page) {
      throw new Error("Masterfile Page does not exist");
    }
  }
}
