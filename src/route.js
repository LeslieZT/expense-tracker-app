import { errorView } from "./view/error.view.js";
import { welcomeView } from "./view/welcome.view.js";
import { homeView } from "./view/home.view.js";
import { expensesView } from "./view/expenses-list.view.js";
import { addExpenseView } from "./view/add-expense.view.js";
import { expenseDetailView } from "./view/expense-detail.view.js";
import { categoriesView } from "./view/categories.view.js";
import { addCategoryView } from "./view/add-category.view.js";

const routes = {
  "#/welcome": welcomeView,
  "#/home": homeView,
  "#/expenses": expensesView,
  "#/add-expense": addExpenseView,
  "#/expense-detail": expenseDetailView,
  "#/categories": categoriesView,
  "#/add-category": addCategoryView,
};

export const router = (path) => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  const renderView = routes[path] || errorView;
  root.appendChild(renderView.render());
  renderView.afterRender()
};

export const changeView = (hash) => {
  if (hash === "#/" || hash === "" || hash === "#") {
    return router("#/home");
  }
  return router(hash);
};

export const initRouter = () => {
  window.addEventListener("load", changeView(window.location.hash));
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};
