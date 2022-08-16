function calc(action = '', a, b) {
  switch (action) {
    case 'add':
      console.log(a + b);
      break;
    case 'multi':
      console.log(a * b);
      break;
    case 'substract':
      console.log(a-b);
      break;
    default:
      console.log('Такого действия нет.');
  }
}

(calc('add', 1, 2));
(calc('multi', 1, 2));
(calc('substract', 3, 2));
(calc('addd', 1, 2));
