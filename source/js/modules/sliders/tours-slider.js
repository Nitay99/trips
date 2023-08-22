// eslint-disable-next-line
import Swiper, {Navigation} from '../../vendor/swiper';

const initTourSlider = () => {
  Swiper.use([Navigation]);
  // eslint-disable-next-line
  const swiper = new Swiper('.tours__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    navigation: {
      nextEl: '.tours__slider-button-next',
      prevEl: '.tours__slider-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export {initTourSlider};
