const sectionTitles = document.querySelectorAll('.section-title');

if (sectionTitles.length >= 1) {
  sectionTitles.forEach((sectionTitle) => {
    sectionTitle.setAttribute('data-value', sectionTitle.textContent);
  });
}
