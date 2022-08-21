const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
    "learn js": "In Progress",
};


function changeStatus(task, status) {
    list[task] = status;
};

function addTask(task) {
    list[task] = "To Do";
};

function deleteTask(task) {
delete list[task];
};

addTask('play Dota 2');

let todoList = "";
let inProgressList = "";
let doneList = "";


function showList() {
let todoList = "";
let inProgressList = "";
let doneList = "";
    for (let task in list) {
        if (list[task] == "To Do") {
           todoList += '\n   ' + '"' + task + '"';
        } if (list[task] == "In Progress") {
            inProgressList += '\n   ' + '"' + task + '"';
        } if (list[task] == "Done") {
            doneList += '\n   ' + '"' + task + '"';
        }
    } console.log("Todo:" + todoList);
    console.log("In Progress:" + inProgressList);
    console.log("Done:" + doneList);
}; 

showList();