let calc = {
    read() {
        this.a = +prompt('a = ');
        this.b = +prompt('b = ');
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
calc.read();
console.log(calc.add());
console.log(calc.multi());
console.log(calc.subtract());