// let myName = "Alex";
// let age = 22;
// const isMale = true;

// const MY_BIRTHDAY = "13.11.1999";

// console.log(typeof myName);
// console.log(typeof age);
// console.log(typeof isMale);

// console.log(
//   `My name is ${myName}. I am ${age} years old and I'm a ${isMale} JS developer. My date of birth is ${MY_BIRTHDAY}.`
// );

// let u;
// const n = null;
// const b = 1 > 0;
// const nan = "fff" / 3;

// console.log(u, n, b, nan);

const calc = (a, b, operation) => {
  a = +prompt("Введите первое число.", "");
  b = +prompt("Введите второе число", "");
  operation = prompt("Введите название операции");

  //   if (typeof b === "number" && typeof a === "number") {
  //     if (operation === "add" || operation == "+") {
  //       return a + b;
  //     } else if (operation === "multi" || operation === "*") {
  //       return a * b;
  //     } else if (operation === "subtract" || operation === "-") {
  //       return a - b;
  //     } else {
  //       return alert(
  //         "К сожалению, на данный момент мы не можем выполнить эту операцию."
  //       );
  //     }
  //   } else {
  //     return alert("Вы ввели не число, введите числа и попробуйте еще раз.");
  //   }
  // };

  switch (operation) {
    case "add":
      alert(a + b);
      break;
    case "multi":
      alert(a * b);
      break;
    case "subtract":
      alert(a - b);
      break;
    default:
      alert("Эта операция не поддерживается");
  }
};

calc();

// console.log(calc(4, 5, "+"));
