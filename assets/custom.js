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

const sliderItemsToShow = Array.from(sliderItems).filter(
  (element) => element.clientWidth > 0
);
if (sliderItemsToShow.length >= 2) {
  var sliderItemOffset =
    sliderItemsToShow[1].offsetLeft - sliderItemsToShow[0].offsetLeft;
  let slidesPerPage = Math.floor(
    (slider.clientWidth - sliderItemsToShow[0].offsetLeft) / sliderItemOffset
  );
  var totalPages = sliderItemsToShow.length - slidesPerPage + 1;
}

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
