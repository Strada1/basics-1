/* 
Операции с массивами
важность: 5
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
*/
 /*
 Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
 */

let styles = ['Джаз','Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);

function SortArray(arr){

   arr[Math.ceil(arr.length/2 -1)] = 'Классика'
   console.log (arr) 
 }
SortArray(styles)

styles.shift();
console.log(styles);

styles.unshift('Рэп', 'Регги');
console.log(styles);

//========================================================================================
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

 arr[2](); // ?
//==========================================
/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
// не смог решить 
function sumInput(){
  let numbers = [];

  while (true){
    
    let promm = prompt('Введите чило')
    
    if (promm === "" || promm === null || !isFinite(promm))break;

    numbers.push(+promm)

  }  
   let sum;
   for(let namber of nambers){
    sum += namber;
   }
    return sum
}
//======================================

/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
*/ 
function  getMaxSubSum(arr){
  if(arr !== undefined ){
    
      let sum;
      for(i = 0; i < arr.length; i++){
            
      } 
  }  
}

/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/

// function camelize(str){
//  let newstr = str.split('-').map()
// //  for (i = 0 ; i < newstr.length ; i++){
//   console.log(newstr);
//  }



// camelize("background-color")
function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
		res.push(i)
	}
	return console.log(res)
}

buildFun(10)