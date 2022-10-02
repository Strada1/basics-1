const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
let cityName = 'Boston';
const apiKey = '5a9a938a5789404c89a17a8ca550d9a1';

const inputCity = document.getElementById("inputCity");
let cityNow = document.getElementById("city");
const tempNow = document.getElementById("tempHeader");
const iconNow = document.getElementById("cloud");
const favIcon = document.getElementById("fav");
const locations = document.getElementById("locations");

let citiesArr = JSON.parse(localStorage.getItem("cities"));


const myForm = document.getElementById("myForm");

//Details Section
const detailesCity = document.getElementById("detailesCity");
const detailesTemp = document.getElementById("detailesTemp");
const detailesFTemp = document.getElementById("detailesFTemp");
const detailesWeather = document.getElementById("detailesWeather");
const detailesSunrise = document.getElementById("detailesSunrise");
const detailesSunset = document.getElementById("detailesSunset");


myForm.addEventListener('submit', sendRequest);
favIcon.addEventListener('click', addLocation);




document.getElementById("defaultOpen").click();                                         //Вкладка по умолчанию

render();
sendRequest();


function render() {

    if(citiesArr === null) {                                                            //Если из сторджа не получил
        citiesArr = [];
    }

    locations.innerHTML = '';

    for (let i = 0; i < citiesArr.length; i++) {                                        //Создание списка добавленных городов                            
        let divLocation = document.createElement("div");    
        divLocation.setAttribute("class", "divLocation")
        divLocation.addEventListener('click', weatherRequest);
        divLocation.innerHTML = citiesArr[i];
        locations.append(divLocation);

        let delbtnLocation = document.createElement("button");                          //Создание крестиска для удаления
        delbtnLocation.setAttribute("class", "delbtnLocation");
        delbtnLocation.innerHTML = "x";
        delbtnLocation.addEventListener("click", removeLocation);
        divLocation.append(delbtnLocation);
    }
    
}

function addLocation() {                                                                 //Добавление в избранные
    if ((citiesArr.indexOf(cityName)) === -1) {                                          //Отсутствует ли такой город в массиве
        citiesArr.push(cityName);
        localStorage.setItem("cities", JSON.stringify(citiesArr));
        render();
    } else {
        console.log("The city is already in the list!")
    }
}

function removeLocation() {
    citiesArr.splice(citiesArr.indexOf(this.parentElement.innerHTML.split("<")[0]), 1);  //удаление из масива
    localStorage.clear();                                                                //очистка сторджа
    localStorage.setItem("cities", JSON.stringify(citiesArr));                           //загрузка в стордж нового массива
    this.parentElement.remove();                                                         //удаление из списка в разметке
    event.stopPropagation();                                                             //предотвращение выполнения родительского листнера
}

function weatherRequest() {                                                              //запрос из списка добавленных городов
    inputCity.value = this.innerHTML.split("<")[0];
    sendRequest(event);
}


function sendRequest() {
    
    if (inputCity.value) {
        cityName = inputCity.value;
    } else if(localStorage.getItem("currentCity")) {
        cityName = JSON.parse(localStorage.getItem("currentCity"));
    } else {
        cityName = "Boston";
    }

    localStorage.setItem("currentCity", JSON.stringify(cityName));

    inputCity.value = '';                                                                               
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=Metric`;

    cityName = cityName[0].toUpperCase() + cityName.slice(1);
    console.log(cityName);
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(data => {
        iconNow.setAttribute('src', `./images/${data.weather[0].main}.png`);
        tempNow.innerHTML = data.main.temp.toFixed(1)+"&#176";
        detailesTemp.innerHTML = Math.round(data.main.temp)+"&#176";
        detailesFTemp.innerHTML = Math.round(data.main.feels_like)+"&#176";
        detailesWeather.innerHTML = data.weather[0].main;
        let date = new Date(data.sys.sunrise*1000);
        detailesSunrise.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
        date = new Date(data.sys.sunset*1000);
        detailesSunset.innerText = `${date.getHours()}:${date.getMinutes()}`;
    })
    .catch(error => alert("Wrong city name"));


    cityNow.innerHTML = cityName;
    detailesCity.innerHTML = cityName;

    if(event) {
        event.preventDefault();
    }
    
}

function activator(event) {                                                                     //Окраска активного таба            
    let tabs = document.getElementsByClassName("tabItem");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    event.currentTarget.className += " active";
}