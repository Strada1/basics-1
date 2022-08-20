const todo = {};

const status = {
    work: 'в работе',
    planned: 'запланированно',
    done: 'сделано',
};
function addTask (name, status) {
    todo[name] = status
};
function changeStatus (name, status) {
//     todo[name] = status 
addTask(name, status);
};
function deleteTask (name) {
    delete todo[name]
};
function showList () {
    console.log('Задачи:');
    for (key in todo) {
    console.log(`${key} : ${todo[key]}`)
    };
};
addTask ('Cделать задание на сегодня', status.work);
addTask('Позавтракать', status.done);
changeStatus('Сделать задание на сегодня',status.done);
showList();
deleteTask('Позавтракать');
showList();
