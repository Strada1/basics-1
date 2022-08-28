function showVerticalMessage(string){

   const stringNew = string.toLowerCase();
   stringNew = stringNew.slice(0,6)
   if (stringNew[0] === 's') {
      stringNew = stringNew[0].toUpperCase() + stringNew.slice(1,6)
   }
   for (let char of stringNew) {
         console.log(char)
   }
}
showVerticalMessage("STRAdaLEarnJs")


   
