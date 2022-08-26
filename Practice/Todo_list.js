
let STATUS = {
    To_Do : 'to do',
    In_Progress : 'in progress',
    Done : 'done',

};


let list = {
    running: STATUS.Done,
    work: STATUS.To_Do,

};

function changeStatus(task, status) {
    if (list[task] == undefined) {
        console.log (`"${task}" cannot be changed because it is not in the list`);
    } else {
    list[task] = status;
    console.log (`"${task}" status was successfully changed`);
    }
};

function addTask(task) {
    if ( task in list) {
        console.log (`"${task}" already exists`);
    } 
    if ( task == '' || task == undefined) {
        console.log (`This task cannot be added because it is empty`);
    } 
    
    else {
    list[task] = STATUS.To_Do;
    console.log (`"${task}" was successfully added`);
    }

};


function deleteTask (task) {
    if (task in list) {
    delete list[task];
    console.log (`"${task}" was successfully deleted`);
    } else {
        console.log (`"${task}" cannot be deleted because it does not exist `);
    }
};

 

function showList() {
    let statToDo = '';
    let statInPr = '';
    let statDone = '';

    for (let key in list) {
       if (list[key] == STATUS.To_Do) {
        statToDo += `"${key}"\n `;
       }
       if (list[key] == STATUS.In_Progress) {
        statInPr += `"${key}"\n `;
       }

       if (list[key] == STATUS.Done) {
        statDone += `"${key}"\n `;
       }

    }
    console.log(`\n `);

        console.log  (`To Do:\n ${statToDo || '- \n' }`);
        console.log  (`Done:\n ${statDone || '- \n' }`);
        console.log  (`In Progress:\n  ${statInPr || '- \n' }`);
   
}
  
    


addTask('pet cat');
addTask('walking');
addTask();
deleteTask ('work');
changeStatus ('crying', 'in progress');
showList();



