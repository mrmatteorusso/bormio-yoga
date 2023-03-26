const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const toggle = document.querySelector(".toggle-icon");
const closeIcon = document.querySelector(".close-menu");
const menuIcon = document.querySelector(".three-line-menu");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

function sayHi() {
  console.log("blur");
  alert("hi");
}

function hideMenu(e) {
  if (
    !menu.contains(e.target) &&
    !toggle.contains(e.target) &&
    !closeIcon.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    toggleMenu();
  }
}

toggle.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

window.addEventListener("click", hideMenu);
