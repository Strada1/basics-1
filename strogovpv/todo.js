to
const tasks = {
  'Прочитать главу learnJs': 'do',
  'Захватить мир': 'do',
  'Попить кофе': 'done',
  
  changeStatus(task) {
    if ( this[task] === 'do') return this[task] = 'done';
    return this[task] = 'do';
  },

  addTask(task) {
    this[task] = 'do';
  },

  showList() {
    let doneTasks = 'Выполненные задачи:\n';
    let doTasks = 'Не выполненные задачи:\n';
    
    for (let elem in this) {
      if (this[elem] === 'do') {
        doTasks += elem + '\n';
      } else if (this[elem] === 'done') {
        doneTasks += elem + '\n';
      }
    }
    return console.log('\t' + doneTasks + '\t'+ doTasks);
  }
}
tasks.addTask('Сделать to-do лист');
tasks.addTask('Разобрать сумку');
tasks.showList();
tasks.changeStatus('Сделать to-do лист');
tasks.changeStatus('Прочитать главу learnJs');
tasks.showList();
tasks.changeStatus('Сделать to-do лист');
tasks.showList();