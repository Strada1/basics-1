function getCurrentCity(){
    const city = document.getElementById('now_city');
    const cityName = document.getElementById('inputName');

    let currentCity = localStorage.getItem('current');
    currentCity = currentCity.charAt(0).toUpperCase() + currentCity.slice(1);
    city.innerHTML = currentCity;
    cityName.innerHTML = currentCity;

    let lastJSON = JSON.parse(localStorage.getItem('currJSON'));

    const temperature = document.getElementById('now_temp'); 
    temperature.innerHTML = Math.round(`${lastJSON.main.temp}`-273) + '&#176';

    const weatherPic = document.getElementById('weatherPic');
    const iconsUrl = 'https://openweathermap.org/img/wn/';
    let icon = lastJSON.weather[0].icon;
    weatherPic.innerHTML = `<img src=\"${iconsUrl}${icon}@2x.png\">`;


    const details__temp = document.getElementById('details__temp');
    const feels_like = document.getElementById('details__feels_like');
    const details__weather = document.getElementById('details__weather');
    const details__sunrise = document.getElementById('details__sunrise');
    const details__sunset = document.getElementById('details__sunset');
    
    function toHumanDate(timestamp) {
        let hours = new Date(timestamp*1000).getHours();
        let minutes = new Date(timestamp*1000).getMinutes();
        return (hours+':'+minutes);
    }

    details__city.innerHTML = `${lastJSON.name}`;
    details__temp.innerHTML = `Temperature: ${Math.round(lastJSON.main.temp-273)}&#176`;
    feels_like.innerHTML = `Feels like: ${Math.round(lastJSON.main.feels_like-273)}&#176`;
    details__weather.innerHTML = `Weather: ${lastJSON.weather[0].main}`;
    details__sunrise.innerHTML = `Sunrise: ${toHumanDate(lastJSON.sys.sunrise)}`;
    details__sunset.innerHTML = `Sunset:${toHumanDate(lastJSON.sys.sunset)}`;
}

//---GET city weather after clicking on Search button
async function OnButtonPress() {

    try {
        //button and fields
        const cityName = document.getElementById('inputName');
        const city = document.getElementById('now_city');
        const temperature = document.getElementById('now_temp'); 
        const weatherPic = document.getElementById('weatherPic');

        const iconsUrl = 'https://openweathermap.org/img/wn/';

        const details__temp = document.getElementById('details__temp');
        const feels_like = document.getElementById('details__feels_like');
        const details__weather = document.getElementById('details__weather');
        const details__sunrise = document.getElementById('details__sunrise');
        const details__sunset = document.getElementById('details__sunset');



        //get city json
        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
        const url = `${serverUrl}?q=${cityName.value}&appid=${apiKey}`;
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);


        //save current city to LocalStorage
        let currentCity = cityName.value;
        currJSON = JSON.stringify(json);
        localStorage.setItem('currJSON', currJSON);
        localStorage.setItem('current', currentCity);

        //time
        function toHumanDate(timestamp) {
            let hours = new Date(timestamp*1000).getHours();
            let minutes = new Date(timestamp*1000).getMinutes();
            return (hours+':'+minutes);
        }

        //now_tab
        city.innerHTML = `${json.name}`;
        temperature.innerHTML = Math.round(`${json.main.temp}`-273) + '&#176';
        
        let icon = json.weather[0].icon;
        weatherPic.innerHTML = `<img src=\"${iconsUrl}${icon}@2x.png\">`;
        

        //details_tab
        details__city.innerHTML = `${json.name}`;
        details__temp.innerHTML = `Temperature: ${Math.round(json.main.temp-273)}&#176`;
        feels_like.innerHTML = `Feels like: ${Math.round(json.main.feels_like-273)}&#176`;
        details__weather.innerHTML = `Weather: ${json.weather[0].main}`;
        details__sunrise.innerHTML = `Sunrise: ${toHumanDate(json.sys.sunrise)}`;
        details__sunset.innerHTML = `Sunset:${toHumanDate(json.sys.sunset)}`;
    } 
    catch(error) {
        alert(error.message);
    }
}
let button = document.getElementById('searchButton');
button.onclick = OnButtonPress;

//--- GET City List from LocalStorage
const CITYLIST = [];
function getFavoriteCities(){  
    getCurrentCity(); 
    for (let i=0; i<localStorage.length; i++){
        if (localStorage.key(i).startsWith('favCity')){
            let key = localStorage.key(i);
            CITYLIST.push(localStorage.getItem(key));
        }
    }
    console.log(CITYLIST);
    render(CITYLIST);
}

//--- ADD cities to favorites after clicking on Like button
function saveFavoriteCities(input){
    const cityElement = document.getElementById(input);
    let cityName = cityElement.textContent;
    //---add city to array
    let city = cityName;
    if ((CITYLIST.length<=4)&&(!CITYLIST.includes(city))){
        CITYLIST.push(city);
        cityKey = `favCity${CITYLIST.indexOf(city)}`;    
        localStorage.setItem(cityKey, city);
    }

    render();
}

function deleteTask(city) {
    let cityKey = `favCity${CITYLIST.indexOf(city)}`;
    CITYLIST.splice(CITYLIST.indexOf(city), 1);
    localStorage.removeItem(cityKey);
    render();
}

function removeCityList(){
    let allTasks = document.getElementsByClassName('task');
    for (let i=allTasks.length-1; i>=0; i--) {
        allTasks[i].remove();
    }
}

function showCities(){ //create DOM structure from the TODO
    let taskPattern = document.getElementById("pattern");
    for (let city of CITYLIST) {
        //create new task div in HTML
        let newdiv = taskPattern.cloneNode(true); //make a clone of hidden Task task
        newdiv.className = "task";
        newdiv.removeAttribute('Style'); //remove style="display:none in new div

        //create div with task text
        newdiv.childNodes[1].innerHTML = city;

        //create cross icon to remove the task
        let closeElem = newdiv.childNodes[3]; //find task with Cross Icon
        closeElem.onclick = () => deleteTask(city);
        //newdiv.remove();
        
        //choose container where to put new div
        let container;
        container = document.getElementById('container');
        container.appendChild(newdiv);
    }
}

function render(){
    removeCityList();
    showCities();
}


//+ storage.saveFavoriteCities(favoriteCities)
//+ const favoriteCities = storage.getFavoriteCities();
//const currentCity = storage.getCurrentCity();


getFavoriteCities();