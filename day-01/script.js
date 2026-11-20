"use strict";

const dot = document.querySelector(".dot");
const half = dot.offsetWidth / 2;
window.addEventListener("mousemove", (event) => {
  dot.style.transform = `translate(${event.clientX - half}px, ${event.clientY - half}px)`;
});
