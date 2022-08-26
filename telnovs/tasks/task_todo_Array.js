const STATUS ={
  To_Do:'To Do',
  Done:'Done',
  In_Progress:'In Progress'
}

const  Priority ={
  low:'low',
  high:'high'
}

let list=[
  {name:"create a new practice task", status: STATUS.In_Progress,priority:Priority.low},
  {name:"make a bed", status: STATUS.Done, priority:Priority.low},
  {name:"write a post", status: STATUS.To_Do, priority:Priority.high},
	{name:"test", status: STATUS.To_Do, priority:Priority.high}
];

function findIndexList(task){
  return list.findIndex(item => item.name == task);
}

const addTask = (task) => {
  if(task !== undefined){
     let newTask = findIndexList(task)
      if( newTask !== -1){
          console.log('Такая задача есть !!')
        } else {
        return list.push({name:task, priority:Priority.low});
        }
  }else {
    console.log('Введите задачу')
  }
}  
 
const deleteTask = (task) => {
  if(task !== undefined){
     let newlist = findIndexList(task)
      if(newlist !== -1){
        return list.splice(newlist,1);
      } else {
        console.log('Нет такой задачи');
      }
  } else {
    console.log('Введите задачу');
  } 
}

const changeStatus = (task, status) => {
  if(status !== undefined ){  
    let newStatus = findIndexList(task);
      if(newStatus !== -1 ){
        return list[newStatus].status = status;
      }    
  }
  return console.log("Введите статус ");
}

const changePriority = (task, priority) => {
  if(priority !== undefined ){  
    let newpriority = findIndexList(task);
      if(newpriority !== -1 ){
        return list[newpriority].priority = priority;
      }    
  }
  return console.log("Введите приоритет");
}


const showList = (list) => {
  let in_progress = 'In Progress:';
  let to_do = 'To Do:';
  let done ='Done:';
  
  
  if(list !== undefined){  
    for( let i = 0; i < list.length; i++ ){
      if(list[i].status === STATUS.Done){
        done += `\n \t${list[i].name}\tpriority:${list[i].priority} `
      }
      if(list[i].status === STATUS.To_Do){
        to_do += `\n \t${list[i].name}\tpriority:${list[i].priority} `
      }
      if(list[i].status === STATUS.In_Progress){
        in_progress += `\n \t${list[i].name}\tpriority:${list[i].priority} `
      }
    }
    let result= `${to_do} \n`+ `${in_progress}\n`+`${done}`
    return console.log(result);
  }
  return console.log("Нет листа ТО ДУ")
}



addTask('create a new practice task')
addTask("go to home")
changeStatus('go to home',STATUS.To_Do)
changePriority("go to home",Priority.high)
// console.log(STATUS);
// console.log(Priority);
console.log(list)
deleteTask('create a new practice task')
// deleteTask('go to home')
console.log(list)
addTask("go to home")
console.log(list)

// showList(list);