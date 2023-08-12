const headerBg = document.querySelector('.main-header__bg');
const headerRowHeight = document.querySelector('.main-header__row').clientHeight;

headerBg.style.height = `calc(100% + ${headerRowHeight}px)`;
