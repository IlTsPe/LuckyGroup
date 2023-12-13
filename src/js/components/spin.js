const spin = document.querySelectorAll('.carousel__spin li');

const spinAnimation = function (sec) {
	return new Promise((resolve) => {
		setTimeout(resolve, sec * 1000)
	})
};

spin.forEach(item => {
	spinAnimation(2.5).then(() => {
		item.classList.add('active');
		return spinAnimation(1.5)
	}).then(() => {
		item.style.animation = 'spin 20s infinite linear';

		setInterval(() => {
			const random = Math.random().toFixed(2) * 1.2;
			if (random < 0.5) return
			item.firstElementChild.style.transform = `scale(${random})`
		}, 1000);
	});
});
