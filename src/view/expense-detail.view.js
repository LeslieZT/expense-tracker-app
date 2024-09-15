import { HeaderComponent } from "./components/header.js";
import { ExpenseFormComponent } from "./components/expense-form.js";
import { expenseController } from "../controller/expense.controller.js";
import { categoryController } from "../controller/category.controller.js";
import { Expense } from "../model/expense.model.js";

class ExpenseDetailView {
  constructor(expenseController, categoryController) {
    this.expenseController = expenseController;
    this.categoryController = categoryController;
  }

  render(id) {
    const data = this.expenseController.findOne(id);
    const categories = this.categoryController.getCategories();

    const view = document.createElement("div");
    view.classList.add("expense-detail-page");
    const contentSection = document.createElement("section");
    contentSection.classList.add("secondary-content");

    const actions = document.createElement("div");
    actions.classList.add("expense-details__actions", "expenses__actions");
    actions.innerHTML = `
      <div class="expense__actions-filters">
        <button class="button__show" id="button-edit-expense">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        </div>
      <div class="expense__actions-order">
        <button class="button__show" id="button-delete-expense">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

    const form = ExpenseFormComponent.renderDetail(categories, data);

    contentSection.appendChild(actions);
    contentSection.appendChild(form);

    view.appendChild(HeaderComponent.render("Expense Detail", "#/expenses"));
    view.appendChild(contentSection);

    return view;
  }

  afterRender() {
    const btnEdit = document.getElementById("button-edit-expense");
    const btnDelete = document.getElementById("button-delete-expense");

    const form = document.getElementById("edit-expense__form");
    const idExpense = form.dataset.id;

    const category = document.getElementById("category_select");
    const amount = document.getElementById("amount");
    const date = document.getElementById("date");
    const description = document.getElementById("description");

    btnEdit.addEventListener("click", () => {
      category.removeAttribute("disabled", "disabled");
      amount.removeAttribute("disabled", "disabled");
      date.removeAttribute("disabled", "disabled");
      description.removeAttribute("disabled", "disabled");

      document.getElementById("clearDescription").style.visibility = "visible";
      document.getElementById("clearAmount").style.visibility = "visible";
      document.getElementById("btn-form-update").style.visibility = "visible";
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const categoryValue = category.value;
      const amountValue = parseFloat(amount.value);
      const dateValue = new Date(date.value);
      const descriptionValue = description.value;

      const expense = new Expense({
        id: idExpense,
        amount: amountValue,
        description: descriptionValue,
        date: dateValue,
        category: categoryValue,
      });
      this.expenseController.updateExpense(expense);

      category.setAttribute("disabled", "disabled");
      amount.setAttribute("disabled", "disabled");
      date.setAttribute("disabled", "disabled");
      description.setAttribute("disabled", "disabled");

      document.getElementById("clearDescription").style.visibility = "hidden";
      document.getElementById("clearAmount").style.visibility = "hidden";
      document.getElementById("btn-form-update").style.visibility = "hidden";
    });

    btnDelete.addEventListener("click", () => {
      this.expenseController.deleteExpense(idExpense)
      window.location.hash = "#/expenses"
    })
  }
}
export const expenseDetailView = new ExpenseDetailView(
  expenseController,
  categoryController
);
