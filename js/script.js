const openMenuBtn = document.querySelector("#open-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const closeMenuBtn = document.querySelector("#close-menu");
const body = document.querySelector("body");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.setAttribute("class", "mobile-menu");
  body.style.backdropFilter = "brightness(70%)";
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.setAttribute("class", "hidden");
  body.style.backdropFilter = "none";
});
