// eslint-disable-next-line
import Swiper, {Pagination} from '../../vendor/swiper';

const initHeaderSlider = () => {
  Swiper.use([Pagination]);
  // eslint-disable-next-line
  const swiper = new Swiper('.hero__slider', {
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
};

export {initHeaderSlider};
