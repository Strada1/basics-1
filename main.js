const input_addtask = document.getElementById("input_addtask")
const input_checkbox = document.getElementById("input_checkbox")

input_addtask.addEventListener("click", addtask)

function addtask () {

	const value_input = input_addtask.value;
	input_checkbox.insertAdjacentElement("beforeend", 
	`
		<label class="input_checkbox" id="input_checkbox">
			<input type="checkbox" name="value" value="option">
			${value_input}
		</label>
	`
	)

	alert(value_input)
}