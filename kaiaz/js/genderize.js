const getNameForm = document.querySelector("#getNameForm");

getNameForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const getNameInput = document.querySelector("#getNamefield").value;
  const serverUrl = "https://api.genderize.io";
  const url = `${serverUrl}?name=${getNameInput}`;
  await fetch(url).then((res) => {
    if (res.ok) {
      let json = res.json();
      json.then((result) => {
        renderResult(result);
      });
    } else {
      alert("Ошибка HTTP: " + res.status);
    }
  });
});

function renderResult(result) {
  let userName = "";
  let userGender = "";
  userName = result.name;
  userGender = result.gender;
  const element = document.createElement("div");
  element.className = "result";
  element.textContent = `${userName} is ${userGender}`;
  document.body.append(element);
}
