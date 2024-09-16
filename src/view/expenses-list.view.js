import { categoryController } from "../controller/category.controller.js";
import { expenseController } from "../controller/expense.controller.js";
import { ButtonComponent } from "./components/button.js";
import { ExpenseComponent } from "./components/expense.js";
import { HeaderComponent } from "./components/header.js";

class ExpensesView {
  constructor(expenseController, categoryController) {
    this.expenseController = expenseController;
    this.categoryController = categoryController;
  }

  render() {
    const expenses = this.expenseController.getExpenses();
    const categories = this.categoryController.getCategories();
    const view = document.createElement("div");
    view.classList.add("expense-page");
    const contentBody = document.createElement("section");
    contentBody.classList.add("secondary-content");

    const dateSelectorForm = document.createElement("form");
    dateSelectorForm.classList.add("date-selector");
    dateSelectorForm.innerHTML = `
      <div class="date-selector__range">
          <div class="date-selector__range-input">
            <label for="start-date">Start Date</label>
            <input type="date" name="start-date" id="start-date" value="2022-02-22" />
           </div>
          <div class="date-selector__range-input">
            <label for="end-date">End Date</label>
            <input type="date" name="end-date" id="end-date" value="2022-02-22" />
          </div>
        </div>        
        <div class="date-selector__button">
          <button class="btn-search-date">Buscar</button>
        </div>  
    `;

    const expensesHistoryDiv = document.createElement("div");
    expensesHistoryDiv.classList.add("expenses__history");
    expensesHistoryDiv.innerHTML = `
    <div class="expenses__header">
      <h3>Expenses History</h3>
      <div class="expenses__actions">          
        <div class="expense__actions-filters">
          <button class="button__show" id="button_filter">
            <i class="fa-solid fa-filter"></i>
          </button>
        </div>
        <div class="expense__actions-order">
          <button class="button__show" id="button_orderby">
              <i class="fa-solid fa-arrow-down-z-a"></i>
          </button>
        </div>
      </div>
    </div>
    `;
    expensesHistoryDiv.appendChild(ExpenseComponent.renderExpesesList(expenses, categories));

    contentBody.appendChild(dateSelectorForm);
    contentBody.appendChild(expensesHistoryDiv);

    view.appendChild(HeaderComponent.render("Expenses", "#/home"));
    view.appendChild(contentBody);
    view.appendChild(ButtonComponent.addExpense());
    return view;
  }

  afterRender() {}
}

export const expensesView = new ExpensesView(
  expenseController,
  categoryController
);
