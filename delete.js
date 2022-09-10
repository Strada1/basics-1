export function Delete(obj) {
  if (obj.target.className === 'sub-result') {
    obj.target.remove()
  } else {
    throw new Error('An attempt was made to delete a parent element')
  }
}