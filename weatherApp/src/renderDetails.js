export function renderDetails(inputCity){
    let promise = inputCity;

    promise
        .then((data) => {
            const DETALSCITYNAME = document.querySelector("#detalsCityName");
            DETALSCITYNAME.textContent = data.name;

            const TEMP_COUNT = document.querySelector("#tempCount");
            const temperature = data.main.temp;
            TEMP_COUNT.textContent = `Temperature: ${temperature.toFixed(0)}°`;

            const FEELS_LIKE = document.querySelector("#feels_like");
            const feelsLike = data.main.feels_like;
            FEELS_LIKE.textContent = `Feels like: ${feelsLike.toFixed(0)}°`;

            const WEATHER = document.querySelector("#weather");
            const descriptions = data.weather[0].description;
            WEATHER.textContent = `Weather: ${descriptions}`;

            const SUNRISE = document.querySelector("#sunrise");
            SUNRISE.textContent = `Sunrise: ${ new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;

            const SUNSET = document.querySelector("#sunset");
            SUNSET.textContent = `Sunrise: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;

        })
}