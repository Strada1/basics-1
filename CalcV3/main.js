const operations = {
    add: "+",
    sub: "-",
    multi: "*",
    divide : "/",
  };

function calc() {
  let firstNumber = +document.getElementById("firstNumder").value;
  let secondNumber = +document.getElementById("secondNumber").value;
  let operator = document.getElementById("select").value;


  if (secondNumber == 0 && operator == "/") {
    alert("На ноль делить нельзя");
  } 



  switch (operator) {
    case operations.add:
      return firstNumber + secondNumber;
    case operations.multi:
      return firstNumber * secondNumber;
    case operations.sub:
      return firstNumber - secondNumber;
    case operations.divide:
      return firstNumber / secondNumber;
  }
}




//Фуекция добавления

function addedResultDOM(){
  let element = document.querySelector(".result");
  let div = document.createElement("div");
   div.className = "calculation__result";
   div.innerHTML = +calc().toFixed(10);
   element.append(div);
   div.addEventListener("click", () => div.remove());
}




  



let btn = document.querySelector(".button");
btn.addEventListener("click", () => addedResultDOM());












