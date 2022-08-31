const STATUS = {
    TODO : "To Do",
    IN_PROGRESS : "In Progress",
    DONE : "Done",
};

const list = [
    {name: 'create a post', status: 'In progress', priority : 'low'},
    {name: 'test', status: 'Done', priority: 'high'},
    {name: 'work', status: 'To Do', priority: 'high'},
    {name: 'sleep', status: 'To Do', priority: 'low'},
    {name: 'ToDoListMassive', status: 'Done', priority: 'very high'},
];


function changeStatus(tasksName, value) {
    let task = list.find(item => item.name == tasksName)
    if (list.includes(task)) {
        task.status = value;
    } else {
        console.log ('Задача отсутсвует или указана некорректна');
    }
};
//TEST:f changeStatus RESULT:{ name: 'test', status: 'To Do', priority: 'high' }
changeStatus('test', STATUS.TODO);
console.log(list[1]);


function addTask(vName, vStatus, vPriority) {
    list.push(
        {
        name : vName,
        status : vStatus,
        priority : vPriority,
    });
    console.log(`Индекс добавленной задачи: ${list.indexOf(list.find(item => item.name == vName))}`);
};
//TEST:f addTask RESULT:{ name: 'haircut', status: 'To Do', priority: 'meduium' }
addTask('haircut', STATUS.TODO, 'meduium');
console.log(list[3]);


function deleteTask(vName) {
    let result = list.findIndex(task => task.name == vName);
    if (result === -1) {
        console.log("Задача не найдена");
    } else {
        list.splice(result, 1);
    }
};
//TEST:f deleteTask RESULT: ничего не найдено, возвращается undefined.
deleteTask('omg');
deleteTask('haircut');
console.log(list.find(task => task.name == "haircut"));


console.log(`ГЛАВНОЕ ЗАДАНИЕ--------------->`);

function showList() {
    let todoList = "";
    let inProgressList = "";
    let doneList = "";
    
    let statusTodo = list.filter(value => value.status == "To Do");
    statusTodo = statusTodo.map(item => item.name);
    statusTodo = statusTodo.join('\n   ');
    
    let statusInProgress = list.filter(value => value.status == "In progress");
    statusInProgress = statusInProgress.map(item => item.name);
    statusInProgress = statusInProgress.join('\n   ');
    
    let statusDone = list.filter(value => value.status == "Done");
    statusDone = statusDone.map(item => item.name);
    statusDone = statusDone.join('\n   ');

    console.log(`Todo:\n   ${statusTodo}`);
    console.log(`In Progress:\n   ${statusInProgress}`);
    console.log(`Done:\n   ${statusDone}`);
};
showList();
/*Результат:
Todo:
   test
   work
   sleep
In Progress:
   create a post
Done:
*/
