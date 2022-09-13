const input_addtask = document.getElementById("input_addtask")

input_addtask.addEventListener("click", addtask)

function addtask () {
	const value_input = input_addtask.value;
	alert(value_input)
}