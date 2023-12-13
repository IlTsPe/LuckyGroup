const headerNav = document.querySelector('.header__list');
const burgerContainer = document.querySelector('.burger');
const burgerButton = document.querySelector('.burger__button');
const overlay = document.querySelector('.overlay');

const stateActiveHandler = (elem, selector) => elem.classList.toggle(`${selector}`);
const removeActiveHandler = (elem, selector) => elem.classList.remove(`${selector}`);

burgerContainer.addEventListener('click', () => {
	stateActiveHandler(headerNav, 'header__list--active');
	stateActiveHandler(burgerButton, 'burger__button--active');
	stateActiveHandler(overlay, 'overlay--active');
});

document.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('header__link') || target.classList.contains('overlay')) {
		removeActiveHandler(headerNav, 'header__list--active');
		removeActiveHandler(burgerButton, 'burger__button--active');
		removeActiveHandler(overlay, 'overlay--active');
	}
});
