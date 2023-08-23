const header = document.querySelector('.main-header');
const footer = document.querySelector('.main-footer');

const mainFooterNav = footer ? footer.querySelector('.main-nav') : false;
const mainHeaderNav = header ? header.querySelector('.main-nav') : false;
const sections = ['tours', 'training', 'about', 'reviews', 'gallery', 'contacts'];

if (mainHeaderNav) {
  let navLinks = mainHeaderNav.querySelectorAll('.site-list__link');
  if (navLinks.length >= 1) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        sections.find((section) => {
          if (navLink.classList.contains(`site-list__link--${section}`)) {
            let sectionBlock = document.querySelector(`.${section}`);
            if (sectionBlock) {
              sectionBlock.scrollIntoView();
            }
          }
        });
      });
    });
  }
}

if (mainFooterNav) {
  let navLinks = mainFooterNav.querySelectorAll('.site-list__link');
  if (navLinks.length >= 1) {
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        sections.find((section) => {
          if (navLink.classList.contains(`site-list__link--${section}`)) {
            let sectionBlock = document.querySelector(`.${section}`);
            if (sectionBlock) {
              sectionBlock.scrollIntoView();
            }
          }
        });
      });
    });
  }
}
