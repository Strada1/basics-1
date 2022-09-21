function calculator(action, a, b)  {
  switch (action)  {
     case 'add':
	return a + b;
     case 'multi':
	return a * b;
     case 'subtract':
	return a - b;
  }
};

console.log("1 + 2 = " + calculator('add', 1, 2));
console.log("2 * 3 = " + calculator('multi', 2, 3));
console.log("3 - 4 = " + calculator('subtract', 3, 4));
