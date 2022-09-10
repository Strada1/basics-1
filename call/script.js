let button = document.getElementById("button");
export let result = document.getElementById("result");
button.addEventListener("click", check)
button.addEventListener("click", addResult)


    // function check() {
    //         calc()
    //     if (isNaN(results) !== false) {
    //         result.innerHTML = 'Введите числа!'
    //         }
    // }
    // let results;
    // function calc() {
    //     let number1 = +document.getElementById("num1").value;;
    //     let number2 = +document.getElementById("num2").value;
    //     let operation = document.getElementById("operation").value
        
    //     switch (operation) {
    //         case'+':
    //             results = number1 + number2;
    //             result.innerHTML = results;
    //             break;
    //         case '*': 
    //             results = number1 * number2;
    //             result.innerHTML = results
    //             break;
    //         case '-': 	
    //             results = number1 - number2;
    //             result.innerHTML = results
    //             break;
    //         case '/':
    //             results = number1 / number2
    //             result.innerHTML = results
    //     }

    // }
    import { check } from "./modul.js";
    check()
    import { results } from "./modul.js";
    import { calc } from "./modul.js";
    calc()

        function addResult () {
            listofresults.insertAdjacentHTML("afterbegin", `<div class="res" id="asd"><a href="#" id="tik">${results}</a> </div>`);
        }

        let deleteItem = document.getElementById("listofresults")
        deleteItem.addEventListener("click", hdf )

        function hdf () {
            tik.remove()
        }
 
        




   
 
 