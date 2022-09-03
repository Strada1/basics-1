// closure
function buildFun(n){
	var res = [];
	
	var num = [];
	for(var i = 0; i < n; i++){
	  num.push(i);
	}
	
	num.map(elem => res.push(() => elem));
  
	return res;
}

var count = 10;

for(var i = 0; i < count; i++){
	console.log(buildFun(count)[i]());
}


// avarage
function getAverage(marks){
	return Math.floor(marks.reduce((prev, item) => prev + item, 0) / marks.length);
}
console.log(getAverage([2,4,5,3]));