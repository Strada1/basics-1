const form = document.createElement(`form`);
const input = document.createElement(`input`);
const submitBtn = document.createElement(`button`);
const result = document.createElement(`p`);
const serverUrl = "https://api.genderize.io";

document.body.append(form);
form.append(input);
form.append(submitBtn);
form.append(result);

input.type = `text`;
input.name = `name`;
submitBtn.type = `submit`;
submitBtn.textContent = `genderize`;

function genderize(evt) {
  evt.preventDefault();
  const firstName = input.value;

  try {
    if (!firstName) {
      throw new Error(`name field is empty`);
    }
    const url = `${serverUrl}?name=${firstName}`;
    fetch(url)
      .then(
        (response) => response.json(),
        (error) => console.log(error)
      )
      .then(
        function (json) {
          result.textContent = `${json.name} is ${json.gender}`;
          if (json.gender === null) {
            console.log(`${firstName} is not the name`);
          }
        },
        (error) => console.log(error)
      );
  } catch (error) {
    console.log(error.message);
  }
}

form.addEventListener(`submit`, genderize);
