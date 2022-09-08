alert("nachaly");
let button = document.getElementById("button")
let result = document.getElementById("result")

button.addEventListener("click", calc)

function calc (){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;
    let result = document.getElementById("result").value;
    
    
    if (number1 === "" || number2 === ""){
        alert("Write number");
    } else {
        switch(operation){
            
            case "+":
                result = +(+number1 + +number2);
                result.textContent = +result.toFixed(10);
                break;
                
                case "-":
                    result = +(+number1 - +number2);
                    result.textContent = +result.toFixed(10);
                    break
                    
                    case "*":
                        result = +(+number1 * +number2);
                        result.textContent = +result.toFixed(10);
                        break
                        
                        case "/":
                            result = +(+number1 / +number2);
                            result.textContent = +result.toFixed(10);
                            if (+number2 === 0 ){
                                alert ("no!")
                            }
                            break
                            
                        }
                    }
                }