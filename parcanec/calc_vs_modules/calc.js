import {div} from './division.js'

function calc (firstNumb, secondNumb, action){
  function add(firstNumb, secondNumb) {
          return (firstNumb + secondNumb)
          }
  function multi(firstNumb, secondNumb) {
          return (firstNumb * secondNumb)
          }
  function subtract(firstNumb, secondNumb) {
          return (firstNumb - secondNumb)
          }
  let operations = {
      'add': add(firstNumb, secondNumb),
      'multi': multi(firstNumb, secondNumb),
      'subtract': subtract(firstNumb, secondNumb),
      'div': div(firstNumb, secondNumb),
      }
  
  let result = operations[action]
  if (action in operations) {
    return result
    } else {
      return 'Введено неизвестное действие' 
    }
}
function resultFunc(){
    let firstNumb = Number(document.querySelector('#firstNumb').value) 
    let secondNumb = Number(document.querySelector('#secondNumb').value)
    let action = document.querySelector('select').value
    let result = document.getElementById('result')
    result.innerText = calc (firstNumb, secondNumb, action)
resultHistory(calc(firstNumb, secondNumb, action))
    }
document.querySelector('button').addEventListener('click', resultFunc)
    
//-----
function resultHistory (result){
    let div = document.createElement('div')
    let br = document.createElement('br')
    div.textContent = result
    div.addEventListener('click', delHistoryElement)
    document.querySelector('#history').prepend(div)
}

function delHistoryElement(event){
  event.target.remove()
}
