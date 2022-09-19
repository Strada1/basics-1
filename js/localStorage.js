import { list } from './const.js';

export function useLocalStorage() {
	const serialData = JSON.stringify(list);

	try {
		localStorage.setItem('data', serialData);
		let returnData = JSON.parse(localStorage.getItem('data'));

		return returnData;
	} catch (error) {
		if (error === QUOTA_EXCEED_ERR) {
			console.log(error)
		}
	}
};

