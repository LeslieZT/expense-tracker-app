class AddCategoryView {
  render() {
    const view = document.createElement("div");
    view.innerHTML = `<main class="expense-page">
      <a
        class="nav_icons back_icon"
       href= "#/categories"
      >
      <i class="fa-solid fa-chevron-left"></i>
      </a>
      <h2 class="Add_expense">Add Category</h2>
      <svg
        class="nav_icons options_icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
        />
      </svg>
      <div class="add_expense_form">
        <form>
          <div class="add_expense_form_options clear_option">
            <p>CATEGORY</p>
            <input
              type="text"
              id="amount"
              class="add_expense_form_options"
              aria-label="amount"
              placeholder=""
            />
            <button id="clearAmount">
              <span>Clear</span>
            </button>
          </div>

          <div class="add_expense_form_options clear_option">
            <p>DESCRIPTION</p>
            <input
              type="text"
              id="amount"
              class="add_expense_form_options"
              aria-label="amount"
              placeholder=""
            />
          </div>

          <div class="add_expense_form_options">
            <p>COLOR</p>

            <select id="category_select">
                <option value="" style="color: #322f2f;">Select a color</option>
                <option value="red" style="background-color: #F44336; color: #ffffff;">Red</option>
                <option value="crimson" style="background-color: #DC143C; color: #ffffff;">Crimson</option>
                <option value="light-coral" style="background-color: #F08080; color: #ffffff;">Coral</option>
                <option value="salmon" style="background-color: #FA8072; color: #ffffff;">Salmon</option>
                <option value="pink" style="background-color: #E91E63; color: #ffffff;">Pink</option>
                <option value="purple" style="background-color: #9C27B0; color: #ffffff;">Purple</option>
                <option value="deep-purple" style="background-color: #673AB7; color: #ffffff;">Deep Purple</option>
                <option value="turquoise" style="background-color: #40E0D0; color: #ffffff;">Turquoise</option>
                <option value="medium-turquoise" style="background-color: #48D1CC; color: #ffffff;">Medium Turquoise</option>
                <option value="sea-green" style="background-color: #20B2AA; color: #ffffff;">Sea Green</option>
                <option value="royal-blue" style="background-color: #4169E1; color: #ffffff;">Royal Blue</option>
                <option value="blue" style="background-color: #4682B4; color: #ffffff;">Blue</option>
                <option value="cornflower-blue" style="background-color: #6495ED; color: #ffffff;">Cornflower Blue</option>
                <option value="midnight-blue" style="background-color: #191970; color: #ffffff;">Midnight Blue</option>
                <option value="indigo" style="background-color: #3F51B5; color: #ffffff;">Indigo</option>
                <option value="light-blue" style="background-color: #03A9F4; color: #ffffff;">Light Blue</option>
                <option value="cyan" style="background-color: #00BCD4; color: #ffffff;">Cyan</option>
                <option value="teal" style="background-color: #009688; color: #ffffff;">Teal</option>
                <option value="green" style="background-color: #4CAF50; color: #ffffff;">Green</option>
                <option value="lime" style="background-color: #CDDC39; color: #ffffff;">Lime</option>
                <option value="light-green" style="background-color: #8BC34A; color: #ffffff;">Light Green</option>
                <option value="yellow" style="background-color: #FFEB3B; color: #ffffff;">Yellow</option>
                <option value="amber" style="background-color: #FFC107; color: #ffffff;">Amber</option>
                <option value="orange" style="background-color: #e18109; color: #ffffff;">Orange</option>
                <option value="orange-light" style="background-color: #FF9800; color: #ffffff;">Orange Light</option>
                <option value="deep-orange" style="background-color: #FF5722; color: #ffffff;">Deep Orange</option>
                <option value="sienna" style="background-color: #A0522D; color: #ffffff;">Sienna</option>
                <option value="brown" style="background-color: #795548; color: #ffffff;">Brown</option> 
              </select>
          </div>
          <div class="add_expense_form_options icon-selector">
            
            <div class="icon-option" data-icon="fa-solid fa-house" title="House"><i class="fa-solid fa-house"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-user" title="User"><i class="fa-solid fa-user"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-cog" title="Config"><i class="fa-solid fa-cog"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-envelope" title="Mail"><i class="fa-solid fa-envelope"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-bag-shopping" title="Shopping"><i class="fa-solid fa-bag-shopping"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-utensils" title="Food"><i class="fa-solid fa-utensils"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-shopping-star" title="Shopping"><i class="fa-solid fa-star"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-screwdriver-wrench" title="Services"><i class="fa-solid fa-screwdriver-wrench"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-fa-solid fa-bus" title="Transport"><i class="fa-solid fa-bus"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-ellipsis" title="More"><i class="fa-solid fa-ellipsis"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-user-group" title="Group"><i class="fa-solid fa-user-group"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-book" title="Book"><i class="fa-solid fa-book"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-paw" title="Pet"><i class="fa-solid fa-paw"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-film" title="Movies"><i class="fa-solid fa-film"></i></div>
            <div class="icon-option" data-icon="fa-solid fa-file-medical" title="Health"><i class="fa-solid fa-file-medical"></i></div>
           
              </div>
          <input
            type="submit"
            class="btn-submit"
            value="Save"
            aria-label="save"
          />
        </form>
      </div>
    </main>`;
    return view;
  }

  afterRender(){
    
  } 
}

export const addCategoryView = new AddCategoryView()