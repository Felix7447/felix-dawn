debugger;
const slider = document.querySelector('[id^="Slider-"]');
const sliderItems = document.querySelectorAll('[id^="Slide-"]');
const sliderGallery = document.querySelector('[id^="Slider-Gallery"]');
const sliderGalleryItems = document.querySelectorAll('[id^="Slide-Gallery"]');
const enableSliderLooping = false;
const currentPageElement = document.querySelector(".slider-counter--current");
const pageTotalElement = document.querySelector(".slider-counter--total");
const prevButton = document.querySelector('button[name="previous"]');
const nextButton = document.querySelector('button[name="next"]');

prevButton.addEventListener("click", onButtonClick);
nextButton.addEventListener("click", onButtonClick);

let currentElement = 0;

function onButtonClick(event) {
  event.preventDefault();
  ++currentElement;
  showNextElement(currentElement);
}

function showNextElement(currentElement) {
  console.log(sliderGallery[currentElement].classList);
}
