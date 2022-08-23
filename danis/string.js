function showVerticalMessage(str) {
    if (str.trim()[0] == "s") {
        return (str.trim()[0].toUpperCase() + str.trim().slice(1, 6)).split("").join("\n");
    } else {
        return str.trim().slice(0, 6).split("").join("\n");
    }
}

console.log(showVerticalMessage("strada"));