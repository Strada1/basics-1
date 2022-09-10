import { Delete } from './delete.js'
import { $arg1, $arg2, $operation, $equal, $result, $subResults } from './DOM.js'

$subResults.addEventListener('click', (event) => {
  Delete(event)
})

$equal.addEventListener('click', () => {
  const arg1 = Number($arg1.value)
  const arg2 = Number($arg2.value)
  const operation = $operation.value

  switch (operation) {
    case '+':
      let sum = arg1 + arg2
      $subResults.insertAdjacentHTML('beforeend', `<div class="sub-result">${sum}</div>`)
      return $result.innerHTML = sum;

    case '*':
      let multi = arg1 * arg2
      $subResults.insertAdjacentHTML('beforeend', `<div class="sub-result">${multi}</div>`) 
      return $result.innerHTML = multi;

    case '-':
      let sub = arg1 - arg2
      $subResults.insertAdjacentHTML('beforeend', `<div class="sub-result">${sub}</div>`)
      return $result.innerHTML = sub;

    case '/':
      if (!arg2) {
        alert('Invalid argument')
        throw new Error('Invalid argument');
      } else {
        let priv = (arg1 / arg2).toFixed(2)
        $subResults.insertAdjacentHTML('beforeend', `<div class="sub-result">${priv}</div>`)
        return $result.innerHTML = priv;
      } 
      
    default: 
      alert(`Unknown operation: ${operation}`)
      throw new Error(`Unknown operation: ${operation}`);
  }

})

