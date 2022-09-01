function printNumbers (from,to) {
   let end = (to*1000 - from*1000)+1000
   let timerId = setInterval(() => console.log(from++),1000)
   setTimeout(()=>{clearInterval(timerId);console.log(to)},end)
}
printNumbers(7,18)

function printNumberS (from,to) {
   let end = (to*1000 - from*1000)+1000
   let timerId = setTimeout(function tick() {
      console.log(from++);
      timerId = setTimeout(tick,1000);
      },1000);
   setTimeout(()=>{clearTimeout(timerId);console.log(to)},end)
}
printNumberS(1,10)
