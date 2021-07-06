import "./Modal.css";

export class Modal {
  modalContainer = null;
  modal = null;

  constructor() {
    const modalContainer = document.querySelector(".cortico-modal-container");
    const modal = document.querySelector(".cortico-modal");

    if (modalContainer && modal) {
      this.modalContainer = modalContainer;
      this.modal = modal;
      return;
    }

    this.modalContainer = document.createElement("div");
    this.modalContainer.classList.add("cortico-modal-container");
    this.modal = document.createElement("div");
    this.modal.classList.add("cortico-modal");

    this.modalContainer.appendChild(this.modal);
    document.body.prepend(this.modalContainer);

    this.modalContainer.addEventListener("click", (e) => {
      if (e.target.isEqualNode(this.modalContainer)) {
        this.hide();
      }
    });
  }

  setContent(html) {
    this.modal.innerHTML = html;
  }

  hide() {
    this.modalContainer && this.modalContainer.classList.remove("show");
  }

  show() {
    this.modalContainer && this.modalContainer.classList.add("show");
  }
}
