// Строки
const usFirst = (str) => {
  if (!str) return '-';
  return str[0].toUpperCase() + str.slice(1);
}

console.log(usFirst('nanana'));
console.log(usFirst('qwerty'));
console.log(usFirst(''));

const checkSpam = (str) => {
  return str.includes('viagra') || str.includes('xxx');
}

console.log(checkSpam('viagra ykvl nkpfllf'));
console.log(checkSpam('V i a gra ykvl nkpfllf'));
console.log(checkSpam('ffff xxx ykvl nkpfllf'));

const showVerticalMessage = (str) => {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[0] === 's') {
      str = str[0].toUpperCase() + str.slice(1);
    }
    if (str.length > 7) {
      str = str.slice(0, 7);
    }
    console.log(str[i]);
  }
}

showVerticalMessage('slolololali');
showVerticalMessage('stradada');

// Массивы

const styles = ['джас', 'блюз'];
styles.push('рок-н-рол');
console.log('1', styles);
styles[Math.ceil((styles.length - 1) / 2)] = 'Классика';
console.log('2', styles);
const firstElement = styles.shift();
console.log('3', firstElement);
console.log('4', styles);
styles.unshift('Реп', 'Регги');
console.log('5', styles);

const sumInput = () => {
 let arrNumbers = [];
 while (true) {
   let num = prompt('Введте число', '0');
   if (num === '' || num === false || num === null) {
     break;
   }
   arrNumbers.push(+num);
 }
 console.log(arrNumbers);

 let sum = 0;
  for (let number of arrNumbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput());

const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (const item of arr) {
    currentSum += item;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}

console.log(getMaxSubSum([1, 2, -2, 3, 4, 0, -5, 4]))