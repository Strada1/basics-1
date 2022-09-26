// TAb

const tabNow = document.getElementById("tabNow")
const tabDetalis = document.getElementById("tabDetalis")
const tabForecast = document.getElementById("tabForecast")

tabNow.addEventListener('click', showTabNow)
tabDetalis.addEventListener('click', showTabDetalis)
tabForecast.addEventListener('click', showTabForecast)

function showTabNow (event) {
	alert("click")
	let div = event.parentNode.nextSibling
	div.add('show_tab')
}

function showTabDetalis () {
	
}

function showTabForecast () {
	
}