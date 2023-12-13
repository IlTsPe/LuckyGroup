const heroSubtitle = document.querySelector('.hero__subtitle');

const getTitle = async function (http) {
	try {
		const response = await fetch(`${http}`);
		if (!response.ok) throw new Error('Пролема с API')
		const data = await response.json();
		heroSubtitle.textContent = `${data[1]}`
	} catch {
		console.error('Ошибка с доступом');
		heroSubtitle.textContent = 'We Make international calling simple, relible, and cheap basedon your unique calling behavior.'
	}
}

getTitle('https://baconipsum.com/api/?type=lucky');
