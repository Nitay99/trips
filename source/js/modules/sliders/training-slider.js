// eslint-disable-next-line
import Swiper, {Navigation} from '../../vendor/swiper';

const initTrainingSlider = () => {
  Swiper.use([Navigation]);
  // eslint-disable-next-line
  const swiper = new Swiper('.training__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    navigation: {
      nextEl: '.training__slider-button-next',
      prevEl: '.training__slider-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export {initTrainingSlider};
