let button = document.getElementById("itog");
let res = document.getElementById("result");
button.addEventListener("click", calc);
function calc() {
  let result
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;
    let results;
    if (num1 === "" || num2 === "") {
      alert("Введите цифры");
      return true;
    }
    switch (operation) {
      case "+" :
          results = (+num1 + +num2);
          res.innerHTML = results.toFixed(2);
          break;
      case "-" : 
          results = (+num1 - +num2);
          res.innerHTML = results.toFixed(2);
          break;
      case "*" :
          results = (+num1 * +num2);
          res.innerHTML = results.toFixed(2);
          break;
      case "/" :
          if(+num2 === 0) {
            alert("на ноль пока нельзя");
            return true;
          };
          results = (+num1 / +num2);
          res.innerHTML = result;
          break
    }
}