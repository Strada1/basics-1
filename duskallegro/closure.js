function f() {
    let value = Math.random();

    function g() {
        console.log(value);// debugger; // в консоли: напишите alert(value); Такой переменной нет!
    }

    return g;
}

let g = f();
g();

function buildFun(n){
    var res = []

    for (var i = 0; i< n; i++)  {
        let k = i;

        res.push(function(){
            return k;
        })
    }
    return res;
}

let generatedFunctions = buildFun(10);
console.log(generatedFunctions[0]());
console.log(generatedFunctions[1]());

function getAverage(marks)  {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return Math.floor(sum / marks.length);
}