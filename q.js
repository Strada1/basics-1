const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
  "writqweqweqwee a post": "To Do"
}

function showList() {

  let todoStr = '';
  for(let key in list) {
    if(list[key] === "To Do") { 
      todoStr += `${key}\n`;
    } 
  }
  if(todoStr == '') {
    todoStr = '    -';
  };
  console.log(`Todo:\n${todoStr}`);
}

showList();