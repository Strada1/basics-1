function ToDo(){
const list = {
"make a bed" :"Done"
}

function changeStatus(name, status){
    if (name in list){
return list[name] = status}
}


function addTask(name){
return list[name] = "To Do"}

function deleteTask(name){
   return delete list[name];
}

function showList () {
    {console.log("To Do:")
    for (let key in list) 
    {   
        if (list[key] === 'To Do'){
            console.log(`   "${key}"`);}}}
    {console.log("In Progress: ")
        for (let key in list) 
        {   
            if (list[key] === 'In Progress'){
                console.log(`   "${key}"`);}}}
    {console.log("Done:")
        for (let key in list) 
        {   
            if (list[key] === 'Done'){
                console.log(`   "${key}"`);}}}

       /* if (list[key] === 'In Progress'){
            console.log(key);}

        if (list[key]=== 'Done'){
            console.log(key);                 //Делал изначально один Done: ${key}, в итоге под каждый кей получил по разу Значение (key === Значение)
    */
    
    }
/*  function changeStatus(name, status)
    function addTask(name)
    function deleteTask(name) */
console.log(list);
changeStatus("make a stick", "Done")
console.log(list);
addTask("make a stick")
addTask("do homework")
console.log(list);  
changeStatus("make a stick", "In Progress")
console.log(list)
deleteTask("make a bad")
console.log(list)
addTask("swim")
showList()
}

ToDo();