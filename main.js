import {ITEMS_TAB, renderNowHTML} from './view.js';

window.addEventListener('unhandledrejection', function(event) {
	console.log(event.promise);
	console.log(event.reason); 
  });

let list = [];

ITEMS_TAB.formSumbitNow.addEventListener("submit", addTown)
ITEMS_TAB.formSumbitDetalis.addEventListener("submit", addTown)

async function getItem() {
	let cityName = ITEMS_TAB.Town.value;
	if(!cityName) {
		cityName = localStorage.getItem('lastCity')
	}

	cityName = cityName.trim()

		const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
		const serverUrl = '//api.openweathermap.org/data/2.5/weather';
		const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

		let responce = await fetch(url);
		let json = await responce.json();
		
		let temperature = (json.main.temp)
		temperature = Math.round(temperature)

		let feels_like = (json.main.feels_like)
		feels_like = Math.round(feels_like)

		let Weather_status = (json.weather[0].main)

		let Sunrise = (json.sys.sunrise)
		Sunrise = new Date(Sunrise * 1000);
		Sunrise = Sunrise.toLocaleTimeString()

		let Sunset = (json.sys.sunset)
		Sunset = new Date(Sunset * 1000);
		Sunset = Sunset.toLocaleTimeString()

		const icon = (json.weather[0].icon) 

		renderNow(temperature, cityName, icon)
		renderDetalis (temperature, cityName, feels_like, Weather_status, Sunrise, Sunset)
		ITEMS_TAB.formSumbitNow.reset()
		ITEMS_TAB.formSumbitDetalis.reset()
}

async function addTown(event) {
		event.preventDefault();
		getItem()
}
//
function renderNow(temperature, cityName, icon) {
	const temperatureNow = document.getElementById('temperatureNow')
	const loveButton = document.getElementById('loveButton')

	temperatureNow.textContent = ""
	
	renderNowHTML(temperature, cityName, icon)

	//loveButton
	loveButton.classList.add('after__render')

	loveButton.addEventListener('click', addLocation)
}

function renderDetalis (temperature, cityName, feels_like, Weather_status, Sunrise, Sunset) {
	const DetalisTab = document.getElementById('DetalisTab')
	const data_Wether = document.getElementById('data_Wether')
	DetalisTab.textContent = ""
	data_Wether.textContent = ""

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

function toStorage (list) {
	let citiesArray = JSON.stringify(list);
	localStorage.setItem('citiesArray', citiesArray);
}

function lastFavoriteViewed(cityName) {
	let lastCity = cityName
    localStorage.setItem('lastCity', lastCity)
}

// localStorage.clear()

function addLocation() {

	let cityValue = document.getElementById("cityName")
	let cityName = cityValue.textContent
	

	if(!list) {
		list = ["Варшава"]
	}
	console.log(`list: ${list}`)
	lastFavoriteViewed(cityName)
	 

	const indexObj = list.findIndex(function(item){
		return item == cityName
	})

	if (indexObj == -1) {
		
		if(localStorage.length) {
			let cityInLs = JSON.parse(localStorage.getItem("citiesArray"));
			list = cityInLs
		}
		
		list.push(cityName) // (заменить на concat или оператор расширения)
			
		toStorage(list)
		let listLocal = JSON.parse(localStorage.getItem("citiesArray"));

		renderAddedLocation();

	} else {
		alert("Уже есть такой город")
	}
}

document.body.onload = renderAddedLocation()

function renderAddedLocation() {
	const city = document.getElementById('city')
	const cityTab2 = document.getElementById('cityTab2')
	city.textContent = "";
	cityTab2.textContent = "";

	let listLocal = JSON.parse(localStorage.getItem("citiesArray"));
	list = listLocal;

	if(!listLocal){
		listLocal = ["Варшава"]
	}

	console.log(`listLocal: ${listLocal}`)

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
	showlastCity()
}

function deleteTown(event) {
	let town = event.target.previousSibling.textContent 
	town = town.trim()

	const IndexObj = list.findIndex(function(item){
		return item == town
	  })

	  list.splice(IndexObj, 1) // сделать фильтр (поиск флуд: как избавится от splice? )
	  toStorage (list)
	  
	  renderAddedLocation()
}

async function showNowTab(event) {
	let cityName = event.target.textContent

	lastFavoriteViewed(cityName)
	getItem()

	// меняю цвет города по которому кликнул
	event.target.classList = "showTown"
	setTimeout(() => event.target.className = "delete__class", 350)
}

async function showlastCity() {
	let cityName = localStorage.getItem('lastCity')
	
	if(!cityName) {
		cityName = 'Варшава'
	}

	getItem()
}

tabNow.addEventListener('click', TabmenuNow)

function TabmenuNow() {
	tabNow.classList = "active"
}