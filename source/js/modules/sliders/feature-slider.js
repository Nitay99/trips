// eslint-disable-next-line
import Swiper, {Navigation} from '../../vendor/swiper';

let swiper;

const initFeatureSlider = () => {
  Swiper.use([Navigation]);
  // eslint-disable-next-line
  swiper = new Swiper('.features__slider', {
    // Optional parameters
    direction: 'horizontal',

    // If we need pagination
    navigation: {
      nextEl: '.features__slider-button-next',
      prevEl: '.features__slider-button-prev',
    },

    allowTouchMove: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
  });
};

if (window.innerWidth > 1199) {
  initFeatureSlider();
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1199) {
    if (swiper.destroyed === true || !swiper) {
      initFeatureSlider();
    }
  } else {
    swiper.destroy(true, true);
  }
});
