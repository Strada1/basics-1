export {ITEMS_TAB, renderNowHTML, renderDetailsHTML, renderAddedLocationHTML};

const ITEMS_TAB = {
	Town2: document.getElementById("Town2"),
	formSumbitNow: document.getElementById('formSumbitNow'),
	Town: document.getElementById("Town"),
	formSumbitDetalis: document.getElementById('forrmSubmitDetalis'),
	tabNow: document.getElementById('tabNow'),
	tabDetalis: document.getElementById('tabDetalis'),
	tabForecast: document.getElementById('tabForecast'),
}

function renderNowHTML(temperature, cityName, icon) {
	let link_img = `//openweathermap.org/img/wn/${icon}@2x.png`
	
	// картинка в now
	let img_weather = document.createElement('img');
	img_weather.className = "img_cloud";
	img_weather.src  = link_img;
	temperatureNow.prepend(img_weather)
	
	// температура
	let div_temperature = document.createElement('div')
	div_temperature.className = "temperature";
	div_temperature.textContent = `${temperature}°`;
	temperatureNow.prepend(div_temperature)

	// локация во вкладке now
	let div_name = document.createElement('div');
	div_name.className = "section1_text";
	div_name.id = "cityName"
	div_name.textContent = cityName;
	temperatureNow.append(div_name)
}

function renderDetailsHTML(temperature, cityName, feels_like, Weather_status, Sunrise, Sunset) {
	//Имя города
	let div_name = document.createElement('div');
	div_name.className = "Actobe_text";
	div_name.textContent = cityName;
	DetalisTab.prepend(div_name)

	//Temperature
	let div_temperature = document.createElement('div')
	div_temperature.textContent = `Temperature: ${temperature}°`;
	data_Wether.append(div_temperature)

	//Feels like
	let div_Feelslike = document.createElement('div')
	div_Feelslike.textContent = `Feels like: ${feels_like}°`;
	data_Wether.append(div_Feelslike)

	//Weather 
	let div_Weather = document.createElement('div')
	div_Weather.textContent = `Weather: ${Weather_status}`;
	data_Wether.append(div_Weather)

	//Sunrise
	let div_Sunrise = document.createElement('div')
	div_Sunrise.textContent = `Sunrise: ${Sunrise}`;
	data_Wether.append(div_Sunrise)

	//Sunset
	let div_Sunset = document.createElement('div')
	div_Sunset.textContent = `Sunset: ${Sunset}`;
	data_Wether.append(div_Sunset)
}

function renderAddedLocationHTML(listLocal, showNowTab, deleteTown) {
	listLocal.forEach(function(item) {

		// добавление в Now 
		let div_location = document.createElement('div');
		div_location.textContent = item;
		div_location.onclick = showNowTab
		city.append(div_location)
		// cityTab2.append(div_location)

		let cross = document.createElement('input');
		cross.value = '☒';
		cross.type = 'submit'
		cross.classList = 'button_close';
		cross.onclick = deleteTown // переделать AddEventListner 
		city.append(cross)
		// cityTab2.append(cross)

		// добавление в Detalis
		let div_locationTab2 = document.createElement('div');
		div_locationTab2.textContent = item;
		div_locationTab2.onclick = showNowTab
		cityTab2.append(div_locationTab2)

		let crossTab2 = document.createElement('input');
		crossTab2.value = '☒';
		crossTab2.type = 'submit'
		crossTab2.classList = 'button_close';
		crossTab2.onclick = deleteTown 
		cityTab2.append(crossTab2)
	})
}