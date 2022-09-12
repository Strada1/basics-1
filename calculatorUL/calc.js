export function calc (a,b,operator) {

    switch(operator) {

           case "+":
           return +(+a + +b);

           case "-":
           return +(+a - +b);

           case "*":
           return  +(+a * +b);

           case "/":
           return  +(+a / +b);
    }
}