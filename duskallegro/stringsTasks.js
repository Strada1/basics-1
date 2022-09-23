// tasks from the website

// makes the first character capital
function ucFirst(s)  {
    let firstLetter = s.charAt(0);
    return firstLetter.toUpperCase() + s.slice(1);
}

console.log(ucFirst("smith"));
console.log(ucFirst(""));
console.log(ucFirst("a"));
console.log("---------------");

/*
 checks if the string contains 'viagra'
 or 'XXX', returns false otherwise
 */
function checkSpam(s)  {
    return s.toLowerCase().includes('viagra') ||
            s.toLowerCase().includes("xxx");
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
console.log("---------------");

function truncate(s, maxLength)  {
    if (s.length > maxLength)  {
        let result = s.slice(0, maxLength - 1);

        return result + "…";
    }


    return s;
}

console.log(truncate("Вот, что мне хотелось бы " +
    "сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
console.log("---------------");

function extractCurrencyValue(s)  {
    return parseFloat(s.slice(1));
}
console.log(extractCurrencyValue("$120"));
console.log("---------------");

// task from strada

/**
 * Converts the given string
 * to a vertical view (by printing it
 * vertically).
 *
 * @param s the string.
 */
showVerticalMessage = (s) =>  {
    let i = 0;
    let max = s. length < 7 ? s.length : 7;
    while (i < max)  {
        let letter = s.charAt(i);
        if (i === 0 && letter === 's')  {
            console.log(letter.toUpperCase());
        } else {
            console.log(letter);
        }

        i++;
    }
}
showVerticalMessage('strada');
console.log("---------------");
showVerticalMessage('stradatest');