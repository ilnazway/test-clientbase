new Swiper(".slider-content", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".slider-content__button-next",
    prevEl: ".slider-content__button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});