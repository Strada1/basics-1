
const list = {};


const addTask = function (task, status){
  if(typeof task === 'string' && typeof status === 'string'){
    list[task] = status;
    console.log('Задача добавлена!');
  }else if (typeof status !== 'string'){
    console.log('Задача не добавлена!');
  }
};

const changeStatus = function (task, status){
  if (task in list) {
    list[task] = status;
    console.log('Статус задачи обвлён!');
  } else if (typeof status !== 'string') {
    console.log("Статус задачи не обновлён!");
  }
};


const deleteTask = function(task){
  delete list[task];
  console.log('Задача удалена!');
};

const showList = function(){

for (let task in list){
  console.log(list[task]+ " : " +"\n" +task);
}


};



addTask("Купить хлеб", "ToDo");
addTask("Купить яблок", "ToDo");
addTask("Купить макарон", "InProgress");
addTask("Купить картошку", "ToDo");
addTask("Купить колбасу", 1);
addTask("Купить курицу", 1);
changeStatus("Купить картошку", "Done");
changeStatus("Купить курицу", 1);
deleteTask("Купить яблок");

showList();




