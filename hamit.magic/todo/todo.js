const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
};

const list = {
	"create a new practice task": STATUS.IN_PROGRESS,
	"make a bed": STATUS.DONE,
	"write a post": STATUS.TO_DO,    
};

function changeStatus(key, keyStatus) {
    if (key in list) {
        list[key] = keyStatus;
    }
    else {
        console.log('задание ' + key + " осутсвует");
    }
}

function addTask(key) {
    if (typeof(key) != 'object') {
        list[key] = STATUS.TO_DO;
    }
    else {
        console.log('Извините такое задание добавить невозможно');
    }
}

function deleteTask(key) {
    if (typeof(list.addTask) === 'function') {
        console.log('задание ' + key + ' нет для удаления');
    }
    else if (key in list) {
        delete list[key];
    }
    else {
        console.log('задание ' + key + ' нет для удаления');
    }
}

function showList() {
    console.log('Todo:')
    for (key in list) {
        if (list[key] === STATUS.TO_DO) {
            console.log('\t' + key);
        }
    }
    console.log('In Progress:');
    for (key in list) {
        if (list[key] === STATUS.IN_PROGRESS) {
            console.log('\t' + key);
        }
    }
    console.log('Done:');
    for (key in list) {
        if (list[key] === STATUS.DONE) {
            console.log('\t' + key);
        }
    }
}

changeStatus("write a post", STATUS.IN_PROGRESS);
changeStatus("write a pot", STATUS.DONE);
addTask("lern JS");
addTask('have a walk');
deleteTask("addTask");
addTask('testing');
showList();
