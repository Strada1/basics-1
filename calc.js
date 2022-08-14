function calc(a,b,operator) {
    if (operator === "add") {
     console.log(a + b);
    } else if (operator === "multi") {
        console.log(a * b);
    } else if (operator === "substract") {
        console.log(a - b);
    }
};
calc (1,3,"add");
calc (1,3,"multi");
calc (1,3,"substract");