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
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 70,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 70,
        allowTouchMove: false,
      },
    },
  });
};

export {initReviewSlider};
