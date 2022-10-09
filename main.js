let button = document.getElementById('searchButton');
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
        //weatherPic.innerHTML = "<img src=\"img/mist.png\">";

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
button.onclick = OnButtonPress;


