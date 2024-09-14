export class Expense {
  constructor(params) {
    const { amount, description, date, category } = params;
    this.id = crypto.randomUUID();
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.category = category;
  }
}
