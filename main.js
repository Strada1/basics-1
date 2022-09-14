const STATUS  = {
	TO_DO: "To Do",
	Done: "Done",
  }

const PRIORITY = {
	High: "high",
	Low: "low",
  }

const input_addtask = document.getElementById("input_addtask")
const input_checkbox = document.getElementById("input_checkbox")
const form_addtask = document.getElementById("form_addtask")	
const del_task = document.querySelector(".btn_close")

form_addtask.addEventListener("submit", addtask)


const list = [ ];

function addtask (event) {
	event.preventDefault();

	const value_input = input_addtask.value;

	const indexObj = list.findIndex(function(item){
		return item.Name == value_input;
	  })
	  if (indexObj == -1) {
		list.push({Name: value_input,
		  status: STATUS.TO_DO,
		  priority: PRIORITY.High,}) 
	 
		form_addtask.insertAdjacentHTML("afterend", 
		`
		<div> 
			<label class="input_checkbox" id="input_checkbox">
				<input type="checkbox" name="value" value="option">
				<input type="submit" value="&#9746" class="btn_close">
				${value_input}
			</label>
		</div>
		`
		)
		form_addtask.reset()
	  } else {
		alert("Уже есть такая задача")
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