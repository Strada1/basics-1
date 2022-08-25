// learnJs №1
function camelize(str) {
  let strArray = str.split('-');
  let newStrArray = strArray.map(function (element, index) {
    if (index !== 0) {
      return element[0].toUpperCase() + element.slice(1);
    } else {
      return element;
    }
  });
  let newStr = newStrArray.join('');
  return newStr;
}
console.log(camelize('background-color'));
console.log(camelize('list-style-image') == 'listStyleImage');
console.log(camelize('-webkit-transition') == 'WebkitTransition');

// learnJs №2
function filterRange(arr, a, b) {
  arr.filter(function (item) {
    return item >= a;
  });
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console.log(arr);
