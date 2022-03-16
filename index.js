"use strict";

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

const navItems = menu.querySelectorAll("li");

function changeActiveClass() {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
}

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveClass();
    link.classList.add("active");
  });
});

const skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach((skill) => {
  const head = skill.querySelector(".head");
  console.log("head done");
  const items = skill.querySelector(".items");
  console.log("items done");
  head.addEventListener("click", () => {
    items.classList.toggle("hide-items");
    console.log("toggllee");
  });
});
