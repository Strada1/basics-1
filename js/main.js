//if the task is done -> true, not done -> false;)

const tasks = {
    wakeUp: true,
    tideUpTheRoom: true,
    gitPush: false,
}
//that was optional
const getIndex = (obj, elem) => {
    let n = 0,
        arr = Object.keys(obj);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) return i;
        else n = -1;
    }
    return n;
}
//change status
const changeStatus = (obj, elem) => {
    let state = obj[elem];
    obj[elem] = (true) ? false : true;
    let newState = obj[elem];
    console.log('>> Element ' + Object.keys(obj)[`${getIndex(obj,elem)}`] + ' had been changed from "' + state +
                '" to "' + newState + '"');
    console.log('>> Updated object:');
    console.log(obj)
    console.log('\n');
}
//add task
const addTask = (obj, elem, value) => {
    console.log('>> Has been added new element "' + `${elem}`
                + '" with value "'+ `${value}` + '" to the object.\n>> Updated object:');
    obj[elem] = value;
    console.log(obj)
    console.log('\n');
}
//delete task
const deleteTask = (obj, elem) => {
    console.log('>> Element "' + `${elem}` + '" has been deleted.\n>> Updated object:');
    delete obj[elem];
    console.log(obj);
    console.log('\n');
}
//showList
/*тут я понял, что слегка проебался, ибо показывал список каждый раз после её обновления.
Не стал убирать эту функцию, ибо оно и так красиво выглядит, а функцию, чтобы просто посмотреть
список я всё же добавлю, хоть и толка от неё как от меня в будущем*/
const showList = (obj) => {
    console.log(">> Wanna see what you've built? Hm?")
    console.log(obj)
}
//tests
console.log('\n__<< S T A R T >>__\n');
changeStatus(tasks, 'wakeUp');
addTask(tasks, 'piss', true);
deleteTask(tasks, 'piss');
showList(tasks);;

console.log('\n>> Ciao\n')