const STATUS = {
    To_Do: 'To Do',
    In_Progress: 'In Progress',
    Done: 'Done'
}

const list = {
    "выучить английский до C1": STATUS.In_Progress,
    "приготовить обед": STATUS.Done,
    "переехать в Питер": STATUS.To_Do,
};

function changeStatus(task, status) {
    if (list[task]) {
        list[task] = status; console.log(`статус изменен на ${status} `)
    } else {
        console.log('нет такой задачи');
    }
}

function addTask(task) {
    if (task in list) {
        console.log(`задача "${task}" уже есть в списке`);
    } else {
        console.log(`задача "${task}" добавлена в список`);
    }
}

function deleteTask(task) {
    if (task in list) {
        console.log(`задача "${task}" удалена`);
    } else {
        console.log(`задача "${task}" не найдена в списке`);
    }
}


function showList() {
    for (let key in list) {
        console.log(list[key] + ':' + '\n' + key);
    }
}

changeStatus(["пойти гулять"], STATUS.Done);
addTask("переехать в Питер");
deleteTask("пойти гулять");
showList();
