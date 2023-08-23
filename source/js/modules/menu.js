const header = document.querySelector('.main-header');

const navMain = header ? header.querySelector('.main-nav') : false;
const navToggle = header ? header.querySelector('.main-nav__toggle') : false;
const overlays = document.querySelectorAll('.overlay');
const navLinks = navMain ? navMain.querySelectorAll('.site-list__link') : false;

if (navMain) {
  navMain.classList.remove('main-nav--nojs');
}

const setMenuClickHandler = () => {
  if (navMain && navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
  }

  if (overlays.length >= 1 && navMain) {
    overlays.forEach((overlay) => {
      overlay.addEventListener('click', function () {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      });
    });
  }

  if (navLinks.length >= 1 && navMain) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', function () {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      });
    });
  }
};

export {setMenuClickHandler};
