const STATUS = {
    IN_PROGRESS: 'In Progress',
    TO_DO: 'To do',
    DONE: 'Done',
};
  
const priority = {
    LOW: 'Low',
    HIGHT: 'Hight',
};

const list = [ { name: 'Write a post', status: STATUS.IN_PROGRESS, priority: priority.LOW  }, 
    { name: 'Go to walk', status: STATUS.DONE, priority: priority.HIGHT  },
    { name: 'Meet mom', status: STATUS.IN_PROGRESS, priority: priority.LOW  },
    { name: 'Publish a post', status: STATUS.TO_DO, priority: priority.LOW  },
];

function changeStatus(task, newStatus) {
    list.find(function(element) {
        if(element.name === task) {
            element.status = newStatus;
        }
      });
};

function addTask(name, priority) {
    list.push({ name, status: STATUS.TO_DO, priority });
};

function deleteTask(task) {
    list.forEach(function(item, index) {
        if (item.name === task){
            list.splice(index, 1);
        };
      });
        
};

function showList() {
    for (let status in STATUS) {
      console.log(`\n ${STATUS[status]}:`);
      list.filter((item) =>
        item.status === STATUS[status]
          ? console.log(`   ${item.name}(${item.priority})`) : ``);
    };
  };

changeStatus('Write a post', 'Done');
addTask('Check my grandmother', 'High');
deleteTask('Go to walk');
showList()
//console.log(list);