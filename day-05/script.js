"use strict";

let expenses = [];
let currentCategory = "All";
const shownTotal = document.querySelector(".shown-total");
const overallTotal = document.querySelector("#overall-total");
const expenseForm = document.querySelector("#expense-form");
const description = document.querySelector("#description");
const amount = document.querySelector("#amount");
const category = document.querySelector("#category");
const expenseList = document.querySelector("#expense-list");
const emptyState = document.querySelector("#empty-state");

/*


  */

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const expenseItem = {
    description: description.value,
    amount: Number(amount.value),
    category: category.value,
  };
  expenses.push(expenseItem);
  expenseForm.reset();
  render();
});

const render = () => {
  if (expenses.length > 0) {
    emptyState.hidden = true;
  } else {
    emptyState.hidden = false;
  }

  const elements = expenses.map((item) => {
    return `
    <li class="expense">
      <div class="expense-text">
        <p class="expense-name">${item.description}</p>
        <span class="expense-tag">${item.category}</span>
      </div>
      <p class="expense-amount">$${item.amount.toFixed(2)}</p>
    </li>`;
  });
  expenseList.innerHTML = elements.join("");

  const total = expenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  shownTotal.textContent = `$${total.toFixed(2)}`;
  overallTotal.textContent = `$${total.toFixed(2)}`;
};

render();

// const categoryTotals = expenses.reduce((totals, item) => {
//   totals[] = totals[] + ___;
//   return ___;
// }, { ___ });
