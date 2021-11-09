class Encounter {
  static getCaseNote() {
    const element = document.getElementById("caseNote_note0");
    return element ? element : null;
  }

  static addToCaseNote(text) {
    const caseNote = Encounter.getCaseNote();
    if (!caseNote) return;
    caseNote.value += text;
  }
}

export default Encounter;
