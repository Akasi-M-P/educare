const mobileBar = document.querySelector(".mobile-nav");
const mobileDropdown = document.querySelector(".mobileNav");

mobileBar.addEventListener("click", function () {
  mobileDropdown.classList.add("mobile-dropdown");
});
