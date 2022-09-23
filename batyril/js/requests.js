import { changeTheBackground } from "./changeTheBackground.js";
import { UI } from "./UI.js";

export function requestsGender(name) {
  const firstName = name;
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${firstName}`;
  //TODO: добавить обработчку ошибок
  fetch(url)
    .then((response) => response.json())
    .then((gender) => changeTheBackground(gender.gender, UI.WRAPPER));
}
