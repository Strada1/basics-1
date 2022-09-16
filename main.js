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

const form_addtask_High = document.getElementById("form_addtask_High")	
const form_addtask_Low = document.getElementById("form_addtask_Low")

const del_task = document.querySelector(".btn_close")

let this_task_High = document.getElementById("this_task_High")

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

function render (event) {
	try {
		event.preventDefault();

		// if (!list.length === 0) {
		// 	this_task_High.remove()
		// }
		task_High.innerHTML = ""
		task_Low.innerHTML = ""

		
		

		list.forEach(function(item) {

			if (item.status === STATUS.TO_DO && item.priority === PRIORITY.High) {
				
				task_High.insertAdjacentHTML("afterbegin", 
					`
					<div id="this_task_High"> 
						<label class="input_checkbox" id="input_checkbox">
							<input type="checkbox" name="value" value="option">
							<input type="submit" value="&#9746" class="btn_close">
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
							<input type="checkbox" name="value" value="option">
							<input type="submit" value="&#9746" class="btn_close">
							${item.Name}
						</label>
					</div>
					`
			)
			form_addtask_Low.reset()
			}
		})
		
	} catch (err) {
		alert(err)
	}
}

//   function deleteTask(event) {
	 
// 	let elem_del = event.currentTarget

// 	  const IndexObj = list.findIndex(function(item) {
// 		return item.Name == task;
// 	  })

// 	  list.splice(IndexObj, 1)

// 	  form_addtask.remove()
// 	}


  function showList() {
  
	let GroupTO_Do = ``;
	let GroupIn_Progress= ``;
	let Group_Done = ``;
  
	const objTodo = list.filter(function(item){
	  return item.status == STATUS.TO_DO;
	})
	
	objTodo.forEach(function(item){
	  GroupTO_Do += `\n \t ${item.Name}, (${item.priority})`
	})
  
	const objIn_Progress = list.filter(function(item){
	  return item.status == STATUS.In_Progress;
	})
  
	objIn_Progress.forEach(function(item){
	  GroupIn_Progress += `\n \t ${item.Name}, (${item.priority})`
	})
  
	const objDone = list.filter(function(item){
	  return item.status == STATUS.Done;
	})
  
	objDone.forEach(function(item){
	  Group_Done += `\n \t ${item.Name}, (${item.priority})`
	})
	
	if (GroupTO_Do == false) {
	  console.log('Todo: \n \t -')
	} else {
	  console.log(`\n Todo:  ${GroupTO_Do}`)
	}
  
	if (GroupIn_Progress == false) {
	  console.log('In progress: \n \t -')
	} else {
	  console.log(`\n In progress:  ${GroupIn_Progress}`)
	}
   
	if (Group_Done == false) {
	  console.log('Done: \n \t -')
	} else {
	  console.log(`\n Done:  ${Group_Done}`)
	}
  }

  console.log(list)