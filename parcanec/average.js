function getAverage(marks){
  let sum = 0
  for (let i=0; i < marks.length; i++) {
    sum = sum + marks[i]
  }
   return average = Math.floor(sum / marks.length)
}