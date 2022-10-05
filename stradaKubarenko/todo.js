const STATUS = {
   TO_DO : 'To do',
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
const elements = {
   UL_HIGH : document.getElementById('listHigh'),
   UL_LOW : document.getElementById('listLow'),
   TEXT_INPUT_HIGH : document.getElementById('textInputHigh'),
   TEXT_INPUT_LOW : document.getElementById('textInputLow'),
}
const LIST = [] ;
const formHighPriority = document.getElementById('form_high');
const formLowPriority = document.getElementById('form_low');


formHighPriority.addEventListener('submit',addTaskHigh);
formLowPriority.addEventListener('submit',addTaskLow);

const delButton = document.querySelector('.delButton');

LIST.forEach(delButton => delButton.addEventListener('click', deleteTask));

// for (i=0; i<LIST.length; i++){
//       LIST[0].addEventListener('click', deleteTask)
// }

// delButton.addEventListener('click', deleteTask);

function addTaskHigh() {
   let task = elements.TEXT_INPUT_HIGH.value;
   if (LIST.find(function(item){return item.task === task})){
      alert(ERROR['HAVE_RESULT'])
   } else {
      let obj = {
         task,
         status: STATUS['TO_DO'],
         priority: PRIORITY.HIGH,
      }
      LIST.push(obj);
   }
  render(event);
}

function addTaskLow() {
   let task = elements.TEXT_INPUT_LOW.value;
   if (LIST.find(function(item){return item.task === task})){
      alert(ERROR['HAVE_RESULT'])
   } else {
      let obj = {
         task,
         status: STATUS['TO_DO'],
         priority: PRIORITY.LOW,
      }
      LIST.push(obj);
   }
  render(event);
}

function deleteTask(event) {
   console.log('меня вызвали')
   // try {
   //    let objIndex = LIST.findIndex (obj => obj.task === );
   //    LIST.splice(objIndex,1);
   //    render();
   // }catch(err) {
   //    alert(err.stack);
   // }
}


function render(event) {
   event.preventDefault();
   elements.UL_HIGH.innerHTML = '';
   elements.UL_LOW.innerHTML = '';
   LIST.forEach(function(item){
      if (item.priority === PRIORITY.HIGH && item.status === STATUS.TO_DO){
         // let textHighPriority = elements.TEXT_INPUT_HIGH.value;
         elements.UL_HIGH.insertAdjacentHTML("afterbegin", `
         <li class="box delete"> 
            <label>
            <input type="checkbox">
            <span>${item.task}</span>
            <button type="submit" class="delButton">del</button>
            </label>
         </li>`);
      document.querySelector('.clearHigh').value = '';
      } else if (item.priority === PRIORITY.LOW && item.status === STATUS.TO_DO) {
         // let textLowPriority = elements.TEXT_INPUT_LOW.value;
         elements.UL_LOW.insertAdjacentHTML("afterbegin", `
         <li class="box delete"> 
            <label>
            <input type="checkbox">
            <span>${item.task}</span>
            <button type="submit" class="delButton">del</button>
            </label>
         </li>`);
         document.querySelector('.clearLow').value = '';
        } 
   });
   console.log(LIST);
}

// function changeStatus(task,status,priority){
//    if(LIST.find(item=>item.name === task)){
//       let obj = LIST.findIndex (item =>item.name === task);
//       LIST[obj].status = status;
//       LIST[obj].priority = priority;
//       console.log(LIST);
//    } else {
//       console.log (ERROR['NO_RESULT']);
//    }
// }
// changeStatus('toLearnJs',STATUS['IN_PROGRESS'],PRIORITY['HIGH'])



// function showList(){
//    let to_do = '';
//    let in_progress = '';
//    let done = '';
//    let no_result = '\n\t-';
//    for (let obj of LIST){
//     if(obj.status === STATUS['TO_DO']){
//       to_do += '\n\t' + obj.name
//     }
//    }
//    if (to_do === ''){
//       console.log(`To do:${no_result}`)

//    } else {
//       console.log(`To do:${to_do}`)
//    }

//    for (let obj of LIST){
//     if(obj.status === STATUS['IN_PROGRESS']){
//       in_progress += '\n\t' + obj.name
//     }
//    }
//    if (in_progress === ''){
//       console.log(`In progress:${no_result}`)
//    } else {
//       console.log(`In progress:${in_progress}`)
//    }

//    for (let obj of LIST){
//     if(obj.status === STATUS['DONE']){
//       done = done + '\n\t' + obj.name
//     }
//    }
//    if (done === ''){
//       console.log(`Done:${no_result}`)
//    } else {
//       console.log(`Done:${done}`)
//    }
// }
// showList();