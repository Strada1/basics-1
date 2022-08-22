let operations = {
  'add': '+',
  'multi': '*',
  'subtract': '-',
  'deepClone': {
    '1': 1,
    '2': 2,
  },

  sayHi() {
    console.log(this['add']);
  },
}

operations.sayHi();

function calc(operation, a, b) {

  if(operation in this) {

    switch (this[operation]) {
      case '+':
        console.log(a + b);
        break
      case '*':
        console.log(a * b);
        break
      case '-':
        console.log(a - b);
        break
    }
  }else {
    console.log('error');
  }
}

operations.calc = calc;

operations.calc('add',3, 5);
operations.calc('multi',3, 5);
operations.calc('subtract',3, 5);

console.log(operations);

let cloneOperations = {};

for (let operationsKey in operations) {
  cloneOperations[operationsKey] = operations[operationsKey];
  if (typeof operations[operationsKey] === 'object'){
    operations[operationsKey] = Object.assign({}, operations[operationsKey])
  }
}


operations['deepClone']['1'] = 11111;

console.log(cloneOperations);

cloneOperations['add'] = '*';

cloneOperations.calc('add',3, 5);


