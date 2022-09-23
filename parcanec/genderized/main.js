const checkButton = document.querySelector('#checkGender')
const firstName = document.querySelector('#enteredName')
const serverUrl = 'https://api.genderize.io';
const result = document.querySelector('.result')

async function check(env) {
    env.preventDefault()
    result.textContent=''
    let url = `${serverUrl}?name=${firstName.value}`
    let response = await fetch(url)
    let chekBase = await response.json()
    gender = chekBase.gender
    if (gender!==null)
    result.insertAdjacentHTML('beforeend', `<img src=${gender==='male'?'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49190/men-s-room-emoji-clipart-md.png':'https://znaktb.by/image/cache/catalog/categories/znaki/obschestvennye/736-200x200.png'} width='200' height='200' alt=${gender} title=${gender} />`)
}

checkButton.addEventListener('click', check)