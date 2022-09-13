const input_addtask = document.getElementById("input_addtask")
const input_checkbox = document.getElementById("input_checkbox")
const form_addtask = document.getElementById("form_addtask")

form_addtask.addEventListener("submit", addtask)

function addtask (event) {
	event.preventDefault();

	const value_input = input_addtask.value;

	form_addtask.insertAdjacentHTML("afterend", 
	`
	<div> 
		<label class="input_checkbox" id="input_checkbox">
			<input type="checkbox" name="value" value="option">
			${value_input}
		</label>
	</div>
	`
	)
}