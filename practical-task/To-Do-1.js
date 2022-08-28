const list = {
	"create a new": "In Progress",
	"make a bed": "To Do",
	"write a post": "Done",
}

function proceed() {
    let proceed = confirm("Хотите продолжить")
    if(proceed == true) {
        let enter = prompt("Привет, что ты бы хотел сделать со своим TODO?: changeStatus/addTask/deleteTask/showList", "");
        const isValid = (enter !== "")
        if(isValid == true) {
            proceedValue(enter);
        }else {
            console.log("Введите корректно задачу")
           
        }
    }
    else {
        alert("Bye")
    }
}
        function proceedValue(enter){
        
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
        } else {
            console.log("Вы ввели несуществующую задачу")
        }
}

function changeStatus(){
    let key = prompt(" Статус какой задачи вы хотите сменить: 'create a new' / 'make a bed' / 'write a post' ", "")
    if(key in list  ) {
       list[key] = prompt(" На какой: In Progress / Done/ To Do ", "") 
       if(list[key] == "In Progress" || list[key] == "Done" || list[key] == "To Do") {
        showList()
    } else {
        console.log("Введите корректный статус задачи")
        return;
    }
}
    
    
}

function addTask(){
    key = prompt("Введите новую задачу", "")
    list[key] = prompt(" Введите статус задачи: In Progress/ To Do/ Done"),
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
    let resultTodo = "To Do:\n";
   let resultProgress = "in Progress:\n";
   let resultDone = "Done: \n";

    for (let key in list)  {
    if(list[key] == "To Do"){
        resultTodo += ` ${key}"\n`;
     }else if ((list[key]) === " ") {
        resultTodo  = "-" + "\n";
     }
    }
    for (let key in list)  {
    if(list[key] == "In Progress"){
        resultProgress  += ` ${key}"\n`;
     }else if ((list[key]) === " ") {
        resultProgress  = "-" + "\n";
     }
    }
    for (let key in list)  {
    if(list[key] == "Done"){
        resultDone  += ` ${key}"\n`;
     }else  if ((list[key]) === " ") {
        resultDone  = "-" + "\n";
     }
    }
 

 console.log(resultTodo);
 console.log(resultProgress);
 console.log(resultDone);
}

proceed()

/* "create a new practice task": prompt("'create a new practice task' Введите статус задачи: In Progress/Done/To Do"),
	"make a bed": prompt(" 'make a bed' Введите статус задачи: In Progress/Done/To Do"),
	"write a post": prompt(" 'write a post' Введите статус задачи: In Progress/Done/To Do"),
    
    function showList() {
    for (let key in list) {
            console.log(key)
            console.log(list[key])  
    }
    
}
*/ 