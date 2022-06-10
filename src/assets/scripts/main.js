const mobileMenu = document.querySelector(".js-mobile-menu");
const hamburgerButton = document.querySelector(".js-hamburger-button");

hamburgerButton.addEventListener("click", () => {
  console.log("clicked");
  console.log(mobileMenu);
  mobileMenu.classList.contains("hidden") ? mobileMenu.classList.remove("hidden") : mobileMenu.classList.add("hidden");
});
