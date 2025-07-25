const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;
imageWidth = images[0].clientWidth;

function slideNext() {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  slider.style.transform = `translate(${-imageWidth * counter}px)`;
}
function slidePrev() {
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  slider.style.transform = `translate(${-imageWidth * counter}px)`;
}
prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);
setInterval(slideNext, 3000);
