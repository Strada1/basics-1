const ELEMENT = {
  input: document.getElementById('input'),
  button: document.getElementById('button')
}
const serverUrl = 'https://api.genderize.io';

ELEMENT.button.addEventListener('click', event => {
  event.preventDefault();
  genderize();
})

async function genderize() {
  const firstName = input.value;

  if (!firstName){
    alert('Empty stroke');
    return;
  }

  const url = `${serverUrl}?name=${firstName}`;
  const responce = await fetch(url);

  if (!responce.ok) {
    alert(`Error ${responce.status}`);
    return;
  }
  const human = await responce.json();
  if (human.gender){
    alert(`${human.name} is ${human.gender}`);
  }
  else{
    alert(`${human.name} not found in database`);
  }
} 