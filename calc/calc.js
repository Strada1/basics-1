let a = document.querySelector('.firstnumber')
let b = document.querySelector('.secondnumber')
let action = document.querySelector('.action')
let answer = document.querySelector('.answer')

/*a.addEventListener('click', calc)
b.addEventListener('click', calc)
action.addEventListener('click', calc)*/

answer.addEventListener('click', calc)


function calc() {
    switch (action) {
      case "+":
        console.log(a + b);
        break;

      case "-":
        console.log(a - b);
        break;
      
        case "*":
        console.log(a * b);
        break;

        case "/":
          console.log(a / b);
          break;
    }
  }

