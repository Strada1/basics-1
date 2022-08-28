let arr = [
	{id:1,"create a new": "In Progress"},
	{id:2,"make a bed": "To Do"},
	{id:3,"write a post": "Done"},
]
console.log(arr);

proceed()

function proceed() {
    
    let proceed = confirm("Хотите продолжить")
   
    if(proceed == true) {
        let enter = prompt("Привет, что ты бы хотел сделать со своим TODO?: changeStatus/addTask/deleteTask/showList", "");
        if(enter == "changeStatus") {
            changeStatus();
        } else if(enter == "addTask") {
            addTask();
        }else if(enter == "deleteTask") {
            deleteTask();
        }else if(enter == "showList") {
            showList();
        }else if(enter == "ShowList") {
            newShowList();
        }
    } else {
        alert("Bye")
    }
}

function addTask(){
    let key = prompt('Введите задачу', '')
    let meaning = prompt('Введите ее статус', '');
        arr.push({[key] : meaning});
        console.log(arr);
}

function deleteTask(){
    let id = +prompt('Выберите задачу которую хотите удалить', '');
   let nArr = arr.filter((item) => item.id !== id);
    console.log(nArr)
}

/*


function changeStatus(){
    let key = prompt(" Статус какой задачи вы хотите сменить: 'create a new' / 'make a bed' / 'write a post' ", "")
    if(key in list  ) {
       list[key] = prompt(" На какой: In Progress / Done/ To Do ", "")
       showList()

}
}

function addTask(){
    key = prompt("Введите новую задачу", "")
    list[key] = prompt(" Введите статус задачи: In Progress/Done/To Do"),
    showList()

}

function deleteTask(){
    key = prompt("Введите задачу которую хотите удалить: 'create a new' / 'make a bed' / 'write a post' ", "")
     if(key in list  ) {
        delete list[key];
    }
    showList()

}

function showList(){
    let resultTodo = `To Do:\n`;
   let resultProgress = 'in Progress:\n';
   let resultDone = 'Done: \n';

    for (let key in list)  {
    if(list[key] == "To Do"){
        resultTodo += ` ${key}"\n`;
    }
    if(list[key] == "Done"){
        resultProgress  += ` ${key}"\n`;
    }
    if(list[key] == "In Progress"){
        resultDone  += ` ${key}"\n`;
    }
 }



 console.log(resultTodo);
 console.log(resultProgress);
 console.log(resultDone);
}
showList()
proceed()

*/