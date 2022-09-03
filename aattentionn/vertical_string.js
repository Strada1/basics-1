function showVerticalMessage(string) {

    let result;


    if (string.charAt(0) === 's') {

        result = `${string.charAt(0).toUpperCase() + string.slice(1)}`;
    }


    for (let char = 0; char < 7; char++) {
        console.log(result[char]);
    }

};

showVerticalMessage('strada');

// задачка 1 с learn_js

function ucFirst(str) {

    console.log(str[0].toUpperCase() + str.slice(1));

    };

ucFirst("вася");

// задачка 2 с learn_js

function checkSpam(str) {

    let lowerString = str.toLowerCase();

    return lowerString.includes('viagra') || lowerString.includes('xxx');
};

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// задачка 3 с learn_js

function truncate(str, maxlength) {

    if (str.length > maxlength) {
        return `${str.slice(0, maxlength) + "..."}`
    } else {
        return str;
    }
};

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
