class AddExpenseView {
  render() {
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
      <form>
        <div class="add_expense_form_options">
          <p>CATEGORY</p>
          <select id="category_select">
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="shopping">Shopping</option>
            <option value="services">Services</option>
            <option value="transportation">Transportation</option>
            <option value="miscellaneous">Miscellaneous</option>
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
}


export const addExpenseView = new AddExpenseView()
