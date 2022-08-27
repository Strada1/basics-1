// Задача с LearnJavaScript №1

function ucFirst(str) {
    if(typeof(str) === "string") {
        console.log(str[0].toUpperCase() + str.slice(1));
    } else console.log("Проверка не пройдена");
}

ucFirst("denis");


// Задача с LearnJavaScript №2

function checkSpam(str) {
let lowerStr = str.toLowerCase();
    
    if(typeof(lowerStr) != "string") {
        return;    
    } else if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
        console.log("True");
    } else console.log("false");
}

checkSpam("I buy Viagra to the XXX Shop");
checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");


// Задача с LearnJavaScript №3

function truncate(str, maxlength) {
    if(str.length > maxlength) { 
        console.log(str.slice(0,maxlength - 1) + "...");
    } else {
        console.log(str);
    }
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);