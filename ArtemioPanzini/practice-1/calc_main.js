const operations = {
    add : 'add',
    multi: 'multi',
    sub: "sub",
};



function calc(selection_action, a, b){
    switch(selection_action){
        case operations.multi:
        case "*":
         return a*b;

        case operations.add:
        case "+":
            return a+b;

        case operations.sub:
        case "-":
            return a-b;
    }
}
console.log(calc("-", 4, 6))
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('sub', 3, 2));