const list = {
	'create a new practice task': 'In Progress',
	'make a bed': 'Done',
	'write a post': 'To Do',
    'go to the gym': 'In Progress',
    'make dinner': 'To Do',
    'walk the dog': 'Done',
};

function changeStatus(task, status) {
    if (typeof(task) == 'string' && typeof(status) == 'string') {
        if([task] in list) {
            list[task] = status;
        } else {
            console.log(`Задача отсутсвует в списке`);
        }
    } else {
    console.log(`Ошибка, вводимые данные должны быть строками`)
    };
};

function addTask(task) {
    if (task in list) {
        console.log(`${task} уже есть в списке`);
    } else if (typeof(task) == 'string') {
        list[task] = 'To Do';
    } else {
        console.log(`Ошибка, вводимые данные должны быть строками`);
    }
};

function deleteTask(task) {
    if ([task] in list) {
        delete list[task];
    } else {
        console.log(`Ошибка, данного свойства нет в списке`);
    };
};

function showList(list) {
    
    console.log(`Todo:`)
    for (task in list) {
        if (list[task] == 'To Do') {
            console.log(`\t${task}`);
        };
    };

    console.log(`In Progress:`)
    for (task in list) {
        if (list[task] == 'In Progress') {
            console.log(`\t${task}`);
        };
    };

    console.log(`Done:`)
    for (task in list) {
        if (list[task] == 'Done') {
            console.log(`\t${task}`);
        };
    };
};


changeStatus('write a post', 'In Progress');
changeStatus(345, true);

addTask('go to market');
addTask('go to market');
addTask(2456);

deleteTask('write a post');
deleteTask('write a post');

showList(list);
