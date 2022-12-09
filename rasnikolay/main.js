const tabWeather = document.body.querySelector(".tabs-item");

tabWeather.addEventListener('click', activeTabWeather);

function activeTabWeather() {
    tabWeather.className.toggle('tabs-item-active');
}