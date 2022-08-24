function showVerticalMessage(str) {
let strUP = str[0].toUpperCase();
str = str.substr(1, 6);
for (let char of strUP) {
    console.log(char);
}
for (let char of str) {
    console.log(char);
}
}
let str = prompt();
showVerticalMessage(str);
/*let calculator = {
    
    read(){
         this.oper1= +prompt("Введите первый операнд", "");
         this.oper2 = +prompt("Введите второй операнд", "");
    },
    
    opers(){
     this.operation = prompt("Введите оператор", "");
    },
    
    valid(operation) {
        if(this.operation == "add") {
            return this.oper1 + this.oper2;
        } else if(this.operation == "mult") {
            return this.oper1 * this.oper2;
        } else if(this.operation == "sub") {
            return this.oper1 - this.oper2;
        } else if(this.operation == "div") {
            return this.oper1 / this.oper2;
        }
    }
  
};

calculator.read();
calculator.opers();
console.log(calculator.valid());
*/