// eslint-disable-next-line
import Swiper, {Grid, Navigation} from '../../vendor/swiper';

const initFeatureSlider = () => {
  // if (window.innerWidth > 1199) {
  Swiper.use([Grid, Navigation]);
  // eslint-disable-next-line
  const swiper = new Swiper('.features__slider', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    navigation: {
      nextEl: '.features__slider-button-next',
      prevEl: '.features__slider-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        allowTouchMove: false,
        slidesPerView: 1,
        spaceBetween: 15,
        grid: {
          rows: 5,
          fill: 'row',
        },
      },
      768: {
        slidesPerView: 2,
        initialSlide: 1,
        spaceBetween: 30,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide: 2,
        loop: true,
      },
    },
  });
  // }
};

// if (window.innerWidth < 1200) {
//   swiper.destroy();
// }
// };

export {initFeatureSlider};
