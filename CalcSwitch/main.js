let operations = {
  add: "+",
  multi: "*",
  sub: "-",
};
function calc(a, b, action) {
  switch (action) {
    case operations.add:
      return a + b;
      break;
    case operations.sub:
      return a - b;
      break;
    case operations.multi:
      return a * b;
      break;
  }
}
console.log(calc(55, 5, operations.add));

/*
const operations = {
  add: "+",
  sub: '-',
  multi: '*',
}
function calc(operator, a, b){
  if(operator in operations){
      switch(operations[operator]){
          case '+':
              return a + b
          case '-':
              return a - b
          case '*':
              return a * b;
      }
  }else{
      return null
  }
}
*/

/*let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let a in user) {
  // ключи
  console.log( a );  // name, age, isAdmin
  // значения ключей
console.log( user[a] ); // John, 30, true
}*/
