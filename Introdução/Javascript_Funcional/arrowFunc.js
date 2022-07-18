// testando no console do navegador.

var somaV2 = (a, b) => a + b;

function RetanguloV2(altura, largura) {
    this.altura = altura;
    this.largura = largura;
    this.area = () => this.altura * this.largura;
}

var r1 = new RetanguloV2(5, 6);

var imprimeMensagem = m => console.log(m);

var imprimeMensagem2 = () => console.log("teste");
// é necessario declarar o parametro para usar arrow functions assim.