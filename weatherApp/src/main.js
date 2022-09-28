import { UIELEMENTS } from './uielements.js'


UIELEMENTS.form_input.addEventListener('submit', function (event, TODO) {
    event.preventDefault();

    // const divRemove = document.querySelector("divRemove");
    // divRemove.remove();
    renderNow();

    // setTimeout(() => divRemove.remove(), 1000);
    //TODO: divRemove нужно доделать
})

function getWeatherPromise(cityName){

    try{

    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const metric = `&units=metric`
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}${metric}`;

    return fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error(`Проверьте название города`)
            }
            return response.json();
        } )
    }catch (error){
        alert(error)
    }
}



function renderNow(node){
    const inputCity = getWeatherPromise(UIELEMENTS.cityName.value.split(' ').join(''));
    console.log(inputCity);
    const  tabNow = document.querySelector("#tab_01");
    let promise = inputCity;
    promise
        .then((data) => {
        const temperature = data.main.temp;
        const serverImgUrl = `http://openweathermap.org/img/wn/`;
        const src = `${serverImgUrl}${data.weather[0]['icon']}@2x.png`;
        const tempCount = `${temperature.toFixed(0)}°`;

        const divRemove = document.createElement("div");
        divRemove.className = "divRemove";

        const span = document.createElement("span");
        span.className = "count";
        span.textContent = tempCount;
        divRemove.append(span);

        const img = document.createElement("img");
        img.className = "icon-cloud";
        img.src  = src;
        divRemove.append(img);

        const city_like = document.createElement("div");
        city_like.className = "city-like";
        divRemove.append(city_like);

        const city_name = document.createElement("span");
        city_name.className = "city-name";
        city_name.textContent = data.name;
        city_like.appendChild(city_name);

        const likeImg = document.createElement("img");
        likeImg.className = "like";
        likeImg.src  = "img/like.png";
        city_like.appendChild(likeImg);

        tabNow.append(divRemove);

        console.log(tabNow);

    })
        .catch(error => alert(error.message))

}

