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

const render = () => {
  cards.forEach((card) => {
    const data = plans[card.dataset.plan];
    card.querySelector(".card-name").textContent = data.name;
    card.querySelector(".card-description").textContent = data.description;
    card.querySelector(".card-amount").textContent = `$${data.monthly}`;
    card.querySelector(".card-period").textContent = "/month";
    card.querySelector(".card-billing-note").textContent = "Billed monthly";
    card.querySelector("button").textContent = `Choose ${data.name}`;

    card.querySelectorAll(".card-feature-label").forEach((label, index) => {
      label.textContent = data.features[index];
    });
  });
};

render();
