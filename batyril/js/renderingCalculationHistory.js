export function renderingCalculationHistory(arr,position){
  if (arr.length === 0){
    return
  }
  let divResult = document.createElement('div');
  divResult.classList.add('calculator__previous-result');
  divResult.textContent = `${arr[arr.length-1]}`
  position.after(divResult);
}
