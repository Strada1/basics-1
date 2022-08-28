function showVerticalMessage(str) {
let strUP = str[0].toUpperCase();
str = str.substr(1, 6);
for (let char of strUP) {
    console.log(char);
}
for (let char of str) {
    console.log(char);
}
}
let str = prompt();
showVerticalMessage(str);
