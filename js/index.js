const firstName = 'artem';
const serverUrl = 'https://api.genderize.io';


const form = document.querySelector('form');
const inputName = form.querySelector('.name');

function getNameAndGender(url) {
	fetch(url)
		.then(res => res.json())
		.then(data => {
			alert(`${data.name[0].toUpperCase() + data.name.slice(1)} is ${data.gender}`)
		});	
}	


form.addEventListener('submit', evt => {
	evt.preventDefault();
	
	const name = evt.target.inputName.value;
	const url = `${serverUrl}?name=${name}`;

	getNameAndGender(url);
	
})

