const list = [
    { name: 'Create a post', status: 'In Progress', priority: 'low'},
    { name: 'Test', status: 'Done', priority: 'high'},
    { name: 'Make a bed', status: 'Done', priority: 'low'},
    { name: 'Walk with dog', status: 'To Do', priority: 'high'},
]

function checkTask(task)
{
    let item = list.findIndex( ind => ind.name == task );
    return item;
}

function changeStatus( task, stat )
{
    let item = checkTask(task);
    if( item == -1 ){
        console.log( `Задачи: ${ind.name} - нет! Добавьте ее.` );
    } else list[item].status = stat;
}

function addTask( task )
{
    if( checkTask(task) == -1 ){
        let newTask = {
            name: task, status: 'To Do', priority: 'low',
        }
        list.push( newTask );
    } else console.log( `Задача: ${task} - уже есть! Вы можете изменить ее статус.` );
    
}

function deleteTask( task )
{
    let item = checkTask(task);
    if( item == -1 ){
        console.log( `Задачи: ${task} - нет! Добавьте ее.` );
    } else list.splice( item, 1 );
}

function showList()
{
    console.log( 'In Rrogress' );
    list.forEach( item => {
        if( item.status == 'In Progress' ){
            console.log( `\t${item.name}`);
        }
    } );
    console.log( 'To Do' );
    list.forEach( item => {
        if( item.status == 'To Do' ){
            console.log( `\t${item.name}`);
        }
    } );
    console.log( 'Done' );
    list.forEach( item => {
        if( item.status == 'Done' ){
            console.log( `\t${item.name}`);
        }
    } );
}

changeStatus("Walk with dog", "In Progress");
changeStatus("Test", "To Do");
addTask("Watch the video");
addTask("Walking with friend");
deleteTask("Walking with friend");
changeStatus("Watch the video", "Done");
//-------------------------------------
console.log( "-------------" );
addTask("Watch the video"); // уже есть задача
deleteTask("Make a sketch"); // нет задачи
showList();
