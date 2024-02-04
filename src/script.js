// Toggler 
const ToggleBtn = document.querySelector(".toggle-button");
const Menu = document.querySelector(".dropdown_menu");
const RemoveGlass = document.querySelector(".navbar");


// Function to toggle the menu visibility based on screen size
function toggleMenu() {
    if (window.innerWidth <= 940) {
        Menu.classList.toggle('hidden');
        RemoveGlass.classList.remove("glass");
    } else {
        // If the screen size is larger than 900px, ensure the menu is visible
        Menu.classList.remove('hidden');
    }
}

// Initially hide the menu if the screen size is less than or equal to 900px
toggleMenu();

ToggleBtn.addEventListener("click", () =>{
    Menu.classList.toggle('hidden');
})

