//  Task in Strada

function checkMessage(message) {
  if (!message) {
    return true;
  } else {
    return false;
  }
}
function showVerticalMessage(message) {
  if (checkMessage(message)) {
    console.log('Error message');
    return;
  }

  let result = '';
  if (message[0] === 's') {
    result = message[0].toUpperCase();
  }
  for (let pos = 1; pos < message.length && pos < 7; pos++) {
    result += '\n' + message[pos];
  }
  console.log(result);
}

showVerticalMessage('strada');

// HomeWork in LearnJS №1

function ucFirst(str) {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}
console.log(ucFirst('вася') === 'Вася');

// HomeWork in LearnJS №2

function checkSpam(str) {
  if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) return true;
}
console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam('innocent rabbit') == false);

// HomeWork in LearnJS №3

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    maxlength -= 1;
    return str.substring(0, maxlength) + '…';
  } else {
    return str;
  }
}
console.log(
  truncate('Вот, что мне хотелось бы сказать на эту тему:', 20) === 'Вот, что мне хотело…',
);

console.log(truncate('Всем привет!', 20) === 'Всем привет!');

// HomeWork in LearnJS №4

function extractCurrencyValue(str) {
  if (str.startsWith('$')) {
    return +str.slice(1);
  }
  return +str;
}
console.log(extractCurrencyValue('120') === 120);
