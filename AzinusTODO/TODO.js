const list = [ 
    { name: 'create a post', status: 'In progress', priority: 'low'}, 
    { name: 'test', status: 'Done', priority: 'high'  } ] ;

const PRIORITY = {
    low:"low",
    high:"high",
}

   function addTask(task){
 if (typeof task === 'string'){
    list.push({name: task, status:toDO, priority: PRIORITY[low]});
    console.log ('Your task has been added');
 }else{
    console.log('Error', +'/n' + 'There is no any task' )
 }
    
    }
function deleteTask(task){
    let result = list.findIndex(function(index) {
        return index === task;
        });
    list.splice(result);
    console.log("The task is deleted");
    }

   
   