export class Appointment {
  element = null;

  constructor(apptTd) {
    this.element = apptTd;
  }

  getEncounterBtnUrl() {
    if (!this.element) {
      return null;
    }

    const encounterBtn = this.element.querySelector(".encounterBtn");

    if (!encounterBtn) {
      return null;
    }

    let clickContent = encounterBtn.attributes.onclick.textContent;
    if (!clickContent) {
      return null;
    }

    clickContent = clickContent.split(",");
    let url = clickContent[2];

    if (!url) {
      return null;
    }

    return url.substring(3).replace(/'/g, "");
  }

  getCurrentProvider() {
    const url = this.getEncounterBtnUrl();
    if (!url) {
      return null;
    }
    const searchParams = new URLSearchParams(url);
    const curProviderNo = searchParams.get("curProviderNo");

    return curProviderNo;
  }

  getAppointmentNo() {
    const url = this.getEncounterBtnUrl();
    if (!url) {
      return null;
    }
    const searchParams = new URLSearchParams(url);
    const appointmentNo = searchParams.get("appointmentNo");

    return appointmentNo;
  }
}
