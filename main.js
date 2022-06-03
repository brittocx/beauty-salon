/* =================== TOGGLE HAMBURGUER MENU =================== */

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* =================== HIDE MENU AFTER LINK CLICK =================== */

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* =================== CHANGE HEADER WHEN SCROLL =================== */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

/* =================== SWIPER CAROUSEL=================== */

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: false,
  keyboard: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* =================== SCROLL REVEAL=================== */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials,
     #contact .text, #contact .links,
     footer .brand, footer .social
     `,
  { interval: 100 }
);

/* =================== BACK TO TOP=================== */

const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

/* =================== ACTIVE MENU =================== */
