const list = [{
	name: 'create a post',
	status: 'In Progress',
	priority: 'low'
  },
  {
	name: 'test',
	status: 'Done',
	priority: 'high'
  }];
  
  const STATUS = {
	inProgress: 'In Progress',
	toDo: 'To do',
	Done: 'Done',
  };
  
  const PRIORITY = {
	low: 'Low',
	high: 'High',
  };
  
  
  function addTask(nameTask, priority) {
	let result = list.findIndex(function (item) {
	  return item.name === nameTask;
	});
	if (result === -1) {
	  list.push({ name: nameTask, status: STATUS.toDo, priority: priority })
	} else {
	  console.log('Такая задача уже существует');
	};
  }
  
  
  function deleteTask(nameTask) {
	let result = list.findIndex(function (item) {
	  return item.name === nameTask
	})
	if (result === -1) {
	  console.log('Такой задачи нет');
	} else {
	  list.splice(result, 1);
	}
  }
  
  
  function changeStatus(nameTask, status) {
	let result = list.findIndex(function (item) {
	  return item.name === nameTask
	});
  
	if ((result === -1) || !(status in STATUS)) {
	  console.log('Такой задачи нет');
	} else {
	  list[result].status = status;
	}
  }
  
  function showList() {
	for (let status in STATUS) {
	  console.log(STATUS[status] + ':');
	  list.filter(function(item) {
		if (item.status === STATUS[status]) {
		  console.log(" " + item.name);
		}
	  })
	}
  }
  
  function showPriotiry() {
	for (let priority in PRIORITY) {
	  console.log(PRIORITY[priority] + ':');
	  list.filter(function(item) {
		if (item.priority === PRIORITY[priority]) {
		  console.log(" " + item.name);
		}
	  })
	}
  }
  
  
  addTask('tests', PRIORITY.low);
  addTask('tes1ts', PRIORITY.low);
  addTask('t1ests', PRIORITY.low);
  addTask('testsasd', PRIORITY.high);
  changeStatus('tests', 'To do');
  
  
  console.log(STATUS);
  
  console.log(list);