var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var r = document.getElementById('r');

document.addEventListener('input', function completo() {
    var resultado = numero1.valueAsNumber / numero2.valueAsNumber;
    r.textContent = isNaN(resultado) ? '' : resultado;
});