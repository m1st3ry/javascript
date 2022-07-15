var salario = document.getElementById('salario');
var desconto = document.getElementById('desconto');
var r = document.getElementById('r');

document.addEventListener('input', function completo() {
    var resultado = salario.valueAsNumber + desconto.valueAsNumber;
    r.textContent = isNaN(resultado) ? '' : resultado;
});