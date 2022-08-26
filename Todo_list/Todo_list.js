
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
    } else {
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

    if (statToDo !== '') {
        console.log  (`To Do:\n` + statToDo);
    } else {
        console.log  (`To Do:\n - \n`);
    };
    
    if (statDone !== '') {
        console.log  (`Done:\n` + statDone);
    } else {
        console.log  (`Done:\n - \n `);
    };
    
    if (statInPr !== '') { 
        console.log  (`In Progress:\n` + statInPr);
    } else {
        console.log  (`In Progress:\n - \n `);
    };

    
}
  
    


addTask('pet cat');
addTask('walking');
deleteTask ('work');
changeStatus ('crying', 'in progress');
showList();


