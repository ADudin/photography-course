const header = document.querySelector('.header');
const headerNavButton = header.querySelector('.header__nav-btn');
const headerLogoLink = header.querySelector('.header__logo-link');
const headerNavContainer = header.querySelector('.header__nav');

headerNavButton.addEventListener('click', () => {
  headerLogoLink.classList.toggle('header__logo-link_visibility_show');
  headerLogoLink.classList.toggle('header__logo-link_visibility_hidden');

  headerNavContainer.classList.toggle('header__nav_visibility_hidden');
  headerNavContainer.classList.toggle('header__nav_visibility_show');
});