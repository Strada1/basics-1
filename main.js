const $arg1 = document.querySelector('#arg1')
const $arg2 = document.querySelector('#arg2')
const $operation = document.querySelector('select')
const $equal = document.querySelector('.equal')
const $result = document.querySelector('.result')



$equal.addEventListener('click', () => {
  const arg1 = Number($arg1.value)
  const arg2 = Number($arg2.value)
  const operation = $operation.value

  switch (operation) {
    case '+':
      return $result.innerHTML = arg1 + arg2;

    case '*': 
      return $result.innerHTML = arg1 * arg2;

    case '-':
      return $result.innerHTML = arg1 - arg2;

    case '/':
      if (!arg2) {
        alert('Invalid argument')
        throw new Error('Invalid argument');
      } else {
        return $result.innerHTML = (arg1 / arg2).toFixed(2);
      } 
      
    default: 
      alert(`Unknown operation: ${operation}`)
      throw new Error(`Unknown operation: ${operation}`);
  }
})