function showVerticalMessage(str) {
    if (typeof str == "string" && str[0] === str[0].toLowerCase()) {
        str = str[0].toUpperCase() + str.slice(1, 7);
        for (let char of str) {
            console.log(char);
        }
    }
}

showVerticalMessage("strada");