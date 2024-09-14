import { LocalStorageManager } from "../storage/localStorage.js"
import { CATEGORIES } from "./categories.js";
import { expensesMock } from "./expenses.js";

export const loadData = () => {
    const storage = new LocalStorageManager();

    // let categoriesData = storage.getItem("categories");
    // if (!categoriesData) {
        storage.setItem("categories", CATEGORIES)
    // }

    // TODO:  DELETE
    // let expensesData = storage.getItem("expenses");
    storage.setItem("expenses", expensesMock)
        
}