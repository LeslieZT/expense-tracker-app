export class Category {
  constructor(params) {
    const { name, color, icon, description } = params;
    this.id = crypto.randomUUID();
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.description = description;
  }
}
