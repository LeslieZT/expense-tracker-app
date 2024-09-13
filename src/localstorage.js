const category = document.getElementById("category_select");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const description = document.getElementById("description");
const submitbutton = document.querySelector(".btn-submit");
const clearAmountButton = document.getElementById("clearAmount");
const clearDescriptionButton = document.getElementById("clearDescription");
class Expense {
  constructor(category, amount, date, description) {
    this.category = category;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }
}

export const addExpense = () => {
  let categoryValue = category.value;
  let amountValue = amount.value;
  let dateValue = date.value;
  let descriptionValue = description.value;
  let newExpense = new Expense(
    categoryValue,
    amountValue,
    dateValue,
    descriptionValue,
  );

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  expenses.push(newExpense);

  localStorage.setItem("expenses", JSON.stringify(expenses));
};

submitbutton.addEventListener("click", (event) => {
    event.preventDefault();
    addExpense();
  });

clearAmountButton.addEventListener("click", (event)=>{
    amount = "";
});

clearDescriptionButton.addEventListener("click", (event)=>{
    description = "";
})