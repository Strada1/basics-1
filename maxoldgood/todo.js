const list = {}

let toDo="Сделать:";
let inProgress="In Progress:";
let done="Done:";

function changeStatus (task,status) {
    list[task]=status;
}

function addTask (newTask) {
    list[newTask]=toDo;
}

function deleteTask(taskToDelete) {
    delete list[taskToDelete];
}

addTask("Удалить Доту");
addTask("Изучить JS");
addTask("Стать крепким джуном");
addTask("Сделать тудушку");
addTask("Перестать беспокоиться и начать жить");

changeStatus("Удалить Доту",done);
changeStatus("Изучить JS",inProgress);
changeStatus("Сделать тудушку",inProgress);
changeStatus("Перестать беспокоиться и начать жить",toDo);
changeStatus("Сделать тудушку",done);

console.log(list);

toDoList= {};
inProgressList={};
doneList={};

for (let prop in list) {
    if (list[prop]===toDo) {
        toDoList[prop]="added";
    } else if (list[prop]===inProgress) {
        inProgressList[prop]="added";
    } else if (list[prop]===done) {
        doneList[prop]="added";
    }
}

function showList () {
    console.log (` \n ${toDo}`);
    for (let key in toDoList) {
        console.log(`   "${key}"`);
    }
    console.log(`\n ${inProgress}`);
    for (let key in inProgressList) {
        console.log(`   "${key}"`);
    }
    console.log(` \n ${done}`);
    for (let key in doneList) {
        console.log(`   "${key}"`);
    }
}

showList();


