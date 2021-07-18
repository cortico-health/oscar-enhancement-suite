import corticoIcon from "../../resources/icons/96x96.png";

const image = document.createElement("img");
image.setAttribute("src", corticoIcon);
image.setAttribute("alt", "Cortico");

export const CorticoIcon = ({ attrs }) => {
  const clone = image.cloneNode();
  for (let prop in attrs) {
    clone.setAttribute(prop, attrs[prop]);
  }
  return clone;
};
