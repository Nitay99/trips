const headerBackgrounds = document.querySelectorAll('.main-header__bg');
const headerRowHeight = document.querySelector('.main-header__row').clientHeight;
const headerWidth = document.querySelector('.main-header').offsetWidth;

if (headerBackgrounds.length >= 1) {
  headerBackgrounds.forEach((headerBg) => {
    headerBg.style.height = `calc(100% + ${headerRowHeight}px)`;
    // headerBg.style.width = `${headerWidth}px`;
  });
}

