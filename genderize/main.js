const formGender =  document.querySelector('.form')
const inputName = document.querySelector('.input')
const serverUrl = 'https://api.genderize.io';
const answer = document.querySelector('.space');



formGender.addEventListener('submit', genderInfo)

 function genderInfo (event) {
    event.preventDefault()
    // console.log(inputName.value)

    const url = `${serverUrl}?name=${inputName.value}`;
    
    const promise = fetch(url)
            promise
                        .then(result => result.json())
                        .then(result => {console.log (result)
                        return result;})
                        .then (result => {console.log (result.gender)
                        return result})
                        .then (result => {render (inputName.value, result.gender)})
    }
    
    function render (name ,gender ) {
        let div = document.createElement('div')
        div.className = 'space';
        div.textContent = name + ' is ' + gender;
        document.querySelector('.space').append(div)
    }
        



