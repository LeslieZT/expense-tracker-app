export class SelectCategories {
    static render(categories, defaultValue) {
        const selectOptions = document.createElement("select");
        selectOptions.setAttribute("id", "category_select");

        const listCategories = Object.values(categories);
        let options = "";
        listCategories.forEach((category) => {
            if(category.id === defaultValue) {
                options += `<option value="${category.id}" selected>${category.name}</option>`;
                return;
            }
            options += `<option value="${category.id}">${category.name}</option>`;
        });
        
        selectOptions.innerHTML = `
        <option value=""> - Select a category - </option>
        ${options}
        `;
        return selectOptions;
        
    }
}