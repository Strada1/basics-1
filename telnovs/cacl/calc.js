let result = document.getElementById('calculation');

result.addEventListener('click', calc);

function calc(){
  let namberOne = +document.getElementById('namber1').value;
  let namberTwo = +document.getElementById('namber2').value;
  let action = document.getElementById('action').value;
  let result = document.querySelector('.result');
  let resultNew;

  if( isNaN(namberOne) === false  &&  isNaN(namberTwo) === false  ){
    
    if(namberOne !== +"0" && namberTwo !== +"0" ){
          
      switch (action){

            case "add":  
                resultNew =  namberOne + namberTwo;  
                result.textContent = `${resultNew}`;
                break;
            case "subt":
                  
                resultNew =  namberOne - namberTwo;  
                result.textContent = `${resultNew}`;
                break;
            case "multi":

                resultNew =  namberOne * namberTwo;  
                result.textContent = `${resultNew}`;
                break;    
            case "divide":

                resultNew =  namberOne / namberTwo;  
                result.textContent = `${resultNew}`;
                break;            
      }
      
    }
  }
  return  console.dir(result)
}