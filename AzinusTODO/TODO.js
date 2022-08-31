const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
      { name: 'test', status: 'Done', priority: 'high' }];

function addTask(task, priority){
 if (typeof task === 'string'){
   const taskPriority = priority === 'high' ?  'high': 'low';
  list.find(item => item.name ===-1);
       console.log ('no, that has been listed');
      
    
  list.push({name: task, status:'New', priority: taskPriority,});
    console.log ('Your task has been added');
 }else{
   console.log('Error', +'/n' + 'There is no any task' );
 }   
 
}

    
    addTask('New task', 'high');
    addTask('New task-2',);
    addTask('New task-3','high');

    console.log(list);

