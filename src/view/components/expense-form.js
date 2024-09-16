import { toDateTimeLocalString } from "../../utils/util-date.js";
import { SelectCategories } from "./selectCategories.js";

export class ExpenseFormComponent {
  static renderCreate(categories) {
    const form = document.createElement("form");
    form.classList.add("add-expense__form", "form-content");
    form.setAttribute("id", "add-expense-form")
    form.appendChild(this.categoryGroup(categories));
    form.appendChild(this.amountGroup());
    form.appendChild(this.dateGroup());
    form.appendChild(this.descriptionGroup())
    form.appendChild(this.submitButtonGroup("Save"))
    return form;
  }

  static renderDetail(categories, data) {
    const form = document.createElement("form");
    form.classList.add("edit-expense__form", "form-content");
    form.setAttribute("id", "edit-expense__form")
    form.setAttribute("data-id", data.id);
   
    const categoryGroup = this.categoryGroup(categories, data.category)
    const amountGroup = this.amountGroup(data.amount)
    const dateGroup = this.dateGroup(toDateTimeLocalString(new Date(data.date)))
    const descriptionGroup = this.descriptionGroup(data.description)
    const btnSubmit = this.submitButtonGroup("update")

    categoryGroup.querySelector("#category_select").setAttribute("disabled", "disabled")
    amountGroup.querySelector("#amount").setAttribute("disabled", "disabled")
    dateGroup.querySelector("#date").setAttribute("disabled", "disabled")
    descriptionGroup.querySelector("#description").setAttribute("disabled", "disabled")
    descriptionGroup.querySelector("#clearDescription").style.visibility = "hidden"
    amountGroup.querySelector("#clearAmount").style.visibility = "hidden"
    btnSubmit.querySelector("#btn-form-update").style.visibility = "hidden"

    form.appendChild(categoryGroup);
    form.appendChild(amountGroup);
    form.appendChild(dateGroup);
    form.appendChild(descriptionGroup)    
    form.appendChild(btnSubmit)
    return form
  }

  static categoryGroup(categories, defaultValue) {
    const group = document.createElement("form");
    group.classList.add("form-group");
    const label = document.createElement("label");
    label.htmlFor = "category_select";
    label.textContent = "Category";

    group.appendChild(label);
    group.appendChild(SelectCategories.render(categories, defaultValue));
    return group;
  }

  static amountGroup(value) {
    const group = document.createElement("form");
    group.classList.add("form-group");
    group.innerHTML = `
        <label for="amount">Amount</label>
        <div class="input_clear_group">
          <input
            name="amount"
            type="number"
            id="amount"
            class="form-control"
            placeholder="Enter amount"
            aria-label="amount"
          />
          <button type="button" id="clearAmount" class="btn-clear">Clear</button>
        </div>
    `;
    const input = group.querySelector("#amount");
    if (value !== undefined && value !== null) {
      input.value = value;
    }
    const clearAmountButton = group.querySelector("#clearAmount");
    clearAmountButton.addEventListener("click", () => {
        input.value = null
    })
    return group;
  }

  static dateGroup(value) {
    const group = document.createElement("div");
    group.classList.add("form-group");
    group.innerHTML = `
        <label for="date">Date</label>
        <input
          name="date"
          type="datetime-local"
          id="date"
          class="form-control"
          aria-label="date"
        />
    `;
    const input = group.querySelector("#date");
    if (value !== undefined && value !== null) {
      input.value = value;
    }
    return group;
  }

  static descriptionGroup(value) {
    const group = document.createElement("div");
    group.classList.add("form-group");
    group.innerHTML = `
        <label for="description">Description</label>
        <div class="input_clear_group">
          <textarea
            name="description"
            id="description"
            class="form-control"
            rows="4"
            placeholder="Enter description"
            aria-label="description"
          ></textarea>
          <button type="button" id="clearDescription" class="btn-clear">Clear</button>
        </div>
    `;
    const textarea = group.querySelector("#description");
    if (value !== undefined && value !== null) {
      textarea.value = value;
    }

    const clearDescriptionButton = group.querySelector("#clearDescription");
    clearDescriptionButton.addEventListener("click", () => {
        textarea.value = null
    })
    return group;
  }

  static submitButtonGroup(text) {
    const group = document.createElement("div");
    group.classList.add("form-group");
    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("btn-form");
    button.setAttribute("id", `btn-form-${text}`)
    button.textContent = text;
    group.appendChild(button);
    return group;
}

}
