const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
};

const list = {
    "create a new practice task": STATUS.IN_PROGRESS,
    "make a bed": STATUS.DONE,
    "write a post": STATUS.TO_DO,
};

function addTask (goal) {

    if (goal in list) {

        list[goal] = STATUS.TO_DO;
        console.log("Task added");
    }
};

function deleteTask (goal) {
    if (goal in list) {

        delete list[goal];
        console.log("Task deleted");
    }
};

function changeStatus (goal, status) {
    if (goal in list) {

        list[goal] = status;
        console.log("Status changed");
    }
};

function showList () {
    
	for (goal in list) {

        console.log(`${list[goal]}: \n\t${goal}`);

	}

};


addTask('cook breakfast');
addTask('have a walk');
deleteTask('have a walk');
deleteTask('make a bed');
changeStatus('create a new practice task', STATUS.DONE);
changeStatus('cook breakfast', STATUS.IN_PROGRESS);
showList();
