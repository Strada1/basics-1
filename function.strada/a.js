function showVerticalMessage(words) {
    for (let char of words) {
    }
    if (words[0] === "s") {
        console.log(words[0].toUpperCase() + words.slice(1, 7))
    } else {
        console.log(words[0].toLowerCase() + words.slice(1,7));
    }
}

showVerticalMessage("pipipipopopopi");