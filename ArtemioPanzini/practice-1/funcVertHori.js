function horizntalToVerical (word){
    console.log(`${word[0]}`.toUpperCase());
    for (let i = 1; i < 7; i++){
        if (word[i]!=undefined){
        console.log(`${word[i]}\t`)
        }
    }
}

horizntalToVerical('strada');
console.log('tamam');
horizntalToVerical('nestradaem');
console.log('tamam');
horizntalToVerical('st123')