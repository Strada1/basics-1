
const input_FirstName = document.getElementById('input_FirstName')
const formSubmit = document.getElementById('formSubmit')

formSubmit.addEventListener("submit", getGender)

function getGender(event) {
	try {
		event.preventDefault();

		let firstName = input_FirstName.value;
		const serverUrl = 'https://api.genderize.io';
		const url = `${serverUrl}?name=${firstName}`;

		let response = fetch(url);
		let json = response.json();

		console.log(json)
		
		// console.log (`response:\n ${response}`)
		formSubmit.reset()

	} catch(error) {
		alert(error)
	}	
}
