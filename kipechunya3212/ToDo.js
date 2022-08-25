const STATUS = {
  TO_DO: 'TO_DO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};


const taskList = {
	'create a new practice task': 'IN_PROGRESS',
	'banan' : 'TO_DO',
  'apple' : 'IN_PROGRESS',
  'melon' : 'IN_PROGRESS',
}

function addTask (task) {
  taskList[task] = STATUS.TO_DO;
}

function changeStatuses (task, status) {
  taskList[task] = status;
}

function deleteTask (task) {
  delete taskList[task];
}

function showList () {
  for (let task in taskList) {
    switch (taskList[task]) {
      case STATUS.TO_DO :       
        console.log('' + task);
        break;
      case STATUS.IN_PROGRESS :        
        console.log('' + task)
        break;
      case STATUS.DONE :        
        console.log('' + task)
        break;

    }
  }
}
changeStatuses ('melon' , 'DONE' )
changeStatuses ('apple' , 'TO_DO')

showList ()

