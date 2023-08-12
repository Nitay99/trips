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

    allowTouchMove: false,
  });
};

export {initHeaderSlider};
