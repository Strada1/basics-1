//Задания learn.js

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1); 
};

console.log(ucFirst("вася"));

function checkSpam(stroke) {
    stroke = stroke.toLowerCase();
    return stroke.includes("viagra") || stroke.includes("xxx");
};

console.log(checkSpam("xXxvideosos viaGRA"));

function truncate(stroka, maxlength) {
    if ( stroka.length > maxlength ) {
    return stroka.slice(0, maxlength -1 ) + "...";
    } else {
        return stroka;
    }
};
console.log(truncate("Дядя папич пошёл на поиски интересных вещей и нашёл ключ богдана на 9", 20));
console.log(truncate("Хочу на море"));

//Задание Страды

function showVerticalMessage(word) {
    if (word.lenght > 7) {
        word = word.slice(0, 7);
    }
    if (word[0] === 's') {
        word = word[0].toUpperCase() + word.slice(1);
        for (let letter of word) {
            console.log(letter);
            }
        } else {
        for (let letter of word) {
            console.log(letter);
        }
        }
    };

showVerticalMessage('matumbaman');
showVerticalMessage('strada');