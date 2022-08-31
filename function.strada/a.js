function showVerticalMessage(words) {
    if (words[0] === "s") {
        words = words[0].toUpperCase() + words.slice(1, 7)
        for (let char of words) {
            console.log(char);
        }
    } if (!(words[0] === "s")) {
        for (let char of words.slice(0, 7)) {
        console.log(char)
    }
}


}




