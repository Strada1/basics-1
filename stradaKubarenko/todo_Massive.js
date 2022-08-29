const STATUS = {
   TO_DO : 'To do',
   IN_PROGRESS : 'In progress',
   DONE : 'Done',
}
const PRIORITY = {
   LOW : 'low',
   HIGH : 'high',
}

const ERROR = {
   NO_RESULT : 'Нет такого значения!',
   HAVE_RESULT : 'Такое значение уже существует',
}

const LIST = [ { name: 'create a post', status: 'In progress', priority: 'low'  }, 
{ name: 'test', status: 'Done', priority: 'high'  } ] 

function addTask(task,priority) {
   // if (LIST.find( item =>item.name === task)){
   if (LIST.find(function(item){return item.name === task})){
      console.log(ERROR['HAVE_RESULT'])
   } else {
      let list = {
         name: task,
         status: STATUS['TO_DO'],
         'priority': priority,
      }
      LIST.push(list);
      console.log(LIST)
   }
}
addTask('toLearnJs',PRIORITY['HIGH']);
addTask('toRide',PRIORITY['LOW']);
addTask('toRide',PRIORITY['LOW']);

function deleteTask(task) {
   if (LIST.find(item=>item.name === task)){
   let obj = LIST.findIndex (item =>item.name === task);
   LIST.splice(obj,1);
   } else {console.log(ERROR['NO_RESULT'])}
}
deleteTask('create a post');
console.log(LIST);