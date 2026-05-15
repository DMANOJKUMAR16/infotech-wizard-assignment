const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileOverlay = document.querySelector(".mobile-overlay");

menuToggle.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  mobileOverlay.classList.toggle("active");

});

mobileOverlay.addEventListener("click", () => {

  mobileMenu.classList.remove("active");

  mobileOverlay.classList.remove("active");

});