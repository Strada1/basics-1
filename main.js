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



//---ADD cities to favorites after clicking on Like button

const CITYLIST = [];
function addCity(input){
    const cityElement = document.getElementById(input);
    let cityName = cityElement.textContent;
    let container = document.getElementById('container');
    //add city to array
    let city = '';
    city = cityName;
    CITYLIST.push(city);
    console.log(CITYLIST);
    render();
}

function deleteTask(task) {
    CITYLIST.splice(CITYLIST.indexOf(task), 1);
    render();
}

function removeCityList(){
    let allTasks = document.getElementsByClassName('task');
    for (let i=allTasks.length-1; i>=0; i--) {
        allTasks[i].remove();
    }
}

function showTasks(){ //create DOM structure from the TODO
    let taskPattern = document.getElementById("pattern");
    for (let task of CITYLIST) {
        //create new task div in HTML
        let newdiv = taskPattern.cloneNode(true); //make a clone of hidden Task task
        newdiv.className = "task";
        newdiv.removeAttribute('Style'); //remove style="display:none in new div

        //create div with task text
        newdiv.childNodes[1].innerHTML = task;

        //create cross icon to remove the task
        let closeElem = newdiv.childNodes[3]; //find task with Cross Icon
        closeElem.onclick = () => deleteTask(task);
        //newdiv.remove();
        
        //choose container where to put new div
        let container;
        container = document.getElementById('container');
        container.appendChild(newdiv);
    }
}

function render(){
    removeCityList();
    showTasks();
}


