"use strict";

let billAmount = 0;
let tipPercent = 15;
let numberOfPeople = 1;

const billInput = document.querySelector("#bill");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");
const peopleInput = document.querySelector("#people");
const peopleError = document.querySelector("#people-error");
const tipButtons = document.querySelectorAll(".tip-button");
const customTipInput = document.querySelector("#custom-tip");
const button15 = document.querySelector("[data-tip='15']");

const calculate = () => {
  // 1. guard first: can't split between 0 people
  if (numberOfPeople <= 0) {
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
  } else {
    // 2. safe to divide now
    const totalTip = billAmount * (tipPercent / 100);
    const tipPerPerson = totalTip / numberOfPeople;
    const totalPerPerson = (billAmount + totalTip) / numberOfPeople;

    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
};
////////////////////////////////////////////////////
// Event listeners

peopleInput.addEventListener("input", () => {
  numberOfPeople = Number(peopleInput.value);

  // true when people is 0 or less
  const isInvalid = numberOfPeople <= 0;

  peopleError.textContent = isInvalid ? "Can't be zero" : "";
  peopleInput.setAttribute("aria-invalid", isInvalid);

  calculate();
});

billInput.addEventListener("input", () => {
  billAmount = Number(billInput.value);

  calculate();
});

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener("click", () => {
    tipButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", "false");
    });

    tipBtn.setAttribute("aria-pressed", "true");
    tipPercent = Number(tipBtn.dataset.tip);
    customTipInput.value = "";
    calculate();
  });
});

customTipInput.addEventListener("input", () => {
  if (customTipInput.value === "") {
    tipPercent = 15;
    button15.setAttribute("aria-pressed", "true");
  } else {
    tipPercent = Number(customTipInput.value);
    tipButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", "false");
    });

    calculate();
  }
});

/*




*/
