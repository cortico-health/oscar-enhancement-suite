import "./Modal.css";
import { create } from "../Utils/Utils";

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

    this.modal = create("div", {
      attrs: {
        class: "cortico-modal",
      },
    });

    this.modalContainer = create(
      "div",
      {
        attrs: {
          class: "cortico-modal-container tailwind",
        },
      },
      this.modal
    );

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
