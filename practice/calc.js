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

  let button = document.createElement('button')
  button.innerHTML = 'Удалить'

  let foo = document.body.appendChild(button)
  console.log('button', button)


  let res = document.getElementById('ul')
  res.className = 'element'

  let result = calcSwitch(select.value, Number(value1), Number(value2))

  let li = document.createElement('li')
  li.innerHTML = `Result: ${result} ${foo}`

  res.append(li);
})