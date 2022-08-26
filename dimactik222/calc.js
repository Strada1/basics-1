function calc(func, a, b) {
  
  switch(func) {
      
  case "sum":
    return sum(a, b);
    break;
      
  case "subtract":
    return subtract(a, b);
    break;
      
  case "multi":
    return multi(a, b);
    break;
      
  default:
    console.log("Error!")
}
}


function sum(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multi(a, b) {
  return a*b;
}