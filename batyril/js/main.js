import { requestsGender } from "./requests.js";
import { UI } from "./UI.js";

function handlerForm(event) {
  event.preventDefault();
  //TODO: добавить обработчку строки
  const name = event.currentTarget.firstElementChild.value;
  requestsGender(name);
  event.target.reset();
}

UI.FORM.addEventListener('submit', handlerForm);
