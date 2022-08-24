function show(str){
    if (str[0] === "s" || str[0] === "S"){
      str= str[0].toUpperCase() + str.slice(1);
    } 
    if (str.length > 7){
      str = str.slice(0, 6)
    };
    for (let char of str){
      console.log(char)
    }
    
  }
  show("Strada")