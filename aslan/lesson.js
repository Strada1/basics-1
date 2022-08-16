function clack(operation,a,b) {
switch (operation) {
    case '+':
       return (a+b);
        break;
    case '*':
       return (a*b);
        break;
    case'-':
       return (a-b);
        break;
}
}
console.log(clack('+',5,3));
console.log(clack('*',3,2));
console.log(clack('-',5,3));