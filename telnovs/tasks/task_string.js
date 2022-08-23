
function showVerticalMessage(str){
  let result;
  if(typeof str === 'string' && str.trim() !== '' ){
    result = str[0].toUpperCase()
      for(i = 1; i < str.length && i < 7; i++){
          result += `\n${str[i].toLocaleLowerCase()}` 
        }
  } else console.log("Вы ввели  не строку")
   
  if(result !== undefined){ 
    return console.log(result)
  }
}

showVerticalMessage('               ')

//=========================================
//Сделать первый символ заглавным
let ucFirst = (str) =>{
   console.log( str[0].toUpperCase() + str.substr(1,str.length-1));  
}
   //Выриант с лерн
  //  let newStr = str[0].toUpperCase() + str.slice(1);

  //или так 
//   function ucFirst(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }
  
//   alert( ucFirst("вася") ); // Вася

// } 

ucFirst('getro');
//===========================================================
//Проверка на спам Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false
 function checkSpam(str){
 let str1 = str.toLocaleLowerCase()
    if (str1.includes('viagra') || str1.includes('xxx')){
      return console.log(true);
    } else return console.log(false);
 }

 checkSpam('buy ViAgRA now') 
checkSpam('free xxxxx')
checkSpam("innocent rabbit")

//=================================================================================
/*
Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
*/

function truncate(str, maxlength){
  if(str.length > maxlength){
    return  console.log(str.slice(0, maxlength - 1) + '…')
  }else return console.log(str)
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) 


truncate("Всем привет!", 20)
