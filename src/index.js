import "./styles.css";
import Cardinal from "./northern-cardinal.jpeg";
import RainbowFlower from "./rainbow-flower.jpg";
import RedDahlia from "./red-dahlia.jpeg";
import Flycatcher from "./scissor-tailed-flycatcher.jpg";

/* Drop-down menu */
const showMenuItems = function showMenuItems(menu) {
  const menuItems = menu.querySelector(".menu-items");
  menuItems.classList.toggle("hidden");
};

const setUpDropDownMenu = function setUpDropDownMenu(menu) {
  const menuButton = menu.querySelector("button.menu-button");
  menuButton.addEventListener("click", () => showMenuItems(menu));
};

const navMenu = document.getElementById("nav-menu");
setUpDropDownMenu(navMenu);

/* Mobile menu */
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
  if (this.classList.contains("closing")) this.classList.add("hidden");
  if (e.animationName == "menuFrames")
    this.classList.remove("opening", "closing");
});

mobileMenuCloseButton.addEventListener("click", function() {
  mobileMenu.classList.add("closing");
});

/* Rotating image gallery */

const carouselContainer = document.getElementById("image-carousel");
const imageContainer = carouselContainer.querySelector(".image-container");
// const image = imageContainer.querySelector("image");
// const indexCircleContainer = carouselContainer.querySelector(".index-circle-container");
// const previousButton = carouselContainer.querySelector("button.previous-button");
// const nextButton = carouselContainer.querySelector("button.next-button");

const images = [Cardinal, RainbowFlower, RedDahlia, Flycatcher].map(src => {
  const newImage = new Image();
  newImage.src = src;
  return newImage;
});
let currentImage = images[0] || null;

//test:
imageContainer.appendChild(currentImage);
console.log(imageContainer);

const updateGalleryIndex = function updateGalleryIndex(currentImageIndex) {
  // query select "index circles" (ICs)
  // iterate through "ICs"
  // if you find data-index === currentImageIndex, add "highlight" class
  // otherwise, remove "highlight" class
};

const nextImage = function nextImage(currentImageIndex, images) {
  // do things
  // const nextImageIndex = currentImageIndex + 1;
  // const nextImage = images[nextImageIndex]
  // display nextImage
  // unhighlight previous "index circle"; highlight next
  // or: "update gallery index"
  return { currentImageIndex: currentImageIndex + 1, images };
};

const previousImage = function previousImage() {
  // do things
};

/* add event listener on "previous" and "next" buttons
previousButton.addEventListener("click", function() {
  previousImage(currentImageIndex, images)
});
nextButton.addEventListener("click", function() {
  nextImage(currentImageIndex, images)
});

*/
