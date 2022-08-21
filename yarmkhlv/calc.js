function calc(id, a, b) {
    switch(id){
    case 'add':
    console.log(a + b);
    break;
    case 'multi':
    console.log(a * b);
    break;
    case 'subtract':
    console.log(a - b);
    break;
}
}

calc('add', 3, 5);
