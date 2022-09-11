export default function rememberAnswer(answer) {
    let div = document.createElement('div');
    div.className = 'answers';
    div.innerHTML = answer;
    document.body.append(div);
    div.onclick = function(event) {
        event.currentTarget.remove();
      };
}