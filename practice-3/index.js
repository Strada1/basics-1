const input = document.getElementById('input')
const serverUrl = 'https://api.genderize.io';


async function getName() {
  let firstName = input.value

  const url = `${serverUrl}?name=${firstName}`;

  let response = await fetch(url);
  let res = await response.json();

  console.log('response', response)
  console.log('res', res)

  if (res.gender === null) {
    alert('error')
  } else {
    alert(res.gender)
  }

}




