const HIGHPRIORITYINPUT = document.getElementById('high-priority-input');
const LOWPRIORITYINPUT = document.getElementById('low-priority-input');
const HIGHINPUTCONTAINER = document.getElementsByClassName('input-container')[0];
const LOWINPUTCONTAINER = document.getElementsByClassName('input-container')[1];

function createHighTask() {
    HIGHINPUTCONTAINER.insertAdjacentHTML('afterend', `
        <div class="task-outer">
                    <div class="task-inner">
                        <div class="text-container">
                            <label class="text"> 
                                <input type="checkbox" id="task" name="task"> 
                                <span>${HIGHPRIORITYINPUT.value}</span>       
                            </label>
                        </div>
                        <div class="close">
                            <img src="./close-icon-2.svg">
                        </div>
                    </div>
                </div>
        `);
}

// HIGHPRIORITYINPUT.addEventListener('submit', createHighTask)

