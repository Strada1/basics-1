const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' }];

   function addTask(task, priority){
 if (typeof task === 'string'){
    'priority' + (priority? 'high': 'low');
    list.push({name: task, status:'New', priority: priority,});
    console.log ('Your task has been added');
 }else{
    console.log('Error', +'/n' + 'There is no any task' );
 }   
    }


    
    addTask('New task', 'high');
    addTask('New task-2','low');
    addTask('New task-3','high');

    console.log(list);

    