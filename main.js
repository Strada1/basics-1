const Town = document.getElementById("Town")
const formSumbit = document.getElementById('formSumbit')

const body = document.getElementById('body')

window.addEventListener('unhandledrejection', function(event) {
	alert(event.promise);
	alert(event.reason); 
  });

list = [];

formSumbit.addEventListener("submit", addTown)

async function addTown(event) {
	try {
		event.preventDefault();

		let cityName = Town.value;

		const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
		const serverUrl = '//api.openweathermap.org/data/2.5/weather';
		const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

		let responce = await fetch(url);
		let json = await responce.json();
		
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
	
	let link_img = `//openweathermap.org/img/wn/${icon}@2x.png`
	
	// картинка в now
	let img_weather = document.createElement('img');
	img_weather.className = "img_cloud";
	img_weather.src  = link_img;
	temperatureNow.prepend(img_weather)
	temperature = Math.round(temperature)

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

	//loveButton
	loveButton.classList.add('after__render')
	
	loveButton.addEventListener('click', addLocation)
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

	const indexObj = list.findIndex(function(item){
		return item == cityName;
	})

	if (indexObj == -1) {
		
		if(localStorage.length) {
			let cityInLs = JSON.parse(localStorage.getItem("citiesArray"));
			list = cityInLs
		}
		

		list.push(cityName) // (заменить на concat или оператор расширения)
		console.log(`Массив после клика на сердечко: \n ${list}`);
			
		toStorage(list)
		let listLocal = JSON.parse(localStorage.getItem("citiesArray"));

		renderAddedLocation();
	} else {
		alert("Уже есть такой город")
	}
}

body.onload = renderAddedLocation()

function renderAddedLocation() {
	const city = document.getElementById('city')
	const cityTab2 = document.getElementById('cityTab2')
	city.textContent = "";
	cityTab2.textContent = "";

	let listLocal = JSON.parse(localStorage.getItem("citiesArray"));
	 list = listLocal

	console.log(`list parse: \n ${listLocal} \n length: ${listLocal.length}`);
	console.log(`Массив: ${list} \n length: ${list.length}`)

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
	cityName = event.target.textContent

	const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
	const serverUrl = '//api.openweathermap.org/data/2.5/weather';
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

	let responce = await fetch(url);
	let json = await responce.json();
	
	let temperature = (json.main.temp)
	const icon = (json.weather[0].icon) 

	renderNow(temperature, cityName, icon)
	
	lastFavoriteViewed(cityName)

	// меняю цвет города по которому кликнул
	event.target.classList = "showTown"
	setTimeout(() => event.target.className = "delete__class", 350)
}

async function showlastCity() {
	let cityName = localStorage.getItem('lastCity')

	const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
	const serverUrl = '//api.openweathermap.org/data/2.5/weather';
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

	let responce = await fetch(url);
	let json = await responce.json();
	
	let temperature = (json.main.temp)
	const icon = (json.weather[0].icon) 

	renderNow(temperature, cityName, icon)
}

// localStorage.clear()
