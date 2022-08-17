function calc(action, a, b) {
  const operations = {
    add: '+',
    sub: '-',
    multy: '*'
  }

  if (operations[action] === undefined) return 'Action is not supported';
  if (typeof a !== 'number' || typeof b !== 'number') return 'Only numbers, please';

  return eval(a + operations[action] + b);
}

console.log( calc('multy', 'АВпррп', 7) );
console.log( calc('multy', '8', 7) );
console.log( calc('mul', 5, 7) );
console.log( calc('multy', 5, 7) );