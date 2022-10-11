export {ITEMS_TAB, renderNowHTML};

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