const headerBackgrounds = document.querySelectorAll('.main-header__bg');
const headerHeight = document.querySelector('.main-header').clientHeight;
const headerWidth = document.querySelector('.main-header').offsetWidth;

if (headerBackgrounds.length >= 1) {
  headerBackgrounds.forEach((headerBg) => {
    headerBg.style.height = `${headerHeight}px`;
    headerBg.style.width = `${headerWidth}px`;
  });
}

