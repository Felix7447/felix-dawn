// debugger;
const sliderGallery = document.querySelector('[id^="Slider-Gallery"]');
const sliderGalleryItems = document.querySelectorAll('[id^="Slide-Gallery"]');
const prevButton = document.querySelector("#custom-prev-button");
const nextButton = document.querySelector("#custom-next-button");

prevButton.addEventListener("click", onPrevButtonClick);
nextButton.addEventListener("click", onNextButtonClick);

let currentElement = 0;

function onPrevButtonClick(event) {
  event.preventDefault();
  console.log(event);
  --currentElement;
  if (sliderGalleryItems[currentElement]) {
    console.log(currentElement);
    showPrevElement(currentElement);
  } else {
    sliderGalleryItems[currentElement + 1].classList.remove("is-active");
    currentElement = sliderGalleryItems.length - 1;
    showPrevElement(currentElement);
  }
}

function showPrevElement(currentElement) {
  if (sliderGalleryItems[currentElement + 1]) {
    sliderGalleryItems[currentElement + 1].classList.remove("is-active");
  }
  sliderGalleryItems[currentElement].classList.add("is-active");
}

function onNextButtonClick(event) {
  event.preventDefault();
  ++currentElement;
  if (sliderGalleryItems[currentElement]) {
    showNextElement(currentElement);
  } else {
    sliderGalleryItems[currentElement - 1].classList.remove("is-active");
    currentElement = 0;
    showNextElement(currentElement);
  }
}

function showNextElement(currentElement) {
  if (sliderGalleryItems[currentElement - 1]) {
    sliderGalleryItems[currentElement - 1].classList.remove("is-active");
  }
  sliderGalleryItems[currentElement].classList.add("is-active");
}
