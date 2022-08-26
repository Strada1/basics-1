const PRIORITY ={
    highPriority: 'high',
    lowPriority: 'low',
    mediumPriority: 'medium',
}

const STATUS = {
    toDo : 'To do',
    inProgress : 'In progress',
    Done : 'Done',
};

console.log (`Available statuses: 'To Do', 'Done', 'In progress'`);
console.log (`Available priorities: 'high', 'medium', 'low'`);

const list = [ { name: 'post', status: 'To do', priority: 'low'  }, 
                { name: 'test', status: 'Done', priority: 'high'  }, 
                { name: 'pet cat', status: 'Done', priority: 'high'  } ];


function findIndex(name) {
    return list.findIndex (function (item) {return item.name == name; });
};


function addTask(name, status, priority) {

    if ( findIndex(name) !== -1) {
        console.log(`"${name}" already exists`);
    } 
    if ( name == '' || status == '' || priority == '' || name == undefined || status == undefined || priority == undefined)  {
        console.log (`This task cannot be added because it is empty`);
    } else {
        return list.push( {'name': name, 'status': status, 'priority': priority,})
    }
}

function deleteTask(name) {
    if ( findIndex(name) == -1) {
        console.log(`"${name}" cannot be deleted because it does not exist`);
    } else {
    let deleteIndex = findIndex(name);
    list.splice(deleteIndex, 1);
    }
};

function changeStatus(name, status) { 
    if ( findIndex(name) == -1) {
           console.log(`"Status of ${name}" cannot be changed because it does not exist`);
        };
        
    if (status == '' || undefined){
        console.log(`Status of "${name}" is empty, please repeat`);
    } else {
    let changeIndex = list.find(function (item) {
        return (item.name == name); 
    });
     changeIndex.status = status;
}
};


function changePriority(name, priority) {
    if ( findIndex(name) == -1) {
        console.log(`Priority of "${name}" cannot be changed because it does not exist`);
     };   
    if (priority == '' || priority == undefined){
        console.log(`Priority of "${name}" is empty, please repeat`);
    } else { 
        let changeIndex = list.find(function (item) {
        return (item.name == name); 
    });
    changeIndex.priority = priority;
}   
};

console.log(`\n `);

function showList () {
    let statToDo = '';
    let statInPr = '';
    let statDone = '';

    for (i = 0; i < list.length; i++) {
        if (list[i].status == STATUS.toDo) {
            statToDo += `"${list[i].name}", "${list[i].priority}"\n `;
        }
        if (list[i].status == STATUS.inProgress) {
            statInPr += `"${list[i].name}", "${list[i].priority}"\n `;
        }
        if (list[i].status == STATUS.Done) {
            statDone += `"${list[i].name}", "${list[i].priority}"\n `;
        }
    };
  console.log(`\n `);
  console.log (`In Progress:\n ${statInPr || '- \n' }` );
  console.log (`To Do:\n ${statToDo || '- \n' }`);
  console.log (`Done:\n ${statDone || '- \n' }`);
};

addTask('running', 'To do', 'low');
addTask('work', 'In Progress', 'high')
deleteTask('post');
deleteTask('eating');
changeStatus('work', 'Done');
changePriority('pet cat', 'high');
changePriority('pet cat', '');

 showList();
