function showVerticalMessage(words) {
    for (let char of words) {
        console.log(char[0].toUpperCase() + words.slice(1, 7))
    }
}

showVerticalMessage("strada");