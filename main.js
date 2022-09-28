const Town = document.getElementById("Town")
const formSumbit = document.getElementById('formSumbit')

window.addEventListener('unhandledrejection', function(event) {
	alert(event.promise);
	alert(event.reason); 
  });

list = [];

formSumbit.addEventListener("submit", addTown)
formSumbit.addEventListener("submit", getCityName)

async function addTown(event) {
	try {
		event.preventDefault();

		let cityName = Town.value;

		const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
		const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
		const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

		let responce = await fetch(url);
		let json = await responce.json();
		
		// console.log(json)

		let temperature = (json.main.temp)
		const icon = (json.weather[0].icon) 

		renderNow(temperature, cityName, icon)

		formSumbit.reset()

	} catch(error) {
		alert(error)
	}
}

function renderNow(temperature, cityName, icon) {
	const temperatureNow = document.getElementById('temperatureNow')
	const loveButton = document.getElementById('loveButton')

	temperatureNow.textContent = ""
	
	let link_img = `https://openweathermap.org/img/wn/${icon}@2x.png`
	
	// картинка в now
	let img_weather = document.createElement('img');
	img_weather.className = "img_cloud";
	img_weather.src  = link_img;
	temperatureNow.prepend(img_weather)
	
	// температура
	let div_temperature = document.createElement('div')
	div_temperature.className = "temperature";
	div_temperature.textContent = temperature;
	temperatureNow.prepend(div_temperature)

	// локация во вкладке now
	let div_name = document.createElement('div');
	div_name.className = "section1_text";
	div_name.textContent = cityName;
	temperatureNow.append(div_name)

	//loveButton
	loveButton.classList.add('after__render')
	loveButton.addEventListener('click', addLocation)
	
}

function getCityName() {
	let cityName = Town.value;
	return cityName
}

function addLocation() {
	let cityName =  getCityName()

	console.log(`city name: \n ${cityName}`)
	const indexObj = list.findIndex(function(item){
		return item == cityName;
	})

	if (indexObj == -1) {
		list.push(cityName)

		renderAddedLocation(event)
	} else {
		alert("Уже есть такой город")
	}

	
}

function renderAddedLocation(event) {
	const city = document.getElementById('city')
	city.textContent = "";

	list.forEach(function(item) {

		let div_location = document.createElement('div');
		div_location.textContent = item;
		city.append(div_location)
	})
	console.log(`list: ${list}`)
}

