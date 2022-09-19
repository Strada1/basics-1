const STATUS = {
	DONE: "Done",
	TO_DO: "To Do",
};

const PRIORITY = {
	HIGH: 'high',
	LOW: 'low',
};

const list = [];

const forms = document.querySelectorAll('form');
const priorityHigh = document.querySelector('.high-list');
const priorityLow = document.querySelector('.low-list');

export {
	STATUS,
	PRIORITY,
	list,
	forms,
	priorityHigh,
	priorityLow,
}