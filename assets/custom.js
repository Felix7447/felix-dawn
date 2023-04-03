// debugger;
const slider = document.querySelector('[id^="Slider-"]');
const sliderItems = document.querySelectorAll('[id^="Slide-"]');
const sliderGallery = document.querySelector('[id^="Slider-Gallery"]');
const sliderGalleryItems = document.querySelectorAll('[id^="Slide-Gallery"]');
const enableSliderLooping = false;
const currentPageElement = document.querySelector(".slider-counter--current");
const pageTotalElement = document.querySelector(".slider-counter--total");
const prevButton = document.querySelector("#custom-prev-button");
const nextButton = document.querySelector("#custom-next-button");

prevButton.addEventListener("click", onPrevButtonClick);
nextButton.addEventListener("click", onNextButtonClick);

let currentElement = 0;

function onPrevButtonClick(event) {
  event.preventDefault();
  console.log(event);
  //   showNextElement(currentElement);
}

function onNextButtonClick(event) {
  event.preventDefault();
  ++currentElement;
  console.log(currentElement);
  sliderGalleryItems[currentElement - 1].classList.remove("is-active");
  sliderGalleryItems[currentElement].classList.add("is-active");
}

function showNextElement(currentElement) {}
