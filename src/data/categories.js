import { Category } from "../model/category.model.js";

export const house = new Category({
  name: "House",
  color: "deep-purple",
  icon: "fas fa-home",
  description: "Expenses related to rent, mortgage, or home maintenance.",
});

export const food = new Category({
  name: "Food",
  color: "orange",
  icon: "fas fa-utensils",
  description: "Expenses related to groceries, dining, and food in general.",
});

export const services = new Category({
  name: "Services",
  color: "yellow",
  icon: "fas fa-tools",
  description: "Expenses for utilities, repairs, and household services.",
});

export const shopping = new Category({
  name: "Shopping",
  color: "crimson",
  icon: "fas fa-shopping-bag",
  description:
    "Expenses for clothes, gadgets, and other shopping-related activities.",
});

export const transportation = new Category({
  name: "Transportation",
  color: "indigo",
  icon: "fas fa-bus",
  description:
    "Expenses related to public transport, fuel, and vehicle maintenance.",
});

export const miscellaneous = new Category({
  name: "Miscellaneous",
  color: "green",
  icon: "fas fa-ellipsis-h",
  description: "Miscellaneous expenses that do not fit into other categories.",
});

export const CATEGORIES = {
  [house.id]: house,
  [food.id]: food,
  [services.id]: services,
  [shopping.id]: shopping,
  [transportation.id]: transportation,
  [miscellaneous.id]: miscellaneous,
};
