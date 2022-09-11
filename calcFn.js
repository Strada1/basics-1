export function calc() {
    
    let a = document.getElementsByTagName("input")[0].value;
    let action = document.getElementsByTagName("select")[0].value;
    let b = document.getElementsByTagName("input")[1].value; 

    if (b == 0 && action == '/'){
        alert('На ноль делить нельзя')
    } 
    
    const operations = {
        '+': +a + +b,
        '*': a * b,
        '-': a - b,
        '/': (a / b).toFixed(2),
    }

    for (let key in operations) {
        if (key == action) {
            return operations[key];
        }
    }

}

