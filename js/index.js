const mobileBar = document.querySelector(".mobile-nav");
const mobileDropdown = document.querySelector(".mobileNav");
const hideBar = document.querySelector(".mobile-nav");
const showCloseNav = document.querySelector(".close-nav");

mobileBar.addEventListener("click", function () {
  mobileDropdown.classList.add("mobile-dropdown");
  hideBar.classList.add("hide-bar");
  showCloseNav.classList.add("display-close-nav");
});

showCloseNav.addEventListener("click", function () {
  mobileDropdown.classList.remove("mobile-dropdown");
  showCloseNav.classList.remove("display-close-nav");
  hideBar.classList.remove("hide-bar");
});
