export class HeaderComponent {
    static render(title, hash) {
        const component = document.createElement("header");
        component.classList.add("secondary-header")
        component.innerHTML = `
        <a href="${hash}" class= "secondary-header__back">
            <i class="fas fa-chevron-left"></i>
        </a>
        <div class="secondary-header__section">
            <p class="secondary-header__section-title">${title}</p>
        </div>
        <div class="secondary-header__settings">
            <i class="fas fa-sliders-h"></i>
        </div>
        `
        return component
    }
}   