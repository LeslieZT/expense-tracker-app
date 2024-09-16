export class Category {
  constructor(params) {
    const { name, color, icon, description, id } = params;
    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.description = description;
  }
}
