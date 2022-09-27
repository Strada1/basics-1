const Town = document.getElementById("Town")
const formSumbit = document.getElementById('formSumbit')

window.addEventListener('unhandledrejection', function(event) {
	alert(event.promise);
	alert(event.reason); 
  });

formSumbit.addEventListener("submit", addTown)

async function addTown(event) {
	try {
		event.preventDefault();

		let cityName = Town.value;
		console.log(cityName)

		const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
		const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
		const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

		let responce = await fetch(url);
		let json = await responce.json();

		console.log(json)

		let temperature = (json.main.temp)
		render(temperature, cityName)
		

		formSumbit.reset()
	} catch(error) {
		alert(error)
	}
}

function render(temperature, cityName) {
	const temperatureNow = document.getElementById('temperatureNow')
	const city = document.getElementById('city')

	
	
	let div_temperature = document.createElement('div')
	div_temperature.className = "temperature";
	div_temperature.innerHTML = temperature;

	// localStorage.setItem(div_temperature, div_temperature.innerText)

	// elem.prepend(localStorage.getItem(div_temperature))

	temperatureNow.prepend(div_temperature)

	let div_location = document.createElement('div');
	div_location.innerHTML = cityName;
	city.append(div_location)



}