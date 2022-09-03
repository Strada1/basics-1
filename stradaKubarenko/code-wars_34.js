const marks = [2,2,2,2];

function getAverage(marks){
   let sum = marks.reduce((accumulator, obj) => accumulator + obj,0);
   let average = sum / marks.length;
   let averageRound = Math.round(average);
   console.log(averageRound);
}
getAverage(marks);

marks = [1,2,3,4,5,];
getAverage(marks);

marks = [1,1,1,1,1,1,1,2];
getAverage(marks);