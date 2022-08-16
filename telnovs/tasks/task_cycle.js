//   for (i = 1; i < 20; i++ ){
//     console.log(i)
//   };

  // for(i=2; i<= 10; i++){
  //   if (i%2 == 0){
  //     console.log(i);
  //   }
  // };
  // let  i =0;
  // while (i<3) {
  //   console.log(`namber ${i}!`);
  //   i++;
  // };
  // let i;
  // do{
  //  i = prompt("ВВедите чило ,больше 100"); 
  //  console.log(i);
  // }while(i<= 100 && i);

  
  
  // for(i=2;i<=10; i++){
  //   if(i%2 !== 0 && ){
  //   console.log(i);
  //   } 
  // };
  let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime; 
  }

  console.log( i ); // простое число
}
