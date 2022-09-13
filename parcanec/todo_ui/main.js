const formHigh = document.querySelector('.add_task')
function addTaskHigh(evt){
    let taskName = document.getElementById('addHigh').value
    document.querySelector('#highList').insertAdjacentHTML('afterbegin', `
    <div class='task_list'>
    <label><input type="radio">${taskName}<span></span></label>
    <button id="delButton">×</button>
    </div>`)
    evt.preventDefault()
}
formHigh.addEventListener('submit', addTaskHigh)


const formLow = document.querySelector('.add_task_low')
function addTaskLow(evt){
    let taskName = document.getElementById('addLow').value
    document.querySelector('#lowList').insertAdjacentHTML('afterbegin', `
    <div class='task_list'>
    <label><input type="radio">${taskName}<span></span></label>
    <button id="delButton">×</button>
    </div>`)
    evt.preventDefault()
}
formLow.addEventListener('submit', addTaskLow)
