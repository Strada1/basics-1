// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
//   }
// console.log(( ucFirst("stringify") ));

// function checkSpam (str) {
//     let spam = str.toLowerCase()
//     return  spam.includes('viagra') || spam.includes('xxx')
// }

// console.log(checkSpam('buy ViAgRA now'))
// checkSpam('free xxxxx')
// checkSpam("innocent rabbit")

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ? str.slice(0, 21) + '...' : str;
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. Чтобы получилось вот так:
// showVerticalMessage('strada')
// S
// t
// r
// a
// d
// a
// Если строка начинается с буквы "s" - нужно вывести эту строку

// function showVerticalMessage(str) {
//     let newStr = str ? str[0].toUpperCase() + str.slice(1) : null;
//     if (newStr.length > 7) {
//         newStr.slice(0, 6);
//     }
//     for (let char of newStr) {
//         console.log(`${char}\n`);
//     }
// }
// console.log(showVerticalMessage("stadaa777a"));

function showVerticalMessage(str) {
    if (str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
    } else if (newStr.length > 7) {
        newStr.slice(0, 7);
    }
    for (let char of str) {
        console.log(`${char}\n`);
    }

    // let newStr =str
    // if (str) {
    //     str[0].toUpperCase() + str.slice(1);
    // }
    // if (str.length > 7) {
    //     str.slice(0, 6);
    // }
    // for (let char of str) {
    //     console.log(`${char}\n`);
    // }
}
console.log(showVerticalMessage("stradaaaaaaaaaa"));
