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

  udpateExpense(id, data) {
    this.expensess = this.expensess.map((ele) => {
        if(ele.id === id) {
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
    return this.expenses.find((ele) => ele.id === id);
  }

  getTotalExpenses() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0)
  }
}

const storage = new LocalStorageManager()
export const expenseController = new ExpenseController(storage)

