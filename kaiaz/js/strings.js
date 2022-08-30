let someString = "sada";

function showVerticalMessage(str) {
  let firstChar = str.codePointAt(0);
  let newString;
  if (str.length >= 7) {
    newString = str.slice(0, 6);
  } else {
    newString = str;
  }

  if (firstChar === 115) {
    newString = newString.charAt(0).toUpperCase() + newString.slice(1);
  }

  for (let char of newString) {
    console.log(`${char}`);
  }
}
showVerticalMessage(prompt("Введите строку", "strada"));
