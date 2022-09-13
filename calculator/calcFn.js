export function calc(a, b, operation) {
  switch (operation) {
    case 'addition':
      return a + b
      break
    case 'subtraction':
      return a - b
      break
    case 'multiplication':
      return a * b
      break
    case 'division':
      return a / b
      break
    case 'modulo':
      return a % b
      break
  }
}
