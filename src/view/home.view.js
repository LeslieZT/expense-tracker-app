import { categoryController } from "../controller/category.controller.js";
import { expenseController } from "../controller/expense.controller.js";
import { ExpenseCard } from "./expense-card.view.js";

class HomeView {
  constructor(expenseController, categoryController) {
    this.expenseController = expenseController;
    this.categoryController = categoryController;
  }

  render() {
    const view = document.createElement("div");
    view.classList.add("homepage");
    let viewContent = `  
    <header class="homepage__header">
      <div class="header__info">
        <p class="header__greeting">Welcome</p>
        <p class="header__user-name">Enjelin Morgeana</p>
      </div>
      <div class="header__settings">
        <i class="fas fa-sliders-h"></i>
      </div>
    </header>
    <div class="expenses-month">
        <button class="month-selector__button">
          <i class="fas fa-chevron-left"></i>
        </button>
        <p class="month-selector__label">March 2022</p>
        <button class="month-selector__button">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div> 
    `;
    viewContent += this.renderExpenseTotal();
    viewContent += this.renderListExpeses()
    viewContent +=  `
    <a href="#/add-expense" class="button-add-expense">
      <i class="fas fa-plus"></i>
    </a> 
    `
    view.innerHTML = viewContent;
    return view;
  }

  renderExpenseTotal() {
    const totalExpenses = this.expenseController.getTotalExpenses();
    const view = `
    <div class="expenses-total">
      <p class="expenses-total__title">Total Expenses</p>
      <div class="expenses-total__content">
        <i class="expenses-total__content-icon fas fa-shopping-cart"></i>
        <p class="expenses-total__content-amount">$${totalExpenses}.00</p>
      </div>
    </div>    
    `;
    return view
  }

  renderListExpeses() {
    const expenses = this.expenseController.getExpenses();
    const categories = this.categoryController.getCategories();
    let expensesContent = ''
    expenses.forEach((expense) => {  
        let category = categories[expense.category]      
        expensesContent += ExpenseCard.render(expense, category);
    });
    const view = `
    <div class="expenses__history">
        <div class="expenses__header">
          <h3>Expenses History</h3>
          <a href="#/expenses" class="expenses__see-all">See all</a>
        </div>
        <div class="expenses__list">
          ${expensesContent}
        </div>
    </div>    
    `
    return view
  } 

  afterRender(){
  }

}

export const homeView = new HomeView(expenseController, categoryController);
