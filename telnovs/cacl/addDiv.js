export function addDiv(){
    let parrent = document.querySelector(".calc")
    let div =document.createElement('div');
    div.className = " newDiv";
    div.style.cssText = 'display: flex; justify-content: right; text-aling: rigth; color:blue'
    parrent.append(div);
    div.textContent = `${resultNew}`;
    div.addEventListener('click', deleteDiv)
    function deleteDiv (){
        div.remove()
        console.dir(div)
    }
}  