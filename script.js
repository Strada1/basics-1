import { FORM, FORM_INPUT } from "./view.js";

const serverUrl = "https://api.genderize.io";

function Genderize(e) {
  e.preventDefault();

  let firstName = FORM_INPUT.value;

  try {
    if (firstName) {
      const url = `${serverUrl}?name=${firstName}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          window.alert(
            (data.name ? `${data.name} is ` : "empty name ") +
              (data.gender ? `${data.gender}` : "Unknown gender")
          );
        });
    } else {
      throw {
        name: "EmptyFirstName",
        message: "Имя пользователя пустое",
      };
    }
  } catch (e) {
    if (e.name === "EmptyFirstName") console.error("Введите имя пользователя!");
  }
}

FORM.addEventListener("submit", (e) => Genderize(e));
