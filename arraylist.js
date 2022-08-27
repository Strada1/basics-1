const list = [];
let addTask = (name, priority) => {
    //проверка (существует ли уже объект с таким именем)
    if(list.find(item => item.taskName === name)) {
        console.log('This task has already been added');
    }
    //добавление объекта в список 
    list.push({
        taskName: String(name),
        taskPriority: String(priority),
        taskStatus: 'undone',   
    });
}
let deleteTask = (name) => {
    //проверка (есть ли вообще объект с таким именем)
    if(list.find(item => item.taskName === name)) {
        //если объект есть, удаляем его с помощью splice
        list.splice(list.findIndex(item => item.taskName === name), 1);
    }
    //если объекта нет, то выводится предупреждение
    else {console.log('No such task in the list');}
}

let changeStatus = (name, status) => {
    //проверка (есть ли вообще объект с таким именем)
    if(list.find(item => item.taskName === name)) {
        //если объект есть, меняем его статус
        let edited = list.find(item => item.taskName === name);
        edited.taskStatus = status;
    }
    //если объекта нет, то выводится предупреждение
    else {console.log('No such task in the list');}
}

let showList = () => {
    //выделяем три массива, отфильтрованных по статусу объекта
    done = list.filter(item => item.taskStatus === 'done')
    undone = list.filter(item => item.taskStatus === 'undone')
    inProg = list.filter(item => item.taskStatus === 'in progress')
    //создаем три отдельных массива для хранения имен отфильтрованных объектов (дел)
    let doneNamesArr = [];
    let undoneNamesArr = [];
    let inProgNamesArr = [];
    //берем имена объектов из отфильтрованных по статусу массивов 
    //и добавляем их в созданные выше массивы (специально для имен)
    done.forEach(item => doneNamesArr.push(item.taskName)) 
    undone.forEach(item => undoneNamesArr.push(item.taskName)) 
    inProg.forEach(item => inProgNamesArr.push(item.taskName)) 
    //превращаем массивы имен в строки, для удобного отображения
    let doneNamesString = doneNamesArr.join(`\n  `)
    let undoneNamesString = undoneNamesArr.join(`\n  `)
    let inProgNamesString = inProgNamesArr.join(`\n  `)
    console.log(`Done:\n  ${doneNamesString}\nUndone:\n  ${undoneNamesString}\nIn progress:\n  ${inProgNamesString}`);
} 


addTask('Cook some veggies', 'mid');
addTask('Feed the crocodile', 'high');
addTask('Fix the damn door', 'low');
addTask('Become invinsible', 'high');
addTask('Pay the rent', 'mid');
addTask('Be a nice person', 'low');
addTask('Steal a bike', 'high');
addTask('Commit to Strada', 'high');
deleteTask('Be a nice person');
changeStatus('Pay the rent', 'in progress');
changeStatus('Feed the crocodile', 'done');
changeStatus('Steal a bike', 'in progress');
changeStatus('Commit to Strada', 'done');
showList();