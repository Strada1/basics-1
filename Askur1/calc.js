let a, b, actions;

function calc(a,b,actions){
    switch(actions) {
        case 'add':
            console.log(a+b);
            break;
        case 'multi':
            console.log(a*b);
            break;
        case 'subtract':
            console.log(a-b);
            break;
    }
}

calc(4,4,'add');
calc(4,4,'multi');
calc(4,4,'subtract');