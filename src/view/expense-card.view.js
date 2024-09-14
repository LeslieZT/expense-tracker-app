import { formatCustomDate } from "../utils/util-date.js"

export class ExpenseCard {
    static render(expense, category) {
        return `
          <div class="expense-item expense-item">
            <div class="expense-item__details">
              <i class="${category.icon} expense-item__icon--${category.color}"></i>
              <div class="expense-item__info">
                <p class="expense-item__info-category">${category.name}</p>
                <p class="expense-item__info-description">${expense.description.slice(0, 15)}...</p>
              </div>
            </div>
            <div class="expense-item__summary">
              <p class="expense-item__summary-amount">- $${expense.amount}</p>
              <p class="expense-item__summary-time">${formatCustomDate(new Date(expense.date))}</p>
            </div>
          </div>
        `
  }
}