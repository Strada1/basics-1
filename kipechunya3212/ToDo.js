const STATUS = {
  TO_DO: 'TO_DO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};


const taskList = {
	'create a new practice task': 'IN_PROGRESS',
	'clean' : 'TO_DO',
  'study' : 'TO_DO',
  'drink' : 'IN_PROGRESS',
  'sleep' : 'IN_PROGRESS',
}

function addTask (task) {
  if (task in taskList) {
    console.log('task already added');
  } else  {
    taskList[task] = STATUS.TO_DO;
  }
}

function changeStatuses (task, status) {
  if (task in taskList) {
    let trueStatus;
    for (let stat in STATUS) {
        if (status == STATUS[stat]) {
            trueStatus = true;
        }
    }
    if (trueStatus) {
      taskList[task] = status;
    } else {
        console.log('Status Invalid');
    }
} else {
    console.log('no have task');
}
};

  
function deleteTask (task) {
  if (task in taskList) {
    delete taskList[task];
  } else {
    console.log('task already deleted');
  }
}

function showList () {
  let listToDo = '';
  let listInPr = '';
  let listDone = '';

  for (let task in taskList) {
      switch (taskList[task]) {
        case STATUS.TO_DO :       
          listToDo += `\t ${task}\n`;           
            break;
        case STATUS.IN_PROGRESS :        
          listInPr += ` \t${task}\n`;
            break;
        case STATUS.DONE :        
          listDone += ` \t${task}\n`;
            break;
        }
      }
      console.log(
      ` ToDo:\n ${listToDo} In Progress:\n ${listInPr} Done:\n ${listDone}`);
    }
changeStatuses ('sleep' , 'DONE' )
changeStatuses ('drink' , 'TO_DO')

showList ()

