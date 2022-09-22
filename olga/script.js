const input = document.querySelector(".name");
const btn = document.querySelector(".btn");
const serverUrl = "https://api.genderize.io";

btn.addEventListener("click", gender);
async function gender() {
	const url = `${serverUrl}?name=${input.value}`;
	let response = await fetch(url);
	let result = await response.json();
	let value = `${result.name} is ${result.gender}`;
	alert(value);
}
