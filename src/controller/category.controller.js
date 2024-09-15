import { CATEGORIES } from "../data/categories.js";
import { LocalStorageManager } from "../storage/localStorage.js";

class CategoryController {
  categories = {};

  constructor(storageManager) {
    this.storage = storageManager;
    this.load()
  }

  load() {
    this.storage.setItem("categories", CATEGORIES)
    this.categories = CATEGORIES
  }

  getCategories() {
    return this.categories;
  }

  findAll() {
    this.categories = this.storage.getItem("categories") || {};
    return this.categories;
  }
  createCategory(data) {
    this.categories[data.id] = data;
    this.storage.setItem("categories", this.categories);
  }

  udpateCategory(id, data) {
    this.categories[id] = data;
    this.storage.setItem("categories", this.categories);
  }

  deleteCategory(id) {
    delete this.categories[id];
    this.storage.setItem("categories", this.categories);
  }

  findOne(id) {
    return this.categories[id];
  }

}

const storage = new LocalStorageManager()
export const categoryController = new CategoryController(storage)

