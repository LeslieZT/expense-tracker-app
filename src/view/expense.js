import { formatCustomDate } from "../utils/util-date.js";

export class ExpenseComponent {
  
  static renderExpenseCard(expense, category) {
    const card = document.createElement("div");
    card.classList.add("expense-item");
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
    return card;
  }

  static renderExpesesList(expenses, categories ) {
    const expensesHistoryDiv = document.createElement("div");
    expensesHistoryDiv.classList.add("expenses__history");
    expensesHistoryDiv.innerHTML = `
    <div class="expenses__header">
        <h3>Expenses History</h3>
        <a href="#/expenses" class="expenses__see-all">See all</a>
    </div>
    `;

    const expensesListDiv = document.createElement("div");
    expensesListDiv.classList.add("expenses__list");
    expenses.forEach((expense) => {
      let category = categories[expense.category];
      expensesListDiv.appendChild(this.renderExpenseCard(expense, category));
    });
    expensesHistoryDiv.appendChild(expensesListDiv);
    return expensesHistoryDiv;
  }


}
