let tabs = document.querySelectorAll('.tab_item');
let tabsContent = document.querySelectorAll('.weather__forecast-main');
let form = document.querySelector('form');
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
let input = document.querySelector('.search__city');
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const nowTemperature = document.querySelector('.count-temperature');
const nowNameCity = document.querySelector('.name_city');
const parentForImage = document.querySelector('.image__wather');

for (let i = 0; i < tabs.length; i++) {
    tabs[0].classList.add('active');
    tabsContent[0].classList.add('active');
    tabs[i].addEventListener("click", function () {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
            tabsContent[j].classList.remove('active');
        }
        tabs[i].classList.add('active');
        tabsContent[i].classList.add('active');
    });
}

form.addEventListener("submit", async function () {
    const url = `${serverUrl}?q=${input.value}&appid=${apiKey}&units=metric`;
    let promise = await fetch(url)
    let result = await promise.json();
    nowTemperature.textContent = Math.round(result.main.temp)
    nowNameCity.textContent = input.value;

    let img = document.createElement('img');
    img.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    parentForImage.innerHTML="";
    parentForImage.append(img);
});


