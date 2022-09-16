const STATUS  = {
TO_DO: "To Do",
Done: "Done",
}

const PRIORITY = {
High: "high",
Low: "low",
}

const input_addtask_High = document.getElementById("input_addtask_High")
const input_addtask_Low = document.getElementById("input_addtask_Low")
const input_checkbox = document.getElementById("input_checkbox")
const task_High = document.getElementById("task_High")
const task_Low = document.getElementById("task_Low")
let task_done = document.getElementById("task_done")

const form_addtask_High = document.getElementById("form_addtask_High")	
const form_addtask_Low = document.getElementById("form_addtask_Low")

form_addtask_High.addEventListener("submit", addtask_High)
form_addtask_Low.addEventListener("submit", addtask_Low)

const list = [ ];

function addtask_High () {
	try {
		const value_input = input_addtask_High.value;

		const indexObj = list.findIndex(function(item){
			return item.Name == value_input;
		})
		if (indexObj == -1) {
			list.push({Name: value_input,
			status: STATUS.TO_DO,
			priority: PRIORITY.High,}) 

			render(event)
		} else {
			alert("Уже есть такая задача")
		}

	} catch (err) {
		alert(err)
	}
}

function addtask_Low () {
	try {
		const value_input = input_addtask_Low.value;

		const indexObj = list.findIndex(function(item){
			return item.Name == value_input;
		})
		if (indexObj == -1) {
			list.push({Name: value_input,
			status: STATUS.TO_DO,
			priority: PRIORITY.Low,}) 

			render(event)

		} else {
			alert("Уже есть такая задача")
		}

	} catch (err) {
		alert(err)
	}
}

function deleteTask(event) {
	try {
		let task = event.target.parentNode.innerText
		task = task.trim()

		const IndexObj = list.findIndex(function(item){
			return item.Name == task
		  })
		  
			list.splice(IndexObj, 1)

			render(event)

	} catch (err) {
		alert(err)
	}
}

function changePriority(event) {
	
	try {
		let checkboxOn = event.target.parentNode.innerText
		checkboxOn = checkboxOn.trim()
		console.log(checkboxOn)

		

		const indexObj = list.findIndex(function(item){
			return item.Name == checkboxOn
		  })

		  console.log(indexObj)

		list[indexObj].status = STATUS.Done

		console.log(list)

			render(event)

	} catch (err) {
		alert(err)
	}
  }

function render (event) {
	try {
		event.preventDefault();

		task_High.innerHTML = ""
		task_Low.innerHTML = ""
		task_done.innerHTML = ""

		list.forEach(function(item) {

			if (item.status === STATUS.TO_DO && item.priority === PRIORITY.High) {

				task_High.insertAdjacentHTML("afterbegin", 
					`
					<div> 
						<label class="input_checkbox" id="input_checkbox">
							<input type="checkbox" name="value" value="option" onclick="changePriority(event)">
							<input type="submit" value="&#9746" class="btn_close" id="close_Task" onclick="deleteTask(event)">
							${item.Name}
						</label>
					</div>
					`
			)
				form_addtask_High.reset()

			} else if (item.status === STATUS.TO_DO && item.priority === PRIORITY.Low) {
				task_Low.insertAdjacentHTML("afterbegin", 
					`
					<div> 
						<label class="input_checkbox" id="input_checkbox">
							<input type="checkbox" name="value" value="option" onclick="changePriority(event)">
							<input type="submit" value="&#9746" class="btn_close" id="close_Task" onclick="deleteTask(event)">
							${item.Name}
						</label>
					</div>
					`
			)
			form_addtask_Low.reset()
			} else if (item.status === STATUS.Done) {
				task_done.insertAdjacentHTML("afterbegin", 
					`
					<div> 
						<label class="input_checkbox done" id="input_checkbox">
							<input type="checkbox" name="value" value="option" onclick="changePriorityToDo(event)">
							<input type="submit" value="&#9746" class="btn_close" id="close_Task" onclick="deleteTask(event)">
							${item.Name} 		(done)
						</label>
					</div>
					`
			)
			}
		})

	} catch (err) {
		alert(err)
	}
}
console.log(list)