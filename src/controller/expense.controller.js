import { LocalStorageManager } from "../storage/localStorage.js";

class ExpenseController {
  expenses = [];

  constructor(storageManager) {
    this.storage = storageManager;
    this.findAll()
  }

  getExpenses() {
    return this.expenses;
  }

  findAll() {
    this.expenses = this.storage.getItem("expenses") || [];
    return this.expenses;
  }

  createExpense(data) {
    this.expenses.push(data);
    this.storage.setItem("expenses", this.expenses);
  }

  updateExpense(data) {
    this.expenses = this.expenses.map((ele) => {
        if(ele.id === data.id) {
            return data
        }
        return ele
    })
    this.storage.setItem("expenses", this.expenses);
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter( (ele) => ele.id !== id  )
    this.storage.setItem("expenses", this.expenses);
  }

  findOne(id) {
    console.log(this.expenses, id)
    const expense = this.expenses.find((ele) => ele.id === id);
    return expense
  }

  getTotalExpenses() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0)
  }
}

const storage = new LocalStorageManager()
export const expenseController = new ExpenseController(storage)

