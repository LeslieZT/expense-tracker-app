class CategoriesView  {
  render () {
    const view = document.createElement("div");
    view.innerHTML = "<h1>Categories</h1>";
    return view;
  }

};

export const categoriesView = new CategoriesView()