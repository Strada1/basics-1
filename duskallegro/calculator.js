function calculator(action, a, b)  {
    let operations = {
        add: function (a, b) {
            return a + b;
        },
        multiply: (a, b) =>  {
            return a * b;
        },
        subtract: (a, b) =>  {
            return a - b;
        }};

    for (const [operationName, operationFunction] of Object.entries(operations))  {
        if (action === operationName)  {
            return operationFunction(a, b);
        }
    }
}

function getInput()  {
    let first = parseInt(prompt("Enter the first number: "));
    let second = parseInt(prompt("Enter the second number: "));
    let action = prompt("Enter the operation: ");

    return [first, second, action];
}

let input = getInput();
let first = input[0];
let second = input[1];
let action = input[2];

let result = calculator(action, first, second);
console.log("Result = " + result);
alert("Result = " + result);