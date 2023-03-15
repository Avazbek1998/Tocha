const headerRight = document.querySelector(".header-right");
const btns = document.querySelector(".btns");
const header = document.querySelector("header");
const body = document.querySelector("body");
const menu = document.querySelector(".menu-button");
const spanTop = document.querySelector(".span-of-menu-top");
const spanCenter = document.querySelector(".span-of-menu-center");
const spanBottom = document.querySelector(".span-of-menu-bottom");

menu.addEventListener("click", function () {
  // headerRight.classList.toggle("active");
  btns.classList.toggle("active");

  spanTop.classList.toggle("active");
  spanCenter.classList.toggle("active");
  spanBottom.classList.toggle("active");
});

// swiper start
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// swiper end

// scrollreveal
const sr = ScrollReveal({
  origin: "top",
  distance: "1px",
  duration: 1500,
  delay: 300,
  reset: true,
});
sr.reveal("main , .tarif-body ", { interval: 100 });
sr.reveal(
  ".about-left , .tarifs-head , .join , .email-items-left , .footer-left",
  { origin: "left" }
);
sr.reveal(".about-right , .reviews , .email-items-right , .footer-right-wrap", {
  origin: "right",
});
sr.reveal(".footer-body-text", { origin: "botton" });
// scrollreveal
