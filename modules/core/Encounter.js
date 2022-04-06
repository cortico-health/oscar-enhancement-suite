import { getOrigin, getNamespace, getDemographicNo } from "../Utils/Utils";
import {
  getEncounterNotes,
  addEncounterNote,
  postCaseManagementEntry,
} from "../Api/Api";

class Encounter {
  static getCaseNote(encounterPage) {
    console.log("Encounter Page", { encounterPage });
    const el = encounterPage || document;
    const element = el.querySelector(`textarea[name="caseNote_note"]`);
    return element ? element : null;
  }

  static addToCaseNote(text) {
    const caseNote = Encounter.getCaseNote();
    if (caseNote) {
      caseNote.value += text;
      return true;
    } else {
      return false;
    }
    /*
    else {
      const demographicNo = getDemographicNo();
      console.log("Demographic No", demographicNo);
      if (demographicNo == null) {
        return Promise.reject("Could not find demographic Number");
      }
      Promise.all([
        postCaseManagementEntry(demographicNo),
        getEncounterNotes(demographicNo),
      ])
        .then((res) => {
          return Promise.all([res[0].text(), res[1].text()]);
        })
        .then((result) => {
          const programId = Encounter.getProgramId(result[0]);
          const note_id = Encounter.getNoteId(result[1]);

          const temp = document.createElement("html");
          temp.innerHTML = result[1];
          let note = Encounter.getCaseNote(temp);

          if (note == null) {
            return new Error("Could not find encounter notes");
          }

          if (programId == null) {
            throw new Error("Could not find program id");
          }

          if (note_id == null) {
            throw new Error("Could not find note id");
          }

          note = note.value;
          return addEncounterNote(
            demographicNo,
            note_id,
            programId,
            note + text
          );
        })
        .then((res) => {
          console.log("Added Response", res);
        });
    }*/
  }

  static getProgramId(caseManagementEntryHtml) {
    const temp = document.createElement("html");
    temp.innerHTML = caseManagementEntryHtml;
    const programNo = temp.querySelector(`input[name="caseNote.program_no"]`);
    const programId = programNo.value;
    return programId;
  }

  static getNoteId(encounterHtml) {
    let note_id = "";
    const temp = encounterHtml.match(/savedNoteId=[0-9]/);
    if (temp) {
      note_id = temp[0].split("=")[1];
    }

    if (!note_id) {
      const temp = document.createElement("html");
      temp.innerHTML = encounterHtml;
      const caseNoteInput = temp.querySelector(
        `textarea[name="caseNote_note"]`
      );

      if (!caseNoteInput) {
        return null;
      }
      const id = caseNoteInput.id;
      note_id = id.replace(/[^0-9]/g, "");
    }

    return note_id;
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
