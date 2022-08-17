function operation(id , a , b){
    switch (id) {
        case '+':
          return a + b  

        case '-':
             return a - b
               
        case '*':
            return a * b
              
        default:
            alert('Неизвестное значение')
            break;
    }
    }
    let id = prompt('id?');
    let a = Number(prompt('a?'));
    let b = Number(prompt('b?'));
    console.log(operation(id, a, b));