const Town = document.getElementById("Town")
const formSumbit = document.getElementById('formSumbit')

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
		const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
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
	
	let link_img = `https://openweathermap.org/img/wn/${icon}@2x.png`
	
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

	//loveButton
	loveButton.classList.add('after__render')
	
	loveButton.addEventListener('click', addLocation)
	
}

function addLocation() {

	let cityValue = document.getElementById("cityName")
	let cityName = cityValue.textContent

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
		div_location.onclick = showNowTab
		city.append(div_location)

		let cross = document.createElement('input');
		cross.value = '☒';
		cross.type = 'submit'
		cross.classList = 'button_close';
		cross.onclick = deleteTown
		city.append(cross)


	})
	console.log(`list: ${list}`)
}

function deleteTown(event) {
	let town = event.target.previousSibling.textContent 
	town = town.trim()

	const IndexObj = list.findIndex(function(item){
		return item == town
	  })

	  list.splice(IndexObj, 1)
	  console.log(list)
	  renderAddedLocation()
}

async function showNowTab(event) {
	cityName = event.target.textContent

	const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
	const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
	const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

	let responce = await fetch(url);
	let json = await responce.json();
	

	let temperature = (json.main.temp)
	const icon = (json.weather[0].icon) 

	renderNow(temperature, cityName, icon)




	// меняю цвет города по которому кликнул
	event.target.classList = "showTown"
	setTimeout(() => event.target.className = "delete__class", 350)
	
}

// function showTown() {
// 	const city = document.getElementById('city')
// }



// добавить цвет при клике на ссылку

// const tabNow = document.getElementById("tabNow")
// const tabDetalis = document.getElementById("tabDetalis")
// const tabForecast = document.getElementById("tabForecast")

// tabNow.addEventListener('click', changeBackgroundNow) 

// function changeBackgroundNow() {
// 	tabNow.classList = 'active'
// }

