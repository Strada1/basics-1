const operand1 = document.querySelector('#operand1')
const operand2 = document.querySelector('#operand2')
const operation = document.querySelector('#operation')
const equalsButton = document.querySelector('#euqalsButton')
const result = document.querySelector('#result')

const operations = {
  addition: '+',
  subtraction: '-',
  multiplication: '*',
  division: '/',
  modulo: '%',
}

function calc(a, b, operation) {
  switch (operation) {
    case 'addition':
      return a + b
      break
    case 'subtraction':
      return a - b
      break
    case 'multiplication':
      return a * b
      break
    case 'division':
      return a / b
      break
    case 'modulo':
      return a % b
      break
  }
}
// console.log(calc(10, 2, 'addition'))

equalsButton.addEventListener('click', (e) => {
  e.preventDefault()

  console.log(calc(+operand1.value, +operand2.value, operation.value))
  result.textContent = Math.trunc(
    calc(+operand1.value, +operand2.value, operation.value),
  )
})
