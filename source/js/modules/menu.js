const header = document.querySelector('.main-header');
const navMain = header.querySelector('.main-nav');
const navToggle = header.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

const setMenuClickHandler = () => {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};

export {setMenuClickHandler};
