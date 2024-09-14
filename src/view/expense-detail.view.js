class ExpenseDetailView {
  render () {
    const view = document.createElement("div");
    view.innerHTML = "<h1>Expense Detail</h1>";
    return view;
  }
};
export const expenseDetailView = new ExpenseDetailView()