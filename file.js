// function calc (move,a,b) {
//   let result;
//   if (move == "+") {
//     result = (a+b);
//     return result;
//   } else if ((move == ">") || (move == "<")) {
//     result = (a>b) ? b : a;
//     return result;
//   } else if (move == "-") {
//       result = (a-b);
//       return result; 
//   } else {
//     alert ("считать научись");
//   }
// }

// let a = +prompt("a?", '');
// let b = +prompt("b?", '');
// let move = prompt ("что делаем?", '');
// alert (calc (move,a,b));




// if (browser== 'Edge') {
//   alert ("You've got the Edge!");
// } else if (browser=='Chrome') {
//   alert( 'Okay we support these browsers too' );
// } else if (browser=='Firefox') {
//   alert( 'Okay we support these browsers too' );
// } else if (browser=='Safari') {
//   alert( 'Okay we support these browsers too' );
// } else if (browser=='Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// if (brouser== 'Edge') {
//   alert ("You've got the Edge!")
// } 
// else if ((brouser== 'Chrome')
// || (brouser== 'Firefox')
// || (browser=='Safari')
// || (browser=='Opera')) {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case '0':
//   alert ('Вы ввели число 0');
//   break;
//   case '1':
//   alert ('Вы ввели число 1');
//   break;
//   case '2':
//   case '3':
//   alert ('Вы ввели число 2 или 3');
//   break;
// }

// function calc (move,a,b) {
//   let result;
//   if (move == "+") {
//     result = (a+b);
//     return result;
//   } else if ((move == ">") || (move == "<")) {
//     result = (a>b) ? b : a;
//     return result;
//   } else if (move == "-") {
//       result = (a-b);
//       return result; 
//   } else {
//     alert ("считать научись");
//   } 
// }

function calc (move,a,b) {
  let result;
  switch (move) {
    case '+':
    result = (a+b);
    break;
    case '>':
    case '<':
    result = (a>b) ? b : a;
    break;
    case '-':
    result = (a-b);
    break;
  }
  console.log(result);
  return result;
}

let a = +prompt("a?", '');
let b = +prompt("b?", '');
let move = prompt ("что делаем?", '');
alert(calc (move,a,b));