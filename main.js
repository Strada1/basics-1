const FORM = document.querySelector('form')
const INPUT = document.querySelector('input')
const OUTPUT = document.querySelector('.output')
const SERVER_URL = 'https://api.genderize.io'
const ERROR = {
	NAME_IS_NOT_ENTERED: 'Имя не введено',
	INVALID_NAME: 'Введено некорректное имя или данного имени нет в базе',
	NETWORK_ERROR: 'Ошибка сети'
}

const render = result => {
	OUTPUT.textContent = result
}

const submitHandler = async e => {
	e.preventDefault()
	try {
		const name = INPUT.value
		
		if(!name) throw new Error(ERROR.NAME_IS_NOT_ENTERED)

		const url = `${SERVER_URL}?name=${name}`
		const response = await fetch(url)

		if(!response.ok) throw new Error(ERROR.NETWORK_ERROR)

		const data = await response.json()
		
		if(!data.gender) throw new Error(ERROR.INVALID_NAME)
	
		render(`${data.name} - ${data.gender}`)
	} catch(e) {
		render(e.message)
	} finally {
		FORM.reset()
	}
}

FORM.addEventListener('submit', submitHandler)