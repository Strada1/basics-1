//SOURCE
const list = [
    { name: 'create a post', status: 'Not Done', priority: 'high'  },
    { name: 'Take a walk', status: 'Not Done', priority: 'medium'  },
    { name: 'pososat\'', status: 'Not Done', priority: 'low'  },
    { name: 'test', status: 'Done', priority: 'high'  },
]
//ELEMENTS
const sections = document.querySelectorAll('.section');
const addTaskDivs = document.querySelectorAll('.add-task-div');
let taskDivs = document.querySelectorAll('.task-div');
//FUNCTIONS
//add task
const addTask = (arr, name, status = 'Not Done', priority = 'low') => {
    const obj = {};
    obj.name = name;
    obj.status = status;
    obj.priority = priority;
    arr.push(obj);
    console.log(`>> Task '${name}' with status '${status}' and priority '${priority}' has been added!`)
}
//change status
const changeStatus = (arr, name, status = 'Done') => {
    let target = arr.find((item) => item.name == name);
    if (target != null) {
        target.status = status;
    } else console.log('No task with such name!')
}
//delete task
const deleteTask = (arr, name) => {
    let targetIndex = arr.findIndex((item) => item.name == name);
    arr.splice(targetIndex,1);
    console.log(`>> Task '${name}' has been deleted!`)
}
//render
const render = (list) => {
    document.querySelectorAll('.task-div').forEach(taskDiv => taskDiv.remove());
    const ways = (priority) => {
        switch(priority) {
            case 'high':
                return sections[0];
                break;
            case 'medium':
                return sections[1];
                break
            case 'low':
                return sections[2];
                break;
        }
    }
    let count = 1;
    for (let obj of list) {
        let nest = ways(obj.priority);
        // div
        let div = document.createElement('div');
        div.classList.add('task-div');
        nest.append(div)
        // checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('task-checkbox');
        checkbox.setAttribute('id', `task${count}`)
        if (obj.status == 'Done') checkbox.setAttribute('checked', '')
        div.append(checkbox)
        // label
        let label = document.createElement('label');
        label.classList.add('task-label');
        label.setAttribute('for', `task${count}`);
        div.append(label);
        let labelText = document.createElement('p');
        labelText.classList.add('task__name');
        labelText.innerHTML = obj.name;
        label.append(labelText);
        // button
        let button = document.createElement('button');
        button.classList.add('finish-task-button', 'button')
        div.append(button)
        let img = document.createElement('img');
        img.classList.add('finish-task-img');
        img.setAttribute('alt', 'x');
        img.setAttribute('src', './img/cross-icon.svg')
        button.append(img);
        // +count
        count++;
    }
}
render(list);

addTaskDivs.forEach(div => {
    let input = div.querySelector('.task-add-input');
    let button = div.querySelector('.add-task-button');
    button.addEventListener('click', () => {
        const name = input.value;
        const priority = button.closest('section').classList[0];
        addTask(list, name,'Not Done', priority);
        input.value = '';
        render(list)
    })
})
setInterval(() => {
    document.querySelectorAll('.task-div').forEach(task => {
        let input = task.querySelector('.task-checkbox');
        input.addEventListener('change', () => {
            const name = task.querySelector('.task__name').innerHTML;
            changeStatus(list,name,(input.checked) ? 'Done' : 'Not Done');
            render(list)
        })
    })
}, 1000);

sections.forEach(section => {
    section.addEventListener('click', (e) => {
        if (e.target.classList.contains('finish-task-img')) {
            const name = e.target.closest('div').querySelector('.task__name').innerHTML;
            deleteTask(list, name)
            render(list)
        }
    })
})