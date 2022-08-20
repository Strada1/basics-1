const operations = {
    add : 'add',
    multi: 'multi',
    sub: "sub",
};

function stringToNumber(x){
return x = +x;  
}

function calc(selection_action, a, b){
    
    if ((isFinite(a)==true)===isFinite(b)){
console.log (`vse super: ${a} ${selection_action} ${b}`);
    switch(selection_action){
        case operations.multi:
        case "*":
         return a*b;

        case operations.add:
        case "+":
            return +a + +b;

        case operations.sub:
        case "-":
            return a-b;
        default: 'Incorrect operator';
    }
}
else return 'sorry, incorrect numbers';
}
console.log(calc("-", 2, 'z'))
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('sub', 2, 3));