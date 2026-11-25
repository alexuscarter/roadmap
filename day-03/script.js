"use strict";

const messageInput = document.querySelector("#message");
const messageCount = document.querySelector("#message-count");
const emailInput = document.querySelector("#email");
const form = document.querySelector("#contact-form");

let characterCount = 0;

messageInput.addEventListener("input", () => {
  const characters = messageInput.value;
  characterCount = characters.length;
  const maxCount = messageInput.dataset.max;
  messageCount.textContent = `${characterCount} / ${maxCount}`;

  messageCount.classList.toggle("is-over", characterCount > maxCount);
});

function setError(fieldId, message) {
  const control = document.querySelector(`#${fieldId}`);
  const error = document.querySelector(`#${fieldId}-error`);

  error.textContent = message;
  control.setAttribute("aria-invalid", message !== "");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const topic = formData.get("topic");
  const message = formData.get("message").trim();

  setError("name", name === "" ? "Enter your name" : "");
  setError(
    "email",
    emailInput.validity.valid ? "" : "Enter an email like name@example.com",
  );
  setError("topic", topic ? "" : "Choose a topic");

  setError(
    "message",
    message.length === 0
      ? "Tell us about your project"
      : message.length > 300
        ? "Keep it under 300 characters"
        : "",
  );

  const invalid = document.querySelector('[aria-invalid="true"]');

  if (invalid) {
    invalid.focus();
  } else {
    form.hidden = true;
    document.querySelector("#form-success").hidden = false;
    document.querySelector("#form-success-text").textContent =
      `Thanks, ${name}. We'll reply to ${email} within two working days.`;
  }
});
