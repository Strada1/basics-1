export default function restartCalculator() {
    document.querySelector('.result').textContent = '';
    document.getElementById('number_1').value = '';
    document.getElementById('number_2').value = '';
}