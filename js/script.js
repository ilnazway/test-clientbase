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

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows();
  },
};

if (isMobile.any()) {
  document.body.classList.add("js-touch");

  let menuArrows = document.querySelectorAll(".navigate__link");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        e.preventDefault();
        menuArrow.parentElement.classList.toggle("js-active");
      });
    }
  }
} else {
  document.body.classList.add("js-pc");
}


const iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
  const navigate = document.querySelector('.navigate');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle("js-lock");
    iconMenu.classList.toggle('js-active');
    navigate.classList.toggle("js-active");
  })
}

