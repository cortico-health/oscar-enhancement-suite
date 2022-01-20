import { getOrigin, getNamespace } from "../Utils/Utils";

class Encounter {
  static getCaseNote(encounterPage) {
    console.log("Encounter Page", { encounterPage });
    const el = encounterPage || document;
    const element = el.querySelector(`textarea[name="caseNote_note"]`);
    return element ? element : null;
  }

  static addToCaseNote(text) {
    const caseNote = Encounter.getCaseNote();
    if (!caseNote) return;
    caseNote.value += text;
  }

  static getEncounterPage(origin, namespace) {
    const eForm = document.getElementsByTagName("form")[0];
    const eFormSearchParams = new URLSearchParams(eForm.action);
    const demographicNo = eFormSearchParams.get("efmdemographic_no");

    let url = `${getOrigin()}/${getNamespace()}/casemgmt/forward.jsp?demographicNo=${demographicNo}`;
    if (getOrigin().includes("skymedical")) {
      url = `/casemgmt/forward.jsp?demographicNo=${demographicNo}`;
    }
    return fetch(url);
  }
}

export default Encounter;
