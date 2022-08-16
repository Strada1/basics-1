'use stict'

function calc(iden, a, b) {
	const operations = {
		add: a + b,
		multi: a * b,
		subtract: a - b,
	}

	for (let key in operations) {
		if (key == iden) {
			return operations[key]
		}
	}
}

