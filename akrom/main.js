const STATUS = {
  TO_DO: 'To Do',
  DONE: 'Done',
  IN_PROGRESS: 'In_Progress'
} 


const list =  [{ name: 'create a post', status:STATUS.IN_PROGRESS,  priority: 'low' },
                   {name: 'test', status:STATUS.DONE, priority: 'high'  } 
] 


function addTask (name) {
  list.push({name: name, status:STATUS.TO_DO, priority: 'low'})
}
addTask('have a walk')

console.log(list)