let button = document.getElementById('searchButton');
async function OnButtonPress() {
    //button
    let cityName = document.getElementById('inputName');
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
    const url = `${serverUrl}?q=${cityName.value}&appid=${apiKey}`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);

    //now_tab
    let city = document.getElementById('now_city');
    let temperature = document.getElementById('now_temp'); 
    let weatherPic = document.getElementById('weatherPic');
    city.innerHTML = `${json.name}`;
    temperature.innerHTML = Math.round(`${json.main.temp}`-273) + '&#176';
    weatherPic.innerHTML = "<img src=\"img/mist.png\">";

    //details_tab
    let details__temp = document.getElementById('details__temp');
    details__temp.innerHTML = `Temperature: ${Math.round(json.main.temp-273)}&#176`;
    let feels_like = document.getElementById('details__feels_like');
    feels_like.innerHTML = `Feels like: ${Math.round(json.main.feels_like-273)}&#176`;
    let details__weather = document.getElementById('details__weather');
    details__weather.innerHTML = `Weather: ${json.weather[0].main}`;
}
button.onclick = OnButtonPress;


