const expensesList = document.querySelector(".expenses__list");

let expenses = JSON.parse(localStorage.getItem("expenses"));
expenses.forEach((expense) =>{
  
  Object.keys(expense).forEach((category)=>{})

  Object.keys(expense).forEach((description)=>{})

  Object.keys(expense).forEach((amount)=>{
    console.log(expense.amount)
  })

  Object.keys(expense).forEach((date)=>{})

function createExpenseCard() {

  const expenseItem = document.createElement("div");
  expenseItem.className = "expense-item";
  expensesList.appendChild(expenseItem);

  const expenseItemDetails = document.createElement("div");
  expenseItemDetails.className = "expense-item__details";
  expenseItemDetails.textContent = "testing";
  expenseItem.appendChild(expenseItemDetails);

  const expenseItemInfo = document.createElement("div");
  expenseItemInfo.className = "expense-item__info";
  expenseItem.appendChild(expenseItemInfo);
  expenseItemDetails.appendChild(expenseItemInfo);

  const categoryText = document.createElement("p");
  categoryText.className = "expense-item__info-category";
  categoryText.textContent = expense.category;
  expenseItemInfo.appendChild(categoryText);

  const descriptionText = document.createElement("p");
  descriptionText.className = "expense-item__description";
  descriptionText.textContent = expense.description;
  expenseItemInfo.appendChild(descriptionText);

  const expenseItemSummary = document.createElement("div");
  expenseItemSummary.className = "expense-item__summary";

  const amountText = document.createElement("p");
  amountText.className = expense.amount;
  expenseItemSummary.appendChild(amountText);

  const summaryTime = document.createElement("p");
  summaryTime.className = "expense-item__summary-time";
  summaryTime.textContent = expense.date;
  expenseItemSummary.appendChild(summaryTime);

  expenseItem.appendChild(expenseItemDetails);
  expenseItem.appendChild(expenseItemSummary);
}
createExpenseCard();

});


