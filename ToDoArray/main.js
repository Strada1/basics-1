const STATUS = {
    TO_DO: 'Нужно сделать',
    IN_PROGRESS: 'В процессе',
    DONE: 'Сделано',
}

const PRIORITY = {
    HIGH: 'Высокий',
    LOW: 'Низкий',
}

const list = [
    {name: 'Написать сценарий', status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH},
	{name: 'Уборка в комнате', status: STATUS.DONE, priority: PRIORITY.LOW},
    {name: 'Сварить суп', status: STATUS.DONE, priority: PRIORITY.HIGH},
	{name: 'Снять видео', status: STATUS.TO_DO, priority: PRIORITY.LOW},
    {name: 'Полить цветы', status: STATUS.TO_DO, priority: PRIORITY.HIGH},
    {name: 'Покормить кошку', status: STATUS.TO_DO, priority: PRIORITY.LOW},
];

function addTask(name, status, priority) {
    let task = list.find(item => item.name == name);
    let trueStatus = (status == STATUS.DONE || status == STATUS.IN_PROGRESS || status == STATUS.TO_DO);
    let truePriority = (priority == PRIORITY.HIGH || priority == PRIORITY.LOW);
    if (task === undefined) {
        if (typeof name == 'string' && trueStatus && truePriority) {
            list.push({name, status, priority});
            console.log(`+ Задача "${name}" добавлена!`);
        } else if (!trueStatus) {
            console.log(`- Задача НЕ добавлена. "${status}" - неверное значение статуса!`);
        } else if (!truePriority) {
            console.log(`- Задача НЕ добавлена. "${priority}" - неверное значение приоритета!`);
        } else {
            console.log('- Задача НЕ добавлена!');
        } 
    } else {
        console.log(`- Задача "${name}" уже существует!`);
    }
};

function changeStatus(name, status) {
    let task = list.find(item => item.name == name);
    let trueStatus = (status == STATUS.DONE || status == STATUS.IN_PROGRESS || status == STATUS.TO_DO);
    if (task === undefined) {
        console.log(`- Задачи "${name}" не существует!`); 
    } else {
        if (trueStatus && task.status !== status) {
            task.status = status;
            console.log(`+ Статус задачи "${name}" изменен на "${status}"!`)
        } else if (task.status == status) {
            console.log(`- Статус задачи "${name}" уже является таковым!`)
        } else {
            console.log(`- Статус задачи не изменен. "${status}" - неверное значение статуса!`);
        }
    }
}

function changePriority(name, priority) {
    let task = list.find(item => item.name == name);
    let truePriority = (priority == PRIORITY.HIGH || priority == PRIORITY.LOW);
    if (task === undefined) {
        console.log(`- Задачи "${name}" не существует!`); 
    } else {
        if (truePriority && task.priority !== priority) {
            task.priority = priority;
            console.log(`+ Приоритет задачи "${name}" изменен на "${priority}"!`)
        } else if (task.priority == priority) {
            console.log(`- Приоритет задачи "${name}" уже является таковым!`)
        } else {
            console.log(`- Приоритет задачи не изменен. "${priority}" - неверное значение статуса!`);
        }
    }
}

function deleteTask(name) {
    let task = list.find(item => item.name == name);
    if (task === undefined) {
        console.log(`- Задачи "${name}" не существует!`);
    } else {
        let taskPosition = list.indexOf(task);
        list.splice(taskPosition, 1);
        console.log(`- Задача "${name}" удалена!`)
    }
}

function showList() {
    console.log('\n\tСПИСОК ЗАДАЧ:')
    showTask(STATUS.TO_DO);
    showTask(STATUS.IN_PROGRESS);
    showTask(STATUS.DONE);
    console.log("");
}

function showTask(status) {
    console.log(`${status}:`);
    list.forEach(item =>{
        if (item.status === status) {
            console.log(`\t* ${item.name} (${item.priority} приоритет);`);
        }
    });
}

addTask("Пробежка", STATUS.TO_DO, PRIORITY.HIGH);

changeStatus("Пробежка", STATUS.IN_PROGRESS);

changePriority("Покормить кошку", PRIORITY.HIGH);

deleteTask("Снять видео");

showList();

changeStatus("Полить цветы", STATUS.TO_DO);

deleteTask("Вынести мусор");

showList();