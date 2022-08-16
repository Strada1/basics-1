function calc (operator,a,b){
       switch(operator) {
              case 'add':
                     return Number(a) + Number(b);

              case "sub":
                     return Number(a) - Number(b);
              case "mult":
                     return Number(a) * Number(b);
              case "div":
                     return Number(a) / Number(b);
              
            }  
       }
       
       console.log(calc("add",100,500));
       console.log(calc("sub",500,100));
       console.log(calc("mult",100,500));
       console.log(calc("div",100,500));




