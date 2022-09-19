function readData(data) {
	return JSON.stringify(data);
};

export function writeData(data) {
	try {
		localStorage.setItem('data', readData(data));
		let returnData = JSON.parse(localStorage.getItem('data'));

		return returnData;
	} catch (error) {
		if (error === QUOTA_EXCEED_ERR) {
			console.log(error)
		};
	};
};