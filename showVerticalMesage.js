/*/Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль. 
Чтобы получилось вот так:
showVerticalMessage('strada')
S
t
r
a
d
a
Если строка начинается с буквы "s" - нужно вывести эту строку с первой заглавной буквой
Если строка больше 7 символов - вывести только первые 7  */

function showVerticalMessage(str) {
    if (str[0]=='s'){
        str = str[0].toUpperCase()+str.slice(1);
    }
    if (str.length>7){
        str = str.substr(0, 7);
    }
    for (let i=0; i<str.length; i++){
        console.log(str[i]);
    }
}
showVerticalMessage('stradavadavada');