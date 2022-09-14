const INPUT_TASK = document.querySelector("#input_task");
const FORM_HIGH = document.querySelector("#form_high");


const STATUS = {
    STATUS_IN_PROGRESS: "In Progress",
    STATUS_DONE: "Done",
    STATUS_TO_DO: "To Do",
}

const PRIORITY = {
    PRIORITY_LOW: "low",
    PRIORITY_HIGH: "high",
}

let list = [ { name: 'create a post', status: STATUS.STATUS_IN_PROGRESS, priority: PRIORITY.PRIORITY_HIGH  }]


function myFindIndex (nameTask){
    let result = list.findIndex(item => nameTask === item.name);
    return result;
}

function addTask (nameTask , statuses = STATUS.STATUS_TO_DO, priorities = PRIORITY.PRIORITY_LOW){

    let result = myFindIndex(nameTask);
    if ( result === -1 ) {
        return  ( list.push({name:nameTask, status: statuses, priority: priorities}) );
    } else {
        console.log( `Вы не можете добавить ${nameTask} , так как существует` );
    }

}


function inputMyTask (event){

    event.preventDefault();
    let value_input = INPUT_TASK.value;
    addTask(value_input);
    FORM_HIGH.reset();
    render();

}

FORM_HIGH.addEventListener('submit',inputMyTask);



function deleteTask(nameTask){

    let result = myFindIndex(nameTask);
    if ( result === -1 ) {
        console.log( `Вы не можете удалить ${nameTask} , так как не существует` );
    } else {
         list.splice( result, 1 );
    }

    render();
}


let taskId = 0;

function render(){
    let tasks = document.querySelector(".task");
    tasks.innerHTML = "";
    for (let task of list){
        let task_id = "task_id" + taskId;
        tasks.insertAdjacentHTML("afterbegin",
                `
                    <div class="vue-task" id="${task_id}">
                        <div class="check">
                            <input  name="add" type="checkbox">
                        </div>
                            <div class="new-task">
                                 ${task.name}                         
                            </div>
                            <div class="close"></div>
                    </div>
            `
            )
        document.getElementById(task_id).children[2].addEventListener("click", function () {
            deleteTask(task.name);
        });
        taskId++;
    }
}

render();

console.log(list);






// function addTask (nameTask , statuses = STATUS.STATUS_TO_DO, priorities = PRIORITY.PRIORITY_LOW){
//
//     let result = myFindIndex(nameTask);
//     if ( result === -1 ) {
//         return  ( list.push({name:nameTask, status: statuses, priority: priorities}) );
//     } else {
//         console.log( `Вы не можете добавить ${nameTask} , так как существует` );
//     }
//
// }
//
// function deleteTask(nameTask){
//
//     let result = myFindIndex(nameTask);
//     if ( result === -1 ) {
//         console.log( `Вы не можете удалить ${nameTask} , так как не существует` );
//     } else {
//         return list.splice( result, 1 );
//     }
//
// }
//
//
// function changeStatus(nameTask, newStatus) {
//
//     let result = myFindIndex(nameTask);
//     if ( result === -1 ) {
//         console.log( `Вы не можете поменять статус ${newStatus} , так как не существует` );
//     } else {
//         return (list[result].status = newStatus);
//     }
//
// }
//
// function changePriority(nameTask, newPriority) {
//
//     let result = myFindIndex(nameTask);
//     if ( result === -1 ) {
//         console.log( `Вы не можете поменять статус ${newPriority} , так как не существует` );
//     } else {
//         return (list[result].priority = newPriority);
//     }
//
// }
//
//
// function showIndividual (status){
//     let count = false;
//     console.log (`\t ${status}:`);
//     let obj = list.filter(item => item.status === status);
//     //console.log(obj);
//     for (let task of obj){
//         if(obj[task] === status.name) {
//             console.log(`\t\t "${task.name}" \n\t\t\t priority: "${task.priority}"`);
//             count = true;
//         }
//     } if (!count) {
//         console.log (`\t\t-`);
//     }
//     count = false;
// }
//
//
// function showList() {
//
//     console.log('ToDO:')
//     showIndividual(STATUS.STATUS_TO_DO);
//     showIndividual(STATUS.STATUS_IN_PROGRESS);
//     showIndividual(STATUS.STATUS_DONE);
//
// }

// addTask("JS",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );
// addTask("VITALIK",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );
// addTask("JS",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );
// addTask("VITALIK",STATUS.STATUS_TO_DO,PRIORITY.PRIORITY_HIGH );
//
// changeStatus ("JS" , STATUS.STATUS_TO_DO);
// changeStatus ("JS" , STATUS.STATUS_DONE);
//
// changePriority ("test", PRIORITY.PRIORITY_HIGH);
// changePriority ("test", PRIORITY.PRIORITY_LOW);
//
// deleteTask('JS');
//
// showList();