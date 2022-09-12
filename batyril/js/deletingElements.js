export function deletingElements(event) {
  if (event.target.className === 'calculator__previous-result'){
    event.target.remove();
  }
}
