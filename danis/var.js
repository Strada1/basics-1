function buildFun(n) {
	var res = [];

	function go(i) {
		res.push(function () {
			console.log(i);
			return i;
		});
	}

	for (var i = 0; i < n; i++) {
		go(i);
	}
	
	return res;

}


console.log(buildFun(10)[2]());
