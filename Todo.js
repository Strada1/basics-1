const list = {
    "Take a lesson" : "Todo",
    "Go to the store" : "Done",
    "To eat" : "Stop",
     Work : "In processing",
 };
  
 function changeStatus (task, status) {  
     if (task in list) {
     list[task] = status;               
     } else { console.log("Error!")}
 };
 
 function addTask (newTask) {
     list[newTask] = "Todo";
 };
 
 function deleteTask (delTask) {
     delete list[delTask];
 };
 
 function showList () {
     console.log( "\n" + "DONE:" )  
      for (let tasks in list) {    
      if (list[tasks] == "Done" ) { 
      console.log ("+", tasks); }
     } 
     console.log( "\n" + "TO DO:" )     
      for (let tasks in list) {  
      if (list[tasks] == "Todo" ) { 
      console.log ("-", tasks); }
     } 
     console.log( "\n" + "STOP:" )
      for (let tasks in list) {
      if (list[tasks] == "Stop" ) {
      console.log("-", tasks); }
     }
     console.log( "\n" + "IN PROCESSING:" )
      for (let tasks in list) {
      if (list[tasks] == "In processing") {
      console.log("-", tasks + "\n") } 
     }
 };
 
 changeStatus ("Take a lesson", "Stop");
 addTask("Homework");
 addTask("Run");
 addTask("Store");
 addTask("Feed the rhinoceros")
 changeStatus ("Feed the rhinoceros", "Stop");
 changeStatus ("Run", "Done");
 deleteTask("To eat");
 showList();