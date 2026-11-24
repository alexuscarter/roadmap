"use strict";

const plans = {
  starter: {
    name: "Starter",
    description: "For a single portfolio or personal site.",
    monthly: 12,
    yearly: 120,
    featured: false,
    features: [
      "1 website",
      "Up to 5 pages",
      "Free SSL certificate",
      "Email support",
    ],
  },
  studio: {
    name: "Studio",
    description: "For freelancers running a few client sites.",
    monthly: 24,
    yearly: 240,
    featured: true,
    features: [
      "5 websites",
      "Unlimited pages",
      "Custom domains",
      "Priority email support",
    ],
  },
  agency: {
    name: "Agency",
    description: "For teams managing many client projects.",
    monthly: 48,
    yearly: 480,
    featured: false,
    features: [
      "Unlimited websites",
      "Client workspaces",
      "Up to 10 team seats",
      "Dedicated support",
    ],
  },
};

let isYearly = false;

const billingToggle = document.querySelector(".billing-toggle");
const cards = document.querySelectorAll(".card");
const planType = document.querySelectorAll(".plan-type");

const render = () => {
  cards.forEach((card) => {
    // this card's data, picked by its data-plan attribute
    const data = plans[card.dataset.plan];
    const badge = card.querySelector(".card-badge");
    const button = card.querySelector(".button");

    // text that never changes with the switch
    card.querySelector(".card-name").textContent = data.name;
    card.querySelector(".card-description").textContent = data.description;
    button.textContent = `Choose ${data.name}`;

    card.querySelectorAll(".card-feature-label").forEach((label, index) => {
      label.textContent = data.features[index];
    });

    // text that changes with the switch: each ternary picks a value
    card.querySelector(".card-amount").textContent = isYearly
      ? `$${data.yearly}`
      : `$${data.monthly}`;
    card.querySelector(".card-period").textContent = isYearly
      ? "/year"
      : "/month";
    card.querySelector(".card-billing-note").textContent = isYearly
      ? "Billed yearly"
      : "Billed monthly";

    // featured look: toggle(name, true) adds the class, false removes it
    card.classList.toggle("is-featured", data.featured);
    badge.classList.toggle("hidden", !data.featured);
    button.classList.toggle("is-primary", data.featured);
    button.classList.toggle("is-secondary", !data.featured);
  });

  planType.forEach((type, index) => {
    const isActive = index === 0 ? !isYearly : isYearly;
    type.classList.toggle("is-active", isActive);
  });
};

billingToggle.addEventListener("change", () => {
  isYearly = billingToggle.checked;

  render();
});

render();
