import { calc } from './calcFn.js'

const container = document.querySelector('.container')
const operand1 = document.querySelector('#operand1')
const operand2 = document.querySelector('#operand2')
const operation = document.querySelector('#operation')
const equalsButton = document.querySelector('#euqalsButton')
const result = document.querySelector('#result')

// adding calc() to UI
let res
equalsButton.addEventListener('click', (e) => {
  e.preventDefault()

  res = calc(+operand1.value, +operand2.value, operation.value)
  result.textContent = Math.trunc(res)
})

// rendering list of results
// let ul = document.createElement('ul')
let ul = document.querySelector('.allResults')
// container.append(ul)
// ul.className = 'allResults'

equalsButton.addEventListener('click', (e) => {
  e.preventDefault()

  let li = document.createElement('li')
  li.textContent = res
  ul.append(li)

  // removing li when clicking it
  li.addEventListener('click', (e) => {
    e.target.remove()
  })
})
