// eslint-disable-next-line
import Swiper, {Navigation} from '../../vendor/swiper';

const initReviewSlider = () => {
  Swiper.use([Navigation]);
  // eslint-disable-next-line
  const swiper = new Swiper('.reviews__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    navigation: {
      nextEl: '.reviews__slider-button-next',
      prevEl: '.reviews__slider-button-prev',
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
        slidesPerView: 1.245,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 1.625,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export {initReviewSlider};
