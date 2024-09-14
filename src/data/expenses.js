import { Expense } from "../model/expense.model.js";
import {
  food,
  house,
  miscellaneous,
  services,
  shopping,
  transportation,
} from "./categories.js";

const rentExpense = new Expense({
  amount: 1200,
  description: "Monthly rent payment",
  date: new Date("2024-09-01"),
  category: house.id,
});

const groceryExpense = new Expense({
  amount: 200,
  description: "Weekly groceries",
  date: new Date("2024-09-03"),
  category: food.id,
});

const utilityBillExpense = new Expense({
  amount: 100,
  description: "Electricity bill",
  date: new Date("2024-09-05"),
  category: services.id,
});

const clothingExpense = new Expense({
  amount: 150,
  description: "New clothes shopping",
  date: new Date("2024-09-10"),
  category: shopping.id,
});

const fuelExpense = new Expense({
  amount: 60,
  description: "Fuel for car",
  date: new Date("2024-09-12"),
  category: transportation.id,
});

const randomExpense = new Expense({
  amount: 30,
  description: "Coffee and snacks",
  date: new Date("2024-09-13"),
  category: miscellaneous.id,
});

export const expensesMock = [
  rentExpense,
  groceryExpense,
  utilityBillExpense,
  clothingExpense,
  fuelExpense,
  randomExpense,
];
