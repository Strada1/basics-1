function newTask(input, father){
    const taskElement = document.getElementById(input);
    let taskText = taskElement.value;

    let container = document.getElementById(father);
    let taskPattern = document.getElementById("hightask");

    let newdiv = taskPattern.cloneNode(true);
    newdiv.className = "task";
    newdiv.childNodes[3].innerHTML = taskText;
    container.appendChild(newdiv);
}

