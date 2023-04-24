const header = document.querySelector('.header');
const headerNavButton = header.querySelector('.header__nav-button');
const headerLogoLink = header.querySelector('.header__logo-link');
const headerNavContainer = header.querySelector('.header__nav');

headerNavButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  headerNavButton.classList.toggle('header__nav-button_type_open');
  headerNavButton.classList.toggle('header__nav-button_type_close');

  headerLogoLink.classList.toggle('header__logo-link_visibility_show');
  headerLogoLink.classList.toggle('header__logo-link_visibility_hidden');

  headerNavContainer.classList.toggle('header__nav_visibility_hidden');
  headerNavContainer.classList.toggle('header__nav_visibility_show');
});