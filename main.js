let button = document.getElementById("button");
let result = document.getElementById("result");
button.addEventListener("click", calc);


const operations = {
    add: "+",
    sub: "-",
    multi: "*",
}   

function calc(){
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;
    let operator = document.getElementById("operation").value;
    let results;


    switch(operator){
        case operations.add:
            results = (Number(a) + Number(b));
            result.innerHTML = +results;
            break;
        case operations.sub:
            results = (Number(a)-Number(b));
            result.innerHTML = results;
            break;
        case operations.multi:
            results = (Neumber(a)*Number(b));
            result.innerHTML = results;
            break;
    }
}
    

