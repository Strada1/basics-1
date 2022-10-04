export function getWeatherPromise(cityName){
    try{
        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
        const metric = `&units=metric`;
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}${metric}`;

        return fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw new Error(`Проверьте название города`)
                }
                return response.json();
            } )
    }catch (error) {
        alert(error.message);
    }
}