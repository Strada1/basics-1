const STATUS ={
  To_Do: 'To Do',
  Done: 'Done',
  In_Progress: 'In Progress'
}

const list={
  "create a new practice task": STATUS.In_Progress,
	"make a bed": STATUS.Done,
	"write a post": STATUS.To_Do,
};

const addTask = (task ) => {
  if(task !== undefined){
     return list[task] = task;
  }else {
    console.log('Введите задачу')
  }
}
const deleteTask = (task) => {
  if(task !== undefined){
    return delete list[task];
  }else {
    console.log('Введите задачу')
  }
  
}

const changeStatus = (task, status) => {
  if(task && status !== undefined){  
     if( task in list){
      return list[task] = status;
     }else{
      return console.log(" Нет задачи такой ");
     }   
  }
  return console.log("Введите задаче и статус");
}
const showList = (list) =>{
  let in_progress = 'In Progress';
  let to_do = 'To Do:';
  let done ='Done:';
  if(list !== undefined){  
    for( let key in list ){
      if(list[key] === STATUS.Done){
        done += `\n \t${key}`
      }
      if(list[key] === STATUS.To_Do){
        to_do += `\n \t${key}`
      }
      if(list[key] === STATUS.In_Progress){
        in_progress += `\n \t${key}`
      }
    }
    let result= `${to_do} \n`+ `${in_progress}\n`+`${done}`
    return console.log(result);
  }
  return console.log("Нет листа ТО ДУ")
}
addTask('creat To');
addTask('creat ');
addTask('creat T');
console.log(list);
changeStatus('creat To',STATUS.Done)
changeStatus('creat ',STATUS.Done);
changeStatus('creat T',STATUS.Done);
showList(list)



