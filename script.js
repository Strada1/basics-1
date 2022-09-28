const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

const inputCity = document.getElementById("inputCity");
const nowCity = document.getElementById("nowCity");
const nowTemperature = document.getElementById("nowTemperature");

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

async function searchClick() {

    let url = `${serverUrl}?q=${inputCity.value.trim()}&appid=${apiKey}`;
    let response = await fetch(url);
    let json;

    if (!response.ok) { // если НЕ HTTP-статус в диапазоне 200-299
        inputCity.value = "Ошибка HTTP: " + response.status;
    } else {
        json = await response.json();
        if (json.cod === "404") {
            inputCity.value = "City not found ";
        } else {
            nowCity.innerHTML = json.name;
            nowTemperature.innerHTML = Math.floor(Number(json.main.temp) - 273.15);
        }
    }
}



