let calc = {
    read(op1, op2) {
        this.a = op1;
        this.b = op2;
    },
    add() {
        return this.a + this.b;
    },
    multi() {
        return this.a * this.b;
    },
    subtract() {
        return this.a - this.b;
    },
};
calc.read(5, 7);
console.log(calc.add());
console.log(calc.multi());
console.log(calc.subtract());
console.log(calc)