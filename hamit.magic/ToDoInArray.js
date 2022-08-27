const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
};

const arrayList = [
	{"create a new practice task": STATUS.IN_PROGRESS,},
	{"make a bed": STATUS.DONE,},
	{"write a post": STATUS.TO_DO,},
    {"Lern array's": STATUS.IN_PROGRESS},
];
// console.log(arrayList);
function changeStatus(array, key, keyStatus) {
    let task = array.find(item => item = item[key]);
    if (task == undefined) console.log(`задача ${key} отсутствует`);
    else if (task[key] != keyStatus) {
        task[key] = keyStatus;
        console.log(`Статус задачи ${key} изменен на ${keyStatus}`);
    }
    else console.log(`вы что-то сделали не правильно или в мой код залез BUG`)
}

function addTask(array, key) {
    // console.log(array[key]);
    for (obj of array) {
        if (key in obj) {
            // console.log(obj);
            console.log(`задание ${key} уже существует и имеет статус ${obj[key]}`);
            return;
        }
    }
    array.push({[key]: STATUS.TO_DO});
    console.log(`Задание ${key} добавлено со статусом ${STATUS.TO_DO}`);
    // console.log(array[array.length-1]);
}

function deleteTask(array, key) {
    let keyIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if (key in array[i]) {
            keyIndex = i;
        }
    }
    if (keyIndex >= 0) {
        array.splice(keyIndex, 1);
        console.log(`Задание ${key} успешно удалено`)
        // console.log(keyIndex, array[keyIndex]);
    }
    else {
        console.log('задания ' + key + ' нет для удаления');
    }
}

const findTask = (obj, status) => {
    for (key in obj) {
        // console.log(obj);
        // console.log(obj[key]);
        // console.log(key);
        // console.log(status);
        return (obj[key] == status);
    }
}

const toStr = (obj) => {
    // let result = '';
    // console.log(obj);
    for (key in obj){
        // console.log(typeof(key))
;        return key;
    }
}

function showList(array) {
    let to_do = array.filter(item => findTask(item, STATUS.TO_DO)).map(toStr).toString().replace(',', '\n');
    let inProgress = array.filter(item => findTask(item, STATUS.IN_PROGRESS)).map(toStr).toString().replace(',', '\n');
    let done = array.filter(item => findTask(item, STATUS.DONE)).map(toStr).toString().replace(',', '\n');
    console.log('************************************************************************');
    console.log('\tTO DO');
    console.log(to_do);
    console.log('\tIN PROGRESS');
    console.log(inProgress);
    console.log('\tDONE');
    console.log(done);
    console.log('************************************************************************');
}

// changeStatus(arrayList, "write a post", STATUS.IN_PROGRESS);
// changeStatus(arrayList, "write a pst", STATUS.DONE);
// addTask(arrayList, "lern JS");
// addTask(arrayList, 'make a bed');
// deleteTask(arrayList, "addTask");
// deleteTask(arrayList, 'write a post');
addTask(arrayList, "testing");
showList(arrayList);