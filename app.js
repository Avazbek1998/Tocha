const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu__burger");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
