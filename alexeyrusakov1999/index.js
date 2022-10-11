const input = document.querySelector(".check_input");
const btn = document.querySelector(".check_button");
const form = document.querySelector(".check_form");

const serverUrl = "https://api.genderize.io";

async function getSex() {
  let firstName = input.value;
  const url = `${serverUrl}?name=${firstName}`;
  let result = await fetch(url);
  let json = await result.json();
  alert(`${firstName} is ${json.gender}`);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  getSex();
});
