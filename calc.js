export function calc(operation, num1, num2) {
    
    const operations = {
        add : '+', 
        multi : '*', 
        sub : '-',
        div: ':',
    }
   
    switch(operation){
        case operations.add:
            return num1+num2;
            break;
        case operations.multi:
            return num1*num2;
            break;
        case operations.sub:
            return num1-num2;
            break;
        case operations.div:
            return num1/num2;
            break;    
        default:
            return 'Wrong data, try again';
    } 
}