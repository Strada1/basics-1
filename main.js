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
		const icon = (json.weather[0].icon) 

		render(temperature, cityName, icon)

		formSumbit.reset()
	} catch(error) {
		alert(error)
	}
}

function render(temperature, cityName, icon) {
	const temperatureNow = document.getElementById('temperatureNow')
	const city = document.getElementById('city')
	
	let link_img = `https://openweathermap.org/img/wn/${icon}.png`
	console.log(link_img)
	

	
	// температура
	let div_temperature = document.createElement('div')
	div_temperature.className = "temperature";
	div_temperature.textContent = temperature;
	temperatureNow.prepend(div_temperature)

	// добавленые локации
	let div_location = document.createElement('div');
	div_location.textContent = cityName;
	city.append(div_location)

	// локация во вкладке now
	let div_name = document.createElement('div');
	div_name.className = "section1_text";
	div_name.textContent = cityName;
	temperatureNow.append(div_name)

	// картинка в now
	let img_weather = createElement("img");
	img_weather.className = "img_cloud";
	img_weather.src  = link_img;
	temperatureNow.prepend(img_weather)
}
