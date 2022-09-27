import { UI } from "./UI.js";
import { getCityWeather } from "./requests.js";
import { checkInput } from "./checks.js";

function getCityName(event) {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  const inputText = input.value;
  if (!checkInput(inputText)) {
    return;
  }
  getCityWeather(inputText);
  event.currentTarget.reset();
}

UI.FORM.addEventListener('submit', () => getCityName(event));
