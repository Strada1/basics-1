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