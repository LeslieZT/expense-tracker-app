import { categoryController } from "../controller/category.controller.js";
import { expenseController } from "../controller/expense.controller.js";
import { Expense } from "../model/expense.model.js";
import { ExpenseFormComponent } from "./components/expense-form.js";
import { HeaderComponent } from "./components/header.js";

class AddExpenseView {
  constructor(expenseController, categoryController) {
    this.expenseController = expenseController;
    this.categoryController = categoryController;
  }

  render() {
    const categories = this.categoryController.getCategories();
    const view = document.createElement("div");
    view.classList.add("add-expense-page");
    const contentSection = document.createElement("section");
    contentSection.classList.add("secondary-content");

    const contentTitle = document.createElement("div");
    contentTitle.classList.add("add-expense__title");
    contentTitle.innerHTML = "<h3>Record a new expense</h3>"

    contentSection.appendChild(contentTitle)
    contentSection.appendChild(ExpenseFormComponent.renderCreate(categories))

    view.appendChild(HeaderComponent.render("Add Expense", "#/expenses"));
    view.appendChild(contentSection);
    return view;
  }

  afterRender() {
    const form = document.getElementById("add-expense-form");
    const category = document.getElementById("category_select");
    const amount = document.getElementById("amount");
    const date = document.getElementById("date");
    const description = document.getElementById("description");
    const submitbutton = document.querySelector(".btn-form");
  
    submitbutton.addEventListener("click", (event) => {
      event.preventDefault();
      let categoryValue = category.value;
      let amountValue = parseFloat(amount.value);
      let dateValue = new Date(date.value);
      let descriptionValue = description.value;
      const newExpense = new Expense({
        amount: amountValue,
        description: descriptionValue,
        date: dateValue,
        category: categoryValue,
      });
      this.expenseController.createExpense(newExpense);  
      form.reset();
      window.location.hash = '#/expenses';   
    });    
  }
}

export const addExpenseView = new AddExpenseView(
  expenseController,
  categoryController
);
