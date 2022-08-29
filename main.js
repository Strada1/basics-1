
function checkInput(a,b) {
    let checkInput = (typeof a !== 'number' || typeof b !== 'number')
    if (checkInput) {
        return true;
    }
}

let calculator = {

// ... ваш код ...
    read(){
        this.a = "5";
        this.b = 3;
    },
    sum(){
        if ( checkInput(this.a,this.b) ) return "Is not number";
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};



calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

