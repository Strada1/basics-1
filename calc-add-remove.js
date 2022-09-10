document.addEventListener("DOMContentLoaded", () => {

    function calc() {
        
        let a = document.getElementsByTagName("input")[0].value;
        let action = document.getElementsByTagName("select")[0].value;
        let b = document.getElementsByTagName("input")[1].value; 

        if (b == 0 && action == '/'){
            alert('На ноль делить нельзя')
        } 
        
        const operations = {
            '+': +a + +b,
            '*': a * b,
            '-': a - b,
            '/': (a / b).toFixed(2),
        }

        for (let key in operations) {
            if (key == action) {
                return operations[key];
            }
        }
    
    }

    function createResult(){
        document.getElementById("result").innerHTML += `<li class="probably-removed">${calc()}</li>`;
    }

    function addResult(){
        button.addEventListener("click", createResult);
        button.addEventListener("click", removeResult);
    }

    function removeResult(){
        let elements = document.querySelectorAll('.probably-removed');
        for (let elem of elements) {
            elem.onclick = function(event) {
                elem.remove();     
            };
        }
    }

    button.onclick = addResult();

});
