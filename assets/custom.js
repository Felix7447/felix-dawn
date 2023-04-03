debugger;
const slider = document.querySelector('[id^="Slider-"]');
const sliderItems = document.querySelectorAll('[id^="Slide-"]');
const enableSliderLooping = false;
const currentPageElement = document.querySelector(".slider-counter--current");
const pageTotalElement = document.querySelector(".slider-counter--total");
const prevButton = document.querySelector('button[name="previous"]');
const nextButton = document.querySelector('button[name="next"]');

prevButton.addEventListener("click", onButtonClick);
nextButton.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  const step = event.currentTarget.dataset.step || 1;
  const slideScrollPosition =
    event.currentTarget.name === "next"
      ? slider.scrollLeft + step * sliderItemOffset
      : slider.scrollLeft - step * sliderItemOffset;
  slider.scrollTo({
    left: slideScrollPosition,
  });
}
