import calc from "../modules/exCalc.js";
const result = document.querySelector('.result')
const valueOne = document.querySelector('.inputCalcOne')
const valueTwo = document.querySelector('.inputCalcTwo')
const operation = document.querySelector('.calculateSelect')
const saveResult = document.querySelector('.saveResult')



result.addEventListener('click', function () {
    if( valueOne.value !== "" && valueTwo.value !== "" ) {
        let newResult = calc(operation.value, valueOne.value, valueTwo.value).toFixed(2)
        let div = document.createElement('div')
        div.innerHTML = newResult
        saveResult.append(div)
        div.onclick = () => div.remove()
    } else  {
       return  alert('Заполните поле')
    }
})










