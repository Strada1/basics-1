const btn = document.getElementById('btn')

btn.addEventListener('click', getGender)

async function getGender () {
    let firstName = document.getElementById('name').value
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    let response = await fetch(url)
    let commits = await response.json()

    if(commits.gender === null) {
        console.log('error')
    } else {
        return console.log(`${firstName} in ${commits.gender}`)
    }
    document.getElementById('name').value = ' '
}