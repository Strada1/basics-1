let str1 = 0;



function upto(str){
    if(str[0] == "s"){
            console.log(str[0].toUpperCase());
            str1++;
        }
    while(str1 < str.length){
        console.log(str[str1]);
        str1++;
    }

}

upto("strada");