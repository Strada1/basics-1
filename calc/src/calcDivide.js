
export function divide(){
    let firstNumber = document.querySelector(".firstNumber").value;
    let secondNumber = document.querySelector(".secondNumber").value;
    let result = document.querySelector(".result");

    if (secondNumber === "0"){
        result.textContent = "can't divide by zero"
    } else{
        return  firstNumber / secondNumber;
    }
}