import { formatCustomDate } from "../../utils/util-date.js";

export class ExpenseComponent {
  
  static renderExpenseCard(expense, category) {
    const card = document.createElement("div");
    card.classList.add("expense-item");
    card.setAttribute("data-id", expense.id)
    card.innerHTML = `
        <div class="expense-item__details">
          <i class="${category.icon} expense-item__icon--${category.color}"></i>
          <div class="expense-item__info">
            <p class="expense-item__info-category">${category.name}</p>
            <p class="expense-item__info-description">${expense.description.slice(0,15)}...</p>
          </div>
        </div>
        <div class="expense-item__summary">
          <p class="expense-item__summary-amount">- $${expense.amount}</p>
          <p class="expense-item__summary-time">${formatCustomDate(
            new Date(expense.date)
          )}</p>
        </div>
    `;

    card.addEventListener("click", () => {
      window.location.hash = `#/expenses/${expense.id}` ;   
    })
    return card;
  }

  static renderExpesesList(expenses, categories ) {
    const expensesListDiv = document.createElement("div");
    expensesListDiv.classList.add("expenses__list");
    expenses.forEach((expense) => {
      let category = categories[expense.category];
      let card = this.renderExpenseCard(expense, category)
      expensesListDiv.appendChild(card);
    });    
    return expensesListDiv;
  }
}
