export const OPERATIONS = {
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTI: 'multi',
}

export function calculate(operand1, action, operand2) {
    switch (action) {
        case OPERATIONS.ADD:
            return operand1 + operand2;
        case OPERATIONS.SUBTRACT:
            return operand1 - operand2;
        case OPERATIONS.MULTI:
            return operand1 * operand2;
    }
}