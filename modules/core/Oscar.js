import { debounce } from "../Utils/Utils";
import { getOrigin, getNamespace } from "../Utils/Utils";
export class Oscar {
  hostname = null;
  route = null;
  constructor(
    hostname = window.location.hostname,
    route = "" + window.location
  ) {
    this.hostname = hostname;
    this.route = route;
    if (this.isJuno()) {
      // Juno already has a sticky primary navbar. Lift it to preven collisions with Cortico UI.
      const top_menu = document.getElementById("firstMenu");
      if (top_menu) top_menu.parentNode.parentNode.parentNode.zIndex = 1;
    }
  }

  isJuno() {
    const isJunoHost = this.hostname.indexOf(".junoemr.com") !== -1;
    const containsJunoLink =
      document.querySelectorAll("a#helpLink").length > 0 &&
      document
        .querySelectorAll("a#helpLink")[0]
        .outerHTML.indexOf("help.junoemr.com") !== -1;

    return isJunoHost || containsJunoLink;
  }

  // disable sticky headers on WELL Oscar (KAI or Oscar Go), because they have
  // implemented their own sticky headers
  isOscarGoHost() {
    return this.hostname.indexOf(".oscargo.com") !== -1;
  }

  isKaiOscarHost() {
    return this.hostname.indexOf(".kai-oscar.com") !== -1;
  }

  // some clinics use a local network IP address to access oscar inside the clinic
  // in these cases, we can't rely on the hostname but have to look for specific elements instead
  // this may be less reliable, so we still prefer the hostname check
  containsKaiBar() {
    return document.querySelectorAll("div.KaiBar").length !== 0;
  }

  isSchedulePage() {
    return this.route.indexOf("/provider/providercontrol.jsp") > -1;
  }

  isEncounterPage() {
    console.log(this.route);
    return (
      this.route.indexOf("/casemgmt/forward.jsp") > -1 ||
      this.route.indexOf("/oscarEncounter/IncomingEncounter") > -1
    );
  }

  isLabPage() {
    console.log(this.route);
    return this.route.indexOf("labDisplay.jsp") > -1;
  }

  isDocumentPage() {
    return this.route.indexOf("dms/documentReport.jsp") > -1;
  }

  isInboxDocument() {
    return this.route.indexOf("dms/showDocument.jsp") > -1;
  }

  containsOscarGoOceanScript() {
    return (
      document.querySelectorAll(
        'script[src="/oscar/js/custom/ocean/global.js"]'
      ).length !== 0
    );
  }

  // sticky headers for doctor schedule page
  updateDoctorHeadings() {
    const ifv = document.querySelectorAll(
      "tbody>tr:first-child>td.infirmaryView"
    );
    if (window.scrollY > 50) {
      ifv.forEach((view) => {
        view.style.position = "sticky";
        view.style.zIndex = 1;
        view.style.marginLeft = "unset";

        if (this.isJuno()) {
          // for juno, position the sticky doctor headers under the sticky top menu
          view.style.top = "18px";
        }
      });
    } else {
      ifv.forEach(function (view) {
        view.style.position = "static";
      });
    }
  }
}
