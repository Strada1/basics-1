const STATUSES = {STATUS_IN_PROGRESS: "In progress",
                  STATUS_DONE: "Done",
                  STATUS_TO_DO: "To do",
                  STATUS_DEFAULT: "To Do",};


const PRIORITIES = {PRIORITY_LOW: "Low",
                    PRIORYTI_MEDIUM: "Medium",
                    PRIORYTI_HIGH: "High",};



const list = [ { name: 'create a post',  status: STATUSES.STATUS_IN_PROGRESS, priority: PRIORITIES.PRIORITY_LOW  },
               { name: 'do the dishes',  status: STATUSES.STATUS_DONE, priority: PRIORITIES.PRIORITY_LOW  },
               { name: 'test', status: STATUSES.STATUS_DONE, priority: PRIORITIES.PRIORYTI_HIGH  } ];

               

function addTask(task){
    let newTask = {name: task, status: STATUSES.STATUS_DEFAULT, priority: PRIORITIES.PRIORYTI_MEDIUM}
    let checkTask = list.find(item => item.name === task);
    if (typeof(checkTask) === "object"){
        return "you already have this task"
    }else if (checkTask === undefined){ 
        return (list.push(newTask))
    }   
}

// function deleteTask(task){
//     if (list.find(item => item.name === task)){
//         for(i=0; i < list.length; i++){
//             if (list[i].name.includes(task)) {list.splice(i, 1)}
//         }
//     }else{
//         return "you do not have this task"
//     }
// }
// function deleteTask(task){
//     for(i=0; i < list.length; i++){
//         if (list[i].name.includes(task)){
//             list.splice(i, 1);
//             console.log(`${task} was deleted`)
//         }
//     }
// }
            
// function changeStatus(task, status){
//   /*  
//    // for(i=0; i < list.length; i++){
//         if (list[i].name.includes(task)){
//             switch(status){
//                 case "In progress": list[i] = {name:task, status: STATUSES.STATUS_IN_PROGRESS, priority: list[i].priority};
//                 break;
//                 case "Done": list[i] = {name:task, status: STATUSES.STATUS_DONE, priority: list[i].priority};
//                 break;
//                 case "To do": list[i] = {name:task, status: STATUSES.STATUS_TO_DO, priority: list[i].priority};
//                 break;
//                 default: console.log('We do not have this status')
//             }
//         }
           
//     //} */
    
//     for (i=0; i < list.length; i++){
//         let a = list.findIndex(task)
//         console.log(a)
//     }
// }
// changeStatus('test', 'Done')

// function showList(){
//     let todo =""; 
//     let done = "";
//     let inProgress = "";
//     for(i=0; i < list.length; i++){
//         switch (list[i].status){
//             case STATUSES.STATUS_TO_DO: todo+= list[i].name + '\n';
//             break;
//             case STATUSES.STATUS_DONE: done+= list[i].name + '\n';
//             break;
//             case STATUSES.STATUS_IN_PROGRESS: inProgress+= list[i].name+ "\n";
//             break;
//             default: todo = "-";
//         }
//     }
//     console.log(`Todo: \n ${todo}In Progress: \n ${inProgress}Done: \n ${done}`)

// }

//showList()

console.log(addTask("test"))
console.log(addTask("testsss"))
// console.log(addTask("test"))
// console.log(deleteTask("play a game"))
// console.log(list)
