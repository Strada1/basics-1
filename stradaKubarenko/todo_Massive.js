const STATUS = {
   TO_DO : 'To do',
   IN_PROGRESS : 'In progress',
   DONE : 'Done',
}
const PRIORITY = {
   LOW : 'low',
   HIGH : 'high',
}

const LIST = [ { name: 'create a post', status: 'In progress', priority: 'low'  }, 
{ name: 'test', status: 'Done', priority: 'high'  } ] 


function addTask(task,priority) {
   let list = {
      name: task,
      status: STATUS['TO_DO'],
      'priority': priority,
   }
   LIST.push(list);
   console.log(LIST)
}
addTask('toLearnJs',PRIORITY['HIGH']);
addTask('toRide',PRIORITY['LOW']);

function deleteTask(task) {
   
}
// console.log(list)