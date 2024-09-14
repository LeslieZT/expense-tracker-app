import { categoryController } from "../controller/category.controller.js";
import { expenseController } from "../controller/expense.controller.js";
import { ExpenseCard } from "./expense-card.view.js";

class ExpensesView {
  constructor(expenseController, categoryController) {
    this.expenseController = expenseController;
    this.categoryController = categoryController;
  }

  render() {
    const expenses = this.expenseController.getExpenses();
    const categories = this.categoryController.getCategories();
    const view = document.createElement("div");
    let expensesContent = "";
    expenses.forEach((expense) => {
      const category = categories[expense.category];
      expensesContent += ExpenseCard.render(expense, category);
    });
    const viewContent = `
    <div class="expenses__history">
        <div class="expenses__header">
          <h3>Expenses History</h3>
        </div>
        <div class="expenses__list">
          ${expensesContent}
        </div>
    </div> 
    <a href="#/add-expense" class="button-add-expense">
      <i class="fas fa-plus"></i>
    </a>  
    `;
    view.innerHTML = viewContent;
    return view;
  }

  afterRender(){

  }
}

export const expensesView = new ExpensesView(
  expenseController,
  categoryController
);
