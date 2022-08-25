function camelize(str) {
  let strArray = str.split('-');
  let newStrArray = strArray.map(function (element, index) {
    if (index !== 0) {
      return element[0].toUpperCase() + element.slice(1);
    }
  });
  let newStr = newStrArray.join();
  return newStr;
}
console.log(camelize('background-color'));
console.log(camelize('list-style-image') == 'listStyleImage');
console.log(camelize('-webkit-transition') == 'WebkitTransition');
