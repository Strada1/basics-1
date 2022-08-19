const toDo={};

const addTask = (task) =>   {
    toDo[task] = 'В работе';
}
const deleteTask = (task) => {
  delete toDo[task];
}

const changeStatus = (task) => {
  if (toDo[task] === 'В работе'){
    return toDo[task] = ' Выполнено';
  }else 
    return toDo[task] = ' В работе';
}

const showList = (toDo) =>{

  for(let key in toDo ){
    console.log( 'Задача:' + [key] + '  -  Статус выполнения: ' + toDo[key] );    
   } 
  }
 
 
addTask('Учиться');
changeStatus('Учиться');
changeStatus('Учиться');
addTask('Писать код');
changeStatus('Писать код');
changeStatus('Писать код');
addTask('Купить молоко');
changeStatus('Купить молоко');
addTask('Заехать в магазин');
changeStatus('Заехать в магазин');
addTask('почитать книгу ');
addTask('позаниматься с сыном');

showList(toDo);
deleteTask('Купить молоко');
deleteTask('Заехать в магазин');

showList(toDo);
