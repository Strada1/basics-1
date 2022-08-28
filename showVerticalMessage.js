let strada = 'strada'

const showVerticalMessage = function (word) {
  if (word[0] === 's') {
    // uppend uppercase word
    word = word[0].toUpperCase() + word.slice(1)

    if (word.length > 7) {
      // print the word if >7  letters
      word
        .slice(0, 7)
        .split('')
        .forEach((char) => console.log(char))
    } else {
      word.split('').forEach((char) => console.log(char))
    }
  } else {
    console.log("Your word must start with letter 's'")
  }
}

showVerticalMessage(strada)
