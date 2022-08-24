function showVerticalMessage (word) {
    let symbols = word.length
    let newWord
    if (word[0] === 's') {
        newWord = word[0].toUpperCase()+word.slice(1,word.length)
    } else {
        newWord = word
    }
    for (i=0; i<7 && i<symbols; i++) {
        console.log(newWord[i])
    }
}
showVerticalMessage('helloWorld')