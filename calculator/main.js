 /* Lesson 5. Переменные и типы
const MYNAME = 'Dmitriy';
let myAge = 21
console.log (MYNAME, myAge);

let myNameIsAnton = false;
let myRealAge = null;
const DAYS_IN_MAY = 31;
let newUsername = "Игорь";
console.log (myNameIsAnton, myRealAge, DAYS_IN_MAY, newUsername);

let a = "" +1 +0;
let b = "Text" +" " + "Menu";
let c = 123 **3;
let heigth = "182";
let weight = "72";
let name = true;
console.log(c);
console.log(+name)
console.log( +heigth / +weight)
console.log(a,b);

let age = 21
if (age < 3) {
  console.log ('Здравствуй, малыш!');
} else if (age < 18) {
    console.log ('Привет!');
} else if (age < 100) {
    console.log ('Здравствуйте!');
} else {
    console.log ('Какой необычный возраст!')
}


let login = prompt('Введите логин:', '');
if (login === 'Админ') {
    let pass = prompt('Введите пароль', '');
    if (pass =='Я главный'){
        alert('Здравствуйте!');
     } else if (pass == '' || pass === null) {
     alert('Отменено');
         } else {
            alert('Неверный пароль');
            }
} else if (login === '' || login === null) {
    alert('Отменено');
} else {
    alert('Отменено')
}
   

let a = prompt('Введите значение a: ', ``);
let b = prompt ('Введите значение b: ', ``);
let func = prompt ('Выберите действие: 1 - сложение, 2 - вычитание 3 - умножение', '');
   if (func == 1) {
       alert(add(a,b));
       } else if (func == 2) {
           alert(subtract(a,b));
       } else if ( func == 3) {
           alert(multi(a,b));
       } else {
           alert('Введено неверное преобразования!');
       }
function add (a, b) {
   return +a + +b;
   }

function subtract (a, b) {
   return a - b;
   }
function multi (a, b) {
   return a * b;
    }
     */