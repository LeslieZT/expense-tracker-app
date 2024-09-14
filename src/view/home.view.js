import { categoryController } from "../controller/category.controller.js";
import { expenseController } from "../controller/expense.controller.js";
import { ButtonComponent } from "./button.js";
import { ExpenseComponent } from "./expense.js";

class HomeView {
  constructor(expenseController, categoryController) {
    this.expenseController = expenseController;
    this.categoryController = categoryController;
  }

  render() {
    const expenses = this.expenseController.getExpenses();
    const categories = this.categoryController.getCategories();

    const view = document.createElement("div");
    view.classList.add("homepage");

    const homepageHeaderDiv = document.createElement("header");
    homepageHeaderDiv.classList.add("homepage__header");
    homepageHeaderDiv.innerHTML = `  
      <div class="header__info">
        <p class="header__greeting">Welcome</p>
        <p class="header__user-name">Enjelin Morgeana</p>
      </div>
      <div class="header__settings">
        <i class="fas fa-sliders-h"></i>
      </div> 
    `;

    const expenseMonthDiv = document.createElement("div");
    expenseMonthDiv.classList.add("expenses-month")
    expenseMonthDiv.innerHTML = ` 
    <button class="month-selector__button">
          <i class="fas fa-chevron-left"></i>
        </button>
        <p class="month-selector__label">March 2022</p>
        <button class="month-selector__button">
          <i class="fas fa-chevron-right"></i>
        </button>
    `;
    view.appendChild(homepageHeaderDiv);
    view.appendChild(expenseMonthDiv);
    view.appendChild(this.renderExpenseTotal());
    view.appendChild(ExpenseComponent.renderExpesesList(expenses, categories));
    view.appendChild(ButtonComponent.addExpense());
    return view;
  }

  renderExpenseTotal() {
    const totalExpenses = this.expenseController.getTotalExpenses();
    const expenseTotalDiv = document.createElement("div");
    expenseTotalDiv.classList.add("expenses-total");
    expenseTotalDiv.innerHTML = `   
      <p class="expenses-total__title">Total Expenses</p>
      <div class="expenses-total__content">
        <i class="expenses-total__content-icon fas fa-shopping-cart"></i>
        <p class="expenses-total__content-amount">$${totalExpenses}.00</p>
      </div>    
    `;
    return expenseTotalDiv;
  }

  

  afterRender() {}
}

export const homeView = new HomeView(expenseController, categoryController);
