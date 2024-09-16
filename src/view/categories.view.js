class CategoriesView  {
  render () {
    const view = document.createElement("div");
    view.innerHTML = "<h1>Categories</h1>";
    return view;
  }

  afterRender(){}

};

export const categoriesView = new CategoriesView()