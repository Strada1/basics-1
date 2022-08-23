
function showVerticalMessage(strada) {
  if (strada.startsWith('s')) {
    let upperCase = strada[0].toUpperCase()
    let strSlice = strada.slice(1)
    strada = upperCase + strSlice
  }

  if (strada.length >= 7) {
    console.log(strada.slice(0, 7))
    strada = strada.slice(0, 7)
  }

  for (let char of strada) {
    console.log(char)
  }

}


console.log(showVerticalMessage('strada'))
console.log(showVerticalMessage('nostrada'))
