const menu = document.querySelector(".nav-elements");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector(".ham-menu");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".ham-icon");

function toggleMenu() {
    if (menu.classList.contains("menuAppear")) {
        menu.classList.remove("menuAppear");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("menuAppear");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItems) {
        menuItems.addEventListener("click", toggleMenu);
    }
)