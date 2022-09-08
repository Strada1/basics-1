let button = document.getElementById('buttonClick')

function calcSwitch(operator, a, b) {
  switch (operator) {
    case 'addition' :
      return a + b;
    case 'multiplication':
      return a * b
    case 'subtraction':
      return a - b
    case 'division':
      return a / b
    default:
      console.log('Error')
  }
}


button.addEventListener('click', () => {
  let select = document.getElementById('select')
  let value1 = document.getElementById('value1').value
  let value2 = document.getElementById('value2').value
  let res = document.getElementById('result')

  let result = calcSwitch(select.value, Number(value1), Number(value2))

  return res.innerHTML = `Result: ${result}`
})