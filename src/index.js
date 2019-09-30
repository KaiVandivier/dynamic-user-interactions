import "./styles.css";

const showMenuItems = function showMenuItems(menu) {
  const menuItems = menu.querySelector(".menu-items");
  menuItems.classList.toggle("hidden");
};

const setUpDropDownMenu = function setUpDropDownMenu(menu) {
  const menuButton = menu.querySelector("button.menu-button");
  menuButton.addEventListener("click", () => showMenuItems(menu));
  console.log("got here");
};

const navMenu = document.getElementById("nav-menu");
setUpDropDownMenu(navMenu);

const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuCloseButton = mobileMenu.querySelector(".close-button");

mobileMenuButton.addEventListener("click", function() {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("opening");
  } else {
    mobileMenu.classList.add("closing");
  }
});

mobileMenu.addEventListener("animationend", function(e) {
  console.log(e);
  if (this.classList.contains("closing")) this.classList.add("hidden");
  if (e.animationName == "menuFrames")
    this.classList.remove("opening", "closing");
  // this.classList.toggle("hidden");
});

mobileMenuCloseButton.addEventListener("click", function() {
  mobileMenu.classList.add("closing");
});
