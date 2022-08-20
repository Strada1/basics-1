//calc v1.2 (using switch/object)
function calc (firstOp, action, secondOp) {
    let operations = {
        add: 'add',
        sub: 'sub',
        multi: 'multi',
    }
      switch(action) {
        case operations.add: return firstOp + secondOp;
        case operations.sub: return firstOp - secondOp;
        case operations.multi: return firstOp * secondOp;
      }  
    }
console.log(calc (1000, 'sub', 7));

