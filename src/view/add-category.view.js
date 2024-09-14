class AddCategoryView {
  render() {
    const view = document.createElement("div");
    view.innerHTML = "<h1>Add Category</h1>";
    return view;
  }
}

export const addCategoryView = new AddCategoryView()