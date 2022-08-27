const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}

const list = [
    { name: 'Create a post', status: STATUS.IN_PROGRESS, priority: 'low'},
    { name: 'Test', status: STATUS.DONE, priority: 'high'},
    { name: 'Make a bed', status: STATUS.DONE, priority: 'low'},
    { name: 'Walk with dog', status: STATUS.TO_DO, priority: 'high'},
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
            name: task, status: STATUS.TO_DO, priority: 'low',
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

//функция для сортировки по приоритету
function arrSortPriority( a, b )
{
    if ( a.priority < b.priority ) return -1;
    if ( a.priority > b.priority ) return 1;
}

function showList()
{
    list.sort(arrSortPriority);
    console.log( STATUS.IN_PROGRESS );
    list.forEach( item => {
        if( item.status == STATUS.IN_PROGRESS ){
            console.log( `\t${item.name}. Priority: ${item.priority}`);
        }
    } );
    console.log( STATUS.TO_DO );
    list.forEach( item => {
        if( item.status == STATUS.TO_DO ){
            console.log( `\t${item.name}. Priority: ${item.priority}`);
        }
    } );
    console.log( STATUS.DONE );
    list.forEach( item => {
        if( item.status == STATUS.DONE ){
            console.log( `\t${item.name}. Priority: ${item.priority}`);
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
