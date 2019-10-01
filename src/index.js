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
const indexCircleContainer = carouselContainer.querySelector(
  ".index-circle-container"
);
const previousButton = carouselContainer.querySelector(
  "button.previous-button"
);
const nextButton = carouselContainer.querySelector("button.next-button");

const images = [Cardinal, RainbowFlower, RedDahlia, Flycatcher].map(src => {
  const newImage = new Image();
  newImage.src = src;
  return newImage;
});
let currentImage = images[0] || null;
imageContainer.appendChild(currentImage);
let currentImageIndex = 0;

const goToImage = function goToImage() {
  imageContainer.removeChild(currentImage);
  currentImageIndex = Number(this.getAttribute("data-index"));
  currentImage = images[currentImageIndex];
  imageContainer.appendChild(currentImage);
  drawIndexCircles();
};

const clearIndexCircles = function clearIndexCircles() {
  while (indexCircleContainer.firstChild)
    indexCircleContainer.removeChild(indexCircleContainer.firstChild);
};

const drawIndexCircles = function drawIndexCircles() {
  clearIndexCircles();
  for (let i = 0; i < images.length; i++) {
    const newCircleDiv = document.createElement("div");
    newCircleDiv.classList.add("circle");
    newCircleDiv.setAttribute("data-index", i);
    if (i == currentImageIndex) newCircleDiv.classList.add("highlighted");
    indexCircleContainer.appendChild(newCircleDiv);
    newCircleDiv.addEventListener("click", goToImage);
  }
};

const mod = (x, n) => ((x % n) + n) % n;

const nextImage = function nextImage() {
  // Todo: animate one out, animate new one in?
  imageContainer.removeChild(currentImage);
  currentImageIndex = mod(currentImageIndex + 1, images.length);
  currentImage = images[currentImageIndex];
  imageContainer.appendChild(currentImage);
  drawIndexCircles();
};

const previousImage = function previousImage() {
  imageContainer.removeChild(currentImage);
  currentImageIndex = mod(currentImageIndex - 1, images.length);
  currentImage = images[currentImageIndex];
  imageContainer.appendChild(currentImage);
  drawIndexCircles();
};

/* even listeners for "previous" and "next" buttons */
previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);

drawIndexCircles();

let carouselInterval = window.setInterval(nextImage, 5000);
