calculation.addEventListener("click", calc);

function calc() {
  let operation = document.getElementById("func").value;
  let a = document.getElementById("number1").value;
  let b = document.getElementById("number2").value;
  let result = document.getElementById("result");
  let history = document.querySelector(".history");
  if (a == "" || b == "") {
    result.innerHTML = "error";
    result.style.background = "red";
    setTimeout(() => (result.style.background = null), 1000);
  } else {
    let addDiv = function () {
      let div = document.createElement("button");
      div.className = "alert";
      div.innerHTML = c;
      history.append(div);
      div.onclick = function(){
        div.remove()
      }
    };
    switch (operation) {
      case "+":
        c = +a + +b;
        result.innerHTML = c;
        addDiv();
        break;
      case "*":
        c = a * b;
        result.innerHTML = c;
        addDiv();
        break;
      case "-":
        c = a - b;
        result.innerHTML = c;
        addDiv();
        break;
      case "/":
        c = a / b;
        result.innerHTML = c;
        addDiv();
        break;
    }
  }
}
