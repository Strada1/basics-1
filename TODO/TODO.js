const list = {
    'walking': 'done',
     'work': 'to do',
    'write a post': 'to do',
    "create a new practice task":'in progress',
};

function changeStatus(task, status) {
    list[task] = status;

};

function addTask(task) {
    list[task] = 'to do';
};


function deleteTask (task) {
    delete list[task];
};



function showList() {
    let statToDo = '';
    let statInPr = '';
    let statDone = '';

    for (let key in list) {
       if (list[key] == 'to do') {
        statToDo += `"${key}"\n `
       };
       
       if (list[key] == 'in progress') {
        statInPr += `"${key}"\n `
       };

       if (list[key] == 'done') {
        statDone += `"${key}"\n `

       };

    }


    if (statToDo !== '') {
        console.log  (`To Do:\n` + statToDo);
    } else {
        console.log  (`To Do:\n - \n`);
    };

    if (statDone !== '') {
        console.log  (`Done\n:` + statDone);
    } else {
        console.log  (`Done:\n - \n `);
    };

    if (statInPr !== '') {
        console.log  (`In Progress:\n ` + statInPr);
    } else {
        console.log  (`In Progress:\n - \n `);
    };


       }




addTask('pet cat');
addTask('walking');
deleteTask ('work');
changeStatus ('running', 'in progress');
showList();
