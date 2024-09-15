export class ButtonComponent {
    static addExpense () {
        const addButton = document.createElement("a");
        addButton.href = "#/add-expense"; 
        addButton.classList.add("button-add-expense"); 
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-plus");
        addButton.appendChild(icon);
        return addButton
    } 
}