import "./Ellipsis.css";

export const Ellipsis = () => {
  const numDots = 3;
  const container = document.createElement("div");
  container.classList.add("ellip-dot-container");

  const wrapper = document.createElement("div");
  wrapper.classList.add("ellip-dot-wrapper");

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("ellip-dot");
    container.appendChild(dot);
  }

  wrapper.appendChild(container);
  return wrapper;
};
