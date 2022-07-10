var m = 'Olá';
imprimeOla();

function imprimeOla(){
    var nome = 'Robinson';
    console.log(m);
    console.log(nome);
    imprimeOla2();

    function imprimeOla2() {
        console.log(m);
        console.log(nome);
    }
}

function soma(op1, op2) {
    return op1 + op2;
}

function dados() {
    var nome = 'Robinson';
    var idade = 39;
    var cidade = 'São Paulo';
    var CEP = '05150-000';
    var CPF = '313848343-09';
}