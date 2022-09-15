const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
    DONE: 'done'
}

const list = [
    {name: 'strada: todo', priority: PRIORITY.HIGH},
    {name: 'go to shop', priority: PRIORITY.LOW},
    {name: 'read: learn.javascript.ru ' , priority: PRIORITY.DONE},
]

const buttonAddHighTask = document.querySelector('.form-high')
buttonAddHighTask.addEventListener('click', addHighTask)

const buttonAddLowTask = document.querySelector('.form-low')
buttonAddLowTask.addEventListener('click', addLowTask)

render()

function addHighTask(event) {

    event.preventDefault()
    let taskName = document.querySelector('.form-high-text').value
    list.push({name: taskName, priority: PRIORITY.HIGH})
    render()
}

function addLowTask(event) {
    event.preventDefault()
    let taskName = document.querySelector('.form-low-text').value
    list.push({name: taskName, priority: PRIORITY.LOW})
    render()
}

function render() {

    document.querySelectorAll('.row-div').forEach((elem) => {
        elem.remove()
    })

    list.forEach((elem) => {

        if (elem.priority === PRIORITY.HIGH) {
            let divAddingHighTask = document.querySelector('.row-high')

            divAddingHighTask.insertAdjacentHTML('afterend', `
            <form>
                <div class="row row-div">
                     <div> 
                         <label>
                             <input type="checkbox" class="chb-high">
                         </label>
                     </div>
                     <div class="task-high">
                     </div>
                     <div>
                        <button class="btn btn-high">x</button>
                     </div>
                </div>
            </form>
            `)

            let highTaskName = document.querySelector('.task-high');
            highTaskName.textContent = elem.name

            let checkboxHigh = document.querySelector('.chb-high')
            checkboxHigh.addEventListener('click', (evt) => {
                
                // checkboxHigh.innerHTML = `<input type="checkbox" class="chb-high" checked>`
                list.forEach((elem) => {
                    if (elem.name === highTaskName.textContent) {
                        elem.priority = PRIORITY.DONE
                        render()
                    }
                })
            })

            let deleteTaskHigh = document.querySelector('.btn-high')
            deleteTaskHigh.addEventListener('click', () => {
                list.forEach((elem) => {
                    if (elem.name === highTaskName.textContent ){
                        let index = list.indexOf(elem)
                         list.splice(index, 1)
                        render()
                    }
                })
            })
        }

        if (elem.priority === PRIORITY.LOW) {
            let divAddingLowTask = document.querySelector('.row-low')

            divAddingLowTask.insertAdjacentHTML('afterend', `
            
            <div class="row row-div">
             <div>
                 <label>
                     <input type="checkbox" class="chb-low">
                 </label>
             </div>
             <div class="task-low">
             </div>
             <div>
                <button class="btn btn-low">x</button>
             </div>
         </div>
            `)

            let lowTaskName = document.querySelector('.task-low');
            lowTaskName.textContent = elem.name

            let checkboxLow = document.querySelector('.chb-low')
            checkboxLow.addEventListener('click', () => {
                list.forEach((elem) => {
                    if (elem.name === lowTaskName.textContent) {
                        elem.priority = PRIORITY.DONE
                        render()
                    }
                })
            })

            let deleteTaskLow = document.querySelector('.btn-low')
            deleteTaskLow.addEventListener('click', () => {
                list.forEach((elem) => {
                    if (elem.name === lowTaskName.textContent ){
                        let index = list.indexOf(elem)
                        list.splice(index, 1)
                        render()
                    }
                })
            })


        }

        if (elem.priority === PRIORITY.DONE) {
            let doneTitle = document.querySelector('.done')
            doneTitle.insertAdjacentHTML('afterend', `
                <div  class="row row-div" >
                    <div>
                        <label>
                             <input type="checkbox" class="chb-high" checked>
                         </label>
                    </div>
                    <div class="task-done" style="text-align: center">
                    </div>
                    <div>
                        <button class="btn btn-done">x</button>
                    </div>
                </div>
            `)

            let doneTaskName = document.querySelector('.task-done')
            doneTaskName.textContent = elem.name

            let deleteTaskHigh = document.querySelector('.btn-done')
            deleteTaskHigh.addEventListener('click', () => {
                list.forEach((elem) => {
                    if (elem.name === doneTaskName.textContent ){
                        let index = list.indexOf(elem)
                        list.splice(index, 1)
                        render()
                    }
                })
            })
        }
    })

}






