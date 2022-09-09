function printNumbers (from, to) {
  console.log(from)
  if (from < to){
    setTimeout(printNumbers,1000,++from, to);
  }
}
setTimeout(printNumbers,1000,5,10);
