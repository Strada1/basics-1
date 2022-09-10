import { ELEMENTS } from "./elements.js";

const OPERATION_ACTIVE_CLASS = 'calculator_operation--active'

function calc(operation, firstNumber, secondNumber) {
	const OPERATIONS = {
		ADD: '+',
		MULTI: '*',
		SUBTRACT: '-',
		DIVIDER: '/'
	}

	const ERRORS = {
		OPERATION: 'Unknown operation',
		NUMBERS: 'One or two numbers not defined',
		DEFAULT: 'Unknown error'
	}

	const isCorrectOperation = operation === OPERATIONS.ADD || operation === OPERATIONS.MULTI || operation === OPERATIONS.SUBTRACT || operation === OPERATIONS.DIVIDER;
	const isNumberExsist = firstNumber && secondNumber;

	if (!isCorrectOperation) return ERRORS.OPERATION;
	if (!isNumberExsist) return ERRORS.NUMBERS;

	switch (operation) {
		case OPERATIONS.ADD:
			return Number(firstNumber) + Number(secondNumber);
		case OPERATIONS.MULTI:
			return firstNumber * secondNumber;
		case OPERATIONS.SUBTRACT:
			return firstNumber - secondNumber;
		case OPERATIONS.DIVIDER:
			return firstNumber / secondNumber;
		default:
			return DEFAULT_ERROR;
	}
}

function oparationsNavigation(direction) {
	const directionDown = direction === 'down'
	const directionUp = direction === 'up'
	let currentOperationIndex;

	ELEMENTS.OPERATIONS.forEach((operation, i) => {
		const currentActiveOperation = operation.classList.contains(OPERATION_ACTIVE_CLASS)
		const isLastOperationActive = ELEMENTS.OPERATIONS[ELEMENTS.OPERATIONS.length - 1].classList.contains(OPERATION_ACTIVE_CLASS)
		const isFirstOperationActive = ELEMENTS.OPERATIONS[0].classList.contains(OPERATION_ACTIVE_CLASS)

		if (currentActiveOperation) currentOperationIndex = directionDown ? i + 1 : i - 1

		if (directionDown) {
			if (isLastOperationActive) currentOperationIndex = 0;
		}

		if (directionUp) {
			if (isFirstOperationActive) currentOperationIndex = ELEMENTS.OPERATIONS.length - 1;
		}

		operation.classList.remove(OPERATION_ACTIVE_CLASS)
	})

	ELEMENTS.OPERATIONS[currentOperationIndex].classList.add(OPERATION_ACTIVE_CLASS)
}

ELEMENTS.INPUTS.forEach(input => {
	input.addEventListener('keydown', e => {
		const isDigit = e.key >= 0 && e.key <= 9
		const isBackspace = e.key === 'Backspace'
		const isSpace = e.keyCode === 32

		if (!isDigit && !isBackspace || isSpace) e.preventDefault()
	})
})

ELEMENTS.OPERATIONS_NAVIGATION_NEXT.addEventListener('click', () => oparationsNavigation('down'));
ELEMENTS.OPERATIONS_NAVIGATION_PREV.addEventListener('click', () => oparationsNavigation('up'));
ELEMENTS.EQUAL_BUTTON.addEventListener('click', () => {
	const firstValue = ELEMENTS.INPUTS[0].value
	const secondValue = ELEMENTS.INPUTS[1].value
	const operation = document.querySelector(`.${OPERATION_ACTIVE_CLASS}`).textContent
	const result = calc(operation, firstValue, secondValue)
	const lastResultMarkup = `<div class="calculator_last-result">${result}</div>`

	ELEMENTS.RESULT.textContent = result
	ELEMENTS.LAST_RESULTS.innerHTML += lastResultMarkup 
})

ELEMENTS.LAST_RESULTS.addEventListener('click', function(e) {
	const target = e.target;
	const isLastResult = target.classList.contains('calculator_last-result')

	if(isLastResult) target.remove()
})