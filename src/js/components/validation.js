const searchForm = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search-bar__input');

const regExp = /[!@#$%^&*()]/g;
const errorMessage = "В форму введены недопустимые значения '!@#$%^&*()'";

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	regExp.test(searchInput.value) ? alert(errorMessage) : searchInput.value = '';
})
