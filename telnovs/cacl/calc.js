let result = document.getElementById('calculation');

result.addEventListener('click', calc);

function calc(){
  let namberOne = +document.getElementById('namber1').value;
  let namberTwo = +document.getElementById('namber2').value;
  let action = document.getElementById('action').value;
  let resultCacl = document.querySelector('.result');
  let resultNew;

  if( isNaN(namberOne) === false  &&  isNaN(namberTwo) === false  ){
    
    if(namberOne !== +"0" && namberTwo !== +"0" ){
          
      switch (action){

            case "add":  
                resultNew =  namberOne + namberTwo;  
                resultCacl.textContent = `${resultNew}`;
                break;
            case "subt":
                  
                resultNew =  namberOne - namberTwo;  
                resultCacl.textContent = `${resultNew}`;
                break;
            case "multi":

                resultNew =  namberOne * namberTwo;  
                resultCacl.textContent = `${resultNew}`;
                break;    
            case "divide":

                resultNew =  namberOne / namberTwo;  
                resultCacl.textContent = `${resultNew}`;
                break;            
      }
        
    }
    let parrent = document.querySelector(".calc")
    let div =document.createElement('div');
    div.className = " newDiv";
    div.style.cssText = 'display: flex; justify-content: right; text-aling: rigth; color:blue'
    parrent.append(div);
    div.textContent = `${resultNew}`;
    div.addEventListener('click', deleteDiv)
    function deleteDiv (){
        div.remove()
        console.dir(div)
    }

  }

  return  result
}

// function addDiv(){
//   let parrent = document.querySelector(".calc")
//   let div =document.createElement('div');
//   div.className = " newDiv";
//   div.style =  "text-align: rigth"
//   parrent.append(div);
//   // div.insertAdjacentHTML('beforebegin', 'parrent')
//   console.log(parrent)
// } 
// addDiv();