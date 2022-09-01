const STATUS = {
   TO_DO : 'To do',
   IN_PROGRESS : 'In progress',
   DONE : 'Done',
}
const PRIORITY = {
   LOW : 'low',
   HIGH : 'high',
   EMPTY : '-' ,
}

const ERROR = {
   NO_RESULT : 'Нет такого значения!',
   HAVE_RESULT : 'Такое значение уже существует',
}

const LIST = [ { name: 'create a post', status: 'In progress', priority: 'low'  }, 
{ name: 'test', status: 'Done', priority: 'high'},
{ name: 'krest', status: 'In progress', priority: 'high'} ] 

function changeStatus(task,status,priority){
   if(LIST.find(item=>item.name === task)){
      let obj = LIST.findIndex (item =>item.name === task);
      LIST[obj].status = status;
      LIST[obj].priority = priority;
      console.log(LIST);
   } else {
      console.log (ERROR['NO_RESULT']);
   }
}
changeStatus('create a post',STATUS['DONE'],PRIORITY['EMPTY'])

function addTask(task,priority) {
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

function showList(){
   let to_do = '';
   let in_progress = '';
   let done = '';
   let no_result = '\n\t-';
   for (let obj of LIST){
    if(obj.status === STATUS['TO_DO']){
      to_do += '\n\t' + obj.name
    }
   }
   if (to_do === ''){
      console.log(`To do:${no_result}`)

   } else {
      console.log(`To do:${to_do}`)
   }

   for (let obj of LIST){
    if(obj.status === STATUS['IN_PROGRESS']){
      in_progress += '\n\t' + obj.name
    }
   }
   if (in_progress === ''){
      console.log(`In progress:${no_result}`)
   } else {
      console.log(`In progress:${in_progress}`)
   }

   for (let obj of LIST){
    if(obj.status === STATUS['DONE']){
      done = done + '\n\t' + obj.name
    }
   }
   if (done === ''){
      console.log(`Done:${no_result}`)
   } else {
      console.log(`Done:${done}`)
   }
}
showList();