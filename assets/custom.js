debugger;
this.slider = this.querySelector('[id^="Slider-"]');
this.sliderItems = this.querySelectorAll('[id^="Slide-"]');
this.enableSliderLooping = false;
this.currentPageElement = this.querySelector(".slider-counter--current");
this.pageTotalElement = this.querySelector(".slider-counter--total");
this.prevButton = this.querySelector('button[name="previous"]');
this.nextButton = this.querySelector('button[name="next"]');
