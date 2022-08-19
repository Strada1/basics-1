let toDo = {
    running: 'done',
    work: 'to do',

};

function changeStatus(task, status) {
    toDo[task] = status;

};

function addTask(task) {
    toDo[task] = 'to do';
};


function deleteTask (task) {
    delete toDo[task];
};

 

function showList() {
    let statToDo = '';
    let statInPr = '';
    let statDone = '';

    for (let key in toDo) {
       if (toDo[key] == 'to do' || '') {
        statToDo +=  '\n' + '- ' + key + '\n';
       }
       if (toDo[key] == 'in progress') {
        statInPr += '\n'+ '- ' + key + '\n';
       }

       if (toDo[key] == 'done' || '') {
        statDone += '\n' + '- ' + key + '\n';

       }

    }


    if (statToDo !== '') {
        console.log  ('To Do: ' + statToDo);
    } else {
        console.log  ('To Do: ' +'\n' + '-' +'\n');
    };
    
    if (statDone !== '') {
        console.log  ('Done: ' + statDone);
    } else {
        console.log  ('Done: ' +'\n' + '-' +'\n');
    };
    
    if (statInPr !== '') {
        console.log  ('In Progress: ' + statInPr);
    } else {
        console.log  ('In Progress: ' +'\n' + '-' +'\n');
    };

    
       }
  
    


addTask('pet cat');
addTask('walking');
deleteTask ('work');
changeStatus ('running', 'in progress');
showList();

