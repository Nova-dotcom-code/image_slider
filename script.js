// Select the slider container
const slider = document.querySelector(".slider");
// Select all images inside the slider
const images = document.querySelectorAll(".slider img");
// Select previous and next navigation buttons
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Initialize the current image index
let counter = 0;
// Get the width of a single image (assumes all images have the same width)
imageWidth = images[0].clientWidth;

// Function to slide to the next image
function slideNext() {
  counter++;
  // Loop back to the first image if at the end
  if (counter >= images.length) {
    counter = 0;
  }
  // Move the slider to show the current image
  slider.style.transform = `translate(${-imageWidth * counter}px)`;
}

// Function to slide to the previous image
function slidePrev() {
  counter--;
  // Loop to the last image if at the beginning
  if (counter < 0) {
    counter = images.length - 1;
  }
  // Move the slider to show the current image
  slider.style.transform = `translate(${-imageWidth * counter}px)`;
}
// Add event listeners to navigation buttons
prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);

// Automatically slide to the next image every 3 seconds
setInterval(slideNext, 3000);
