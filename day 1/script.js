"use strict";

const dot = document.querySelector(".dot");

window.addEventListener("mousemove", (event) => {
  dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});
