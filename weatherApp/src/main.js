//import {UIELEMENTS} from './uielements.js'

const UIELEMENTS =  {
    form_input: document.querySelector(".form-input"),
    cityName: document.querySelector(".input-city"),
    search: document.querySelector(".search"),
    countTemp: document.querySelector(".count"),
    icon_weather: document.querySelector(".icon-cloud"),
    city_name: document.querySelector(".city-name"),
    likeCity: document.querySelector(".like"),
}


let list = [ ]


UIELEMENTS.form_input.addEventListener('submit', function (event, TODO) {
    event.preventDefault();
    const inputCity = getWeatherPromise(UIELEMENTS.cityName.value.split(' ').join(''));
    UIELEMENTS.form_input.reset();
    renderNow(inputCity);
    const divRemove = document.querySelector(".divRemove");
    divRemove.remove();
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
    }catch (error) {
        alert(error.message);
    }
}



function renderNow(inputCity){

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
        city_name.id = "nowIdCity";
        city_name.textContent = data.name;
        city_like.appendChild(city_name);

        const likeImg = document.createElement("img");
        likeImg.className = "like";
        likeImg.src  = "img/like.png";
        likeImg.id = "nowIdLike"
        city_like.appendChild(likeImg);
        tabNow.append(divRemove);

        const like_location = document.querySelector("#nowIdLike");
        like_location.addEventListener("click", likeLocation);

    })
        .catch(error => alert(error.message))

}

function renderLikeList (){
   const  locations = document.querySelector(".locations");
   locations.innerHTML = "";

    list.forEach( (el) => {

        const selectLocation = document.createElement("div");
        selectLocation.className = "selectLocation";

        const div = document.createElement("div");
        div.className = "city-name";
        div.id = `divId` + el.cityName ;

        div.textContent = el.cityName;

        const remove = document.createElement("img");
        remove.className = "removeLocation";
        remove.src  = "img/remove.png";
        remove.id = `removeId` + el.cityName;
        selectLocation.appendChild(div);
        selectLocation.appendChild(remove);
        locations.append(selectLocation);


        remove.addEventListener("click", () => {
            const result = list.findIndex(item => el.cityName === item.cityName);
           // TODO: splice нужно заменить на фильтр
            list.splice( result, 1 );
            renderLikeList();
        });

        div.addEventListener("click",() => {
            const divRemove = document.querySelector(".divRemove");
            divRemove.remove();
            const inputCity = getWeatherPromise(el.cityName);
            renderNow(inputCity);
        });

    })

}

function likeLocation(){

    try {

        const likeCity = document.querySelector(".city-name");
        const result = list.findIndex(item => likeCity.textContent === item.cityName);
        if(result !== -1){
            throw new Error(`${likeCity.textContent}  уже существует в избранных `)
        }

        list.push({cityName: likeCity.textContent});
        renderLikeList();


    }catch (error) {
        alert(error.message);
    }

}
