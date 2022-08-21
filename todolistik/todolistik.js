const list = {
    watchSomeAnime: "ToDo",
    finishToDoList: "InProgress",
    drinkSomeWater: "Done"
}
addTask = function(task, status = "ToDo"){
    list[task] = status
}

changeStatus = function(task, status){
    if(task in list){
        list[task] = status;
    }
}

deleteTask = function(task){
    if(task in list){
        delete list[task]
    }
}

showList = function(){
    console.log("ToDo:")
    for(let i in list){
        if(list[i] == "ToDo"){console.log(i)}
        }
        console.log("\n")

        console.log("InProgress:")
    for(let i in list){
        if(list[i] == "InProgress"){console.log(i)}
        }
        console.log("\n")

        console.log("Done:")
    for(let i in list){
        if(list[i] == "Done"){console.log(i)}
        }
        console.log("\n")

        console.log("Other:")
        for(let i in list){
            if(list[i] != "Done" && list[i] != "ToDo" && list[i] != "InProgress" && typeof(i) == "string"){console.log(i)}
            }
    }