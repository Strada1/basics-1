function calc (a,b,action){

    switch (action) {
        case ('add') :
            return (a+b);
        
        case ('multi'):
            return (a*b);
        
        case ('subtract'):
            return (a-b)
            
        default:
            return ('incorrect data')           
        }
    }
    console.log (calc(5,2,'add'))
    console.log (calc(5,2,'multi'))
    console.log (calc(5,2,'subtract'))
