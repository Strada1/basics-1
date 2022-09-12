export function deletingExtraElements(numberElements,element) {
  if (numberElements >= 3){
    element.lastElementChild.remove()
  }
}
