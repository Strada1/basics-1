


function calc(a,b,act){
    const operations =  {
    add : a+b,
    multi : a-b,
    sub : a*b
}
    switch(act) {
        case "add":
            return operations[act];
        case "multi":
            return operations[act];
        case "sub":
            return operations[act];
        default :
            return "error";
    }
}

console.log(calc(5,2,'multi'));
console.log(calc(5,2,'add'));
console.log(calc(5,2,'sub'));
console.log(calc(5,2,'magic'));