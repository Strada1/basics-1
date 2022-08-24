// let styles = ['Джаз', 'Блюз'];
// console.log(styles)
// styles.push('Рок-н-ролл');
// console.log(styles);

// styles[1] = 'Классика'
// console.log(styles);

// let newStyles = styles.shift();
// console.log(styles)
// console.log(newStyles)

// styles.unshift('Рэп', 'Регги')
// console.log(styles)

let arr = ['a', 'b'];

arr.push(function() {
    console.log(this);
});

arr[2]()