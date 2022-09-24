
const input_FirstName = document.getElementById('input_FirstName')
const formSubmit = document.getElementById('formSubmit')

formSubmit.addEventListener("submit", getGender)

async function getGender(event) {
	try {
		event.preventDefault();

		let firstName = input_FirstName.value;
		const serverUrl = 'https://api.genderize.io';
		const url = `${serverUrl}?name=${firstName}`;

		let response = await fetch(url);
		let json = await response.json();
		alert(`${firstName} is ${json.gender}`)
		
		formSubmit.reset()

	} catch(error) {
		alert(error)
	}	
}
