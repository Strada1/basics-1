answer.addEventListener('click', calc)


function calc() {
action = document.getElementById('action').innerHTML
a = document.getElementById('number1').innerHTML
b = document.getElementById('number2').innerHTML
result = document.getElementById('result').innerHTML
{
    switch (action) {
      case "+":
        result = (a + b);
        break;

      case "-":
        result = (a - b);
        break;
      
        case "*":
        result = (a * b);
        break;

        case "/":
          result = (a / b);
          break;
    }
  }

}