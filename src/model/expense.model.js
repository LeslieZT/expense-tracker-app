export class Expense {
  constructor(params) {
    const { amount, description, date, category, id } = params;
    this.id = id ?? crypto.randomUUID();
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.category = category;
  }
}
