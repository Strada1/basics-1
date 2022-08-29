const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' }];

   function addTask(task){
 if (typeof task === 'string'){

    list.push({name: task, status:'New', priority:'low'});
    console.log ('Your task has been added');
 }else{
    console.log('Error', +'/n' + 'There is no any task' );
 }   
    }

    addTask('New task');
    addTask('New task-2');
    console.log(list);

    