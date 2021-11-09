const menu = document.querySelector(".nav-elements2");
const menuItems = document.querySelectorAll(".nav-item2");
const hamburger = document.querySelector(".ham-menu");
const menuIcon = document.querySelector(".ham-icon");
const closeIcon = document.querySelector(".close-icon");

function menuToggle() {
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

hamburger.addEventListener("click", menuToggle);

menuItems.forEach(function (menuItems) {
  menuItems.addEventListener("click", menuToggle);
});
