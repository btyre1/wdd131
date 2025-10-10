const button = document.getElementById("#menu-button");
button.addEventListener("click", loadMenu);

function loadMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hide");
}
    