const STATUS = {
    to_do: "To do",
    done: "Done",
    in_progress: "In progress"
}
const list = {
    "проснуться": STATUS.in_progress,
    "подтянуться": STATUS.done,
    "улыбнуться": STATUS.to_do,
}


function changeStatus(){
    list["подтянуться"] = STATUS.in_progress;
}
function addTask(){
    list["выпить кофеёк"] = STATUS.to_do;
}
function addTask(){
    list["погулять с собой"] = STATUS.done;
}
// function deleteTask(){
//     delete list["улыбнуться"];
// }
function showList(){

    const statusRus = {
    inProgress : "",
    toDo : "",
    doneDone : "",
    }

    for(let key in list){
        if(list[key] === STATUS.in_progress){
            statusRus.inProgress += key + "\n";
        }
    }
    for(let key in list){
        if(list[key] === STATUS.to_do){
            statusRus.toDo += key + "\n";
        }
    }
    for(let key in list){
        if(list[key] === STATUS.done){
            statusRus.doneDone += key + "\n";
        }
    }
console.log(STATUS.in_progress + ":" + "\n" +  "   " + statusRus.inProgress);
console.log(STATUS.to_do + ":" + "\n" +  "   " + statusRus.toDo);
console.log(STATUS.done + ":" + "\n" +  "   " + statusRus.doneDone);
    
}

// deleteTask();
addTask();
changeStatus();
showList();
console.log(list);