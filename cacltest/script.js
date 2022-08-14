

const calc = (action ,a,b) => {
  if (action === 'plus') {
      console.log(a + b)
  }
    if (action === 'minus') {
        console.log(a - b)
    }
    if (action === 'multy') {
        console.log(a * b)
    }
}

console.log(calc("multy",5,2))

const calculator = (action ,a,b) => {
    switch (action) {
        case 'plus' :  console.log(a + b)
            break;
        case 'minus' :  console.log(a - b)
            break;
        case 'multy' :  console.log(a * b)
            break;

    }
}

console.log(calculator("plus",5,2))

