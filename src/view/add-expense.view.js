class AddExpenseView {
  render() {
    const view = document.createElement("div");
    view.innerHTML = "<h1>Add Expense</h1>";
    return view;
  }
}


export const addExpenseView = new AddExpenseView()
