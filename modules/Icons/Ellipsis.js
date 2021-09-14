import { htmlToElement } from "../Utils/Utils";
import "./Ellipsis.css";

export const Ellipsis = () => {
  return htmlToElement(`
    <div class="ellip-dot-container">
      <div class="ellip-dot"></div>
      <div class="ellip-dot"></div>
      <div class="ellip-dot"></div>
    </div>
  `)
};
