import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

try {
  const result = await fetch("info.txt");
  const text = await result.text();
} catch (err) {
  console.log(err);
}

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const toggle = document.querySelector(".toggle-icon");
const threeLineMenu = document.querySelector(".three-line-menu");
const closeIcon = document.querySelector(".close-menu");

function toggleMenu(e) {
  e.stopPropagation();
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    threeLineMenu.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    threeLineMenu.style.display = "none";
  }
}

function hideMenu(e) {
  if (e.target.classList[0] !== "three-line-menu") {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    threeLineMenu.style.display = "block";
  }
}

document.addEventListener("click", hideMenu);
toggle.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => menuItem.addEventListener("click", toggleMenu));

const navTitle = document.querySelector(".nav-title");

function goHome() {
  //window.open("https://matteorusso.yoga/index.html#home", "_self");
  // window.location.replace("https://matteorusso.yoga/index.html#home");
  location.href = "https://matteorusso.yoga/index.html#home";
}

navTitle.addEventListener("click", goHome);
