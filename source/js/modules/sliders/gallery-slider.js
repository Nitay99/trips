// eslint-disable-next-line
import Swiper, {Navigation} from '../../vendor/swiper';

const initGallerySlider = () => {
  Swiper.use([Navigation]);
  // eslint-disable-next-line
  const swiper = new Swiper('.gallery__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    navigation: {
      nextEl: '.gallery__slider-button-next',
      prevEl: '.gallery__slider-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 3,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 6,
      },
    },
  });
};

export {initGallerySlider};
