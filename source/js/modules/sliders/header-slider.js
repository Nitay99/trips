// eslint-disable-next-line
import Swiper, {Pagination} from '../../vendor/swiper';

const heroSlider = document.querySelector('.hero__slider');

const initHeaderSlider = () => {
  Swiper.use([Pagination]);
  // eslint-disable-next-line
  const swiper = new Swiper(heroSlider, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    speed: 300,

    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 30,
        allowTouchMove: true,
      },
      768: {
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });

  let activeIndex = swiper.realIndex;
  let heroSlides = heroSlider ? heroSlider.querySelectorAll('.swiper-slide') : false;

  if (heroSlider && heroSlides) {
    heroSlides.forEach((item, index) => {
      let buttons = item.querySelectorAll('a, button, iframe');
      if (index === activeIndex + 1) {
        for (let button of buttons) {
          button.setAttribute('tabindex', '0');
        }
      } else {
        for (let button of buttons) {
          button.setAttribute('tabindex', '-1');
        }
      }
    });

    swiper.on('slideChange', () => {
      activeIndex = swiper.realIndex;
      heroSlides.forEach((item, index) => {
        let buttons = item.querySelectorAll('a, button, iframe');
        if (index === activeIndex + 1) {
          for (let button of buttons) {
            button.setAttribute('tabindex', '0');
          }
        } else {
          for (let button of buttons) {
            button.setAttribute('tabindex', '-1');
          }
        }
      });
    });
  }
};

export {initHeaderSlider};
