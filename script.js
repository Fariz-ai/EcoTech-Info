/** @format */

const burger = document.querySelector(".burger");
const topnav = document.querySelector(".topnav");

burger.addEventListener("click", () => {
  topnav.classList.toggle("active");
});
