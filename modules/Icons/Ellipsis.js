import "./Ellipsis.css";

export const Ellipsis = () => {
  const numDots = 3;
  const container = document.createElement("div");
  container.classList.add("ellip-dot-container");

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("ellip-dot");
    container.appendChild(dot);
  }
  return container;
};
