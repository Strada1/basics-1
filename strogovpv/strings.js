function howVerticalMessage(str) {
  let numOfLetters = Math.min(7, str.length);

  let outStr = '';
  let i = 0;
  if (str[0] === 's') {
    outStr = 'S\n';
    i = 1;
  }

  for ( i; i < numOfLetters; i++ ) {
    outStr += str[i] + '\n'
  }
  console.log(outStr);
}

howVerticalMessage('veryLongString')
howVerticalMessage('s');
howVerticalMessage('strada');


function checkSpam(str) {
  let stopWords = ['viagra', 'XXX', 'сиСьКи'];
  str = str.toLowerCase();
  for (let i = 0; i < stopWords.length; i++) {
    let pattern = stopWords[i].toLowerCase();
    if (str.includes(pattern) ) return true;
  }
  return false;
}

console.log( checkSpam('viagra самое эффективное средство купить') );
console.log( checkSpam('проститутки атакуют здание милиции') );

