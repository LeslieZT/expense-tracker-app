import { Category } from "../model/category.model.js";

export const house = new Category({
  id: "5caebe8a-9866-4d30-a848-e0f96d970e5d",
  name: "House",
  color: "deep-purple",
  icon: "fas fa-home",
  description: "Expenses related to rent, mortgage, or home maintenance.",
});

export const food = new Category({
  id: "51d789f4-2de5-4458-9bee-f6d92ad72305",
  name: "Food",
  color: "orange",
  icon: "fas fa-utensils",
  description: "Expenses related to groceries, dining, and food in general.",
});

export const services = new Category({
  id: "380efcd4-8ea8-45a8-bd64-3a3f1463713f",
  name: "Services",
  color: "yellow",
  icon: "fas fa-tools",
  description: "Expenses for utilities, repairs, and household services.",
});

export const shopping = new Category({
  id: "33391092-4e2b-4c52-a8d4-4c6b34fb4c00",
  name: "Shopping",
  color: "crimson",
  icon: "fas fa-shopping-bag",
  description:
    "Expenses for clothes, gadgets, and other shopping-related activities.",
});

export const transportation = new Category({
  id: "b5aff49f-9f2f-49c9-a01c-b530f7995c04",
  name: "Transportation",
  color: "indigo",
  icon: "fas fa-bus",
  description:
    "Expenses related to public transport, fuel, and vehicle maintenance.",
});

export const miscellaneous = new Category({
  id: "fac53037-89b6-4e84-bdda-0734b000c91a",
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
