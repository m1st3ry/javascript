//Testes feitos no console do navegador.

    function Retangulo(altura, largura) {
        this.altura = altura;
        this.largura = largura;
        this.area = function() {
            return this.largura * this.altura;
        };
    }
