// Day 0 JS: greeting, copy email, footer year

"use strict";

const greeting = document.querySelector(".greeting");
const emailSpan = document.querySelector(".email-span");
const emailBtn = document.querySelector(".email-btn");
const copied = document.querySelector(".copied");
const address = "contact@alexuscarter.com";
const now = new Date();
const hours = now.getHours();
let resetTimer;

if (hours < 12) {
  greeting.textContent = "good morning";
} else if (hours >= 12 && hours < 18) {
  greeting.textContent = "good afternoon";
} else if (hours >= 18) {
  greeting.textContent = "good evening";
}

emailBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(address)
    .then(() => {
      copied.classList.add("is-visible");
      emailSpan.style.visibility = "hidden";

      clearTimeout(resetTimer); // so rapid clicks don't stack timers
      resetTimer = setTimeout(() => {
        copied.classList.remove("is-visible");
        emailSpan.style.visibility = "visible";
      }, 2000);
    })
    .catch((err) => console.error("Copy failed:", err));
});

document.querySelector(".year").textContent = new Date().getFullYear();
