let toggleMenu = document.querySelector(".main-header__toggle");
let mainNav = document.querySelector(".main-nav");

toggleMenu.classList.remove("main-header__toggle--nojs");
mainNav.classList.remove("main-nav--nojs");

toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("main-header__toggle--closed");
  mainNav.classList.toggle("main-nav--opened");
});
