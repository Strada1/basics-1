function calc (a,b,operator) {
    switch (operator) {
        case ("add"):
            console.log (a + b);
            break;
        case ("multi"):
            console.log (a * b);
            break;
        case ("substract"):
            console.log (a - b);
            break;
        default:
            console.log ("Данная операция находится на стадии разработки");
    }
}

calc(3,2,"add");
calc(3,2,"multi");
calc(3,2,"substract");
calc(3,2,"divide");
calc("3","BC","add");
calc("3","BC","substract");