import { categoryController } from "../controller/category.controller.js";
import { expenseController } from "../controller/expense.controller.js";
import { Expense } from "../model/expense.model.js";
import { changeView } from "../route.js";

class AddExpenseView {
  constructor(expenseController, categoryController) {
    this.expenseController = expenseController;
    this.categoryController = categoryController;
  }

  render() {
    const categories = this.categoryController.getCategories();
    const listCategories = Object.values(categories);
    let selectOptions = "";
    listCategories.forEach((category) => {
      selectOptions += `<option value="${category.id}">${category.name}</option>`;
    });

    const view = document.createElement("div");
    view.innerHTML = `<main class="expense-page">
      <svg
      class="nav_icons back_icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
      />
    </svg>
    <h2 class="Add_expense">Add Expense</h2>
    <svg class="nav_icons options_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
      />
    </svg>
    <div class="add_expense_form">
      <form id="form-add-expense">
        <div class="add_expense_form_options">
          <p>CATEGORY</p>
          <select id="category_select">
            <option value=""> - Select a category - </option>
            <option value="add-new-category">- Add new category -</option>
            ${selectOptions}
          </select>
        </div>
        <div class="add_expense_form_options clear_option">
          <p>AMOUNT</p>
          <input
            type="text"
            id="amount"
            class="add_expense_form_options"
            aria-label="amount"
            placeholder=""
          />
          <button id="clearAmount">
            <span>Clear</span>
          </button>
        </div>

        <div class="add_expense_form_options">
          <p>DATE</p>
          <input class="date" type="date" id="date" aria-label="date" />

          <div class="add_expense_form_options clear_option">
            <p>DESCRIPTION</p>
            <textarea
              name="description"
              id="description"
              aria-expanded="false"
              rows="4"
            >
            </textarea>
            <button id="clearDescription">
              <span>Clear</span>
            </button>
          </div>
        </div>
        <input
          type="submit"
          class="btn-submit"
          value="Save"
          aria-label="save"
        />
      </form>
    </div>
    </main>`;

    return view;
  }

  afterRender() {
    const form = document.getElementById("form-add-expense");
    const category = document.getElementById("category_select");
    const amount = document.getElementById("amount");
    const date = document.getElementById("date");
    const description = document.getElementById("description");
    const submitbutton = document.querySelector(".btn-submit");
    const clearAmountButton = document.getElementById("clearAmount");
    const clearDescriptionButton = document.getElementById("clearDescription");

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
      window.location.hash = "#/expenses";
      changeView("#/expenses");
    });

    category.addEventListener("change", (event) => {
      if (event.target.value === "add-new-category") {
        window.location.hash = "#/add-category";
        changeView("#/add-category");
      }
    });

  }
}

export const addExpenseView = new AddExpenseView(
  expenseController,
  categoryController
);
