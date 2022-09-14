	const HighDiv = document.querySelector('#high') 
	const LowDiv = document.querySelector('#low') 
	todo(HighDiv)
	todo(LowDiv)

function todo (anyDiv) {
    const Form =  anyDiv.querySelector('.add_task')
    Form.addEventListener('submit', addTask)
    
    function addTask(evt){
        let taskName = Form.querySelector('input').value
        anyDiv.querySelector('.list').insertAdjacentHTML('afterbegin', `
			<div class='task_list'>
			<label><input type="radio">${taskName}<span></span></label>
			<button id="delButton">×</button>
			</div>`)
        evt.preventDefault()
        Form.querySelector('input').value = ''
    }
}  
