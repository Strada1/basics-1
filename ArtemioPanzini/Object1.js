
let user = {};
user.name = "John";
user.surname = "Smith";

for (let prop in user){
console.log(prop);}

user.name = "Pete";

for (let prop in user){
    console.log(`${user[prop]} обособ`);}

delete user.name;

for (let prop in user){
    console.log(user[prop]);}


function isEmpty(object_nazvanie){
    for (let key in object_nazvanie){
        return false;
    }
    return true;
}

let schedule = {};
// true
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum_total = 0;
for (let sum in salaries){
    sum_total += salaries[sum]
}

console.log(sum_total);


function multiplyNumeric(object){
    for (let key in object){
        if (typeof object[key] == 'number'){
            object[key] = object[key] * 2;
        }
    }
}
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  for (let key in menu){
    console.log(menu[key]);
  }
  /* после вызова функции
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };*/