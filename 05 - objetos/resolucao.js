class Carros {
    modelo;
    marca;
    cor;
    gastoMedioKmPorLitro;

    constructor(modelo, marca, cor, gastoMedioKmPorLitro){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKmPorLitro = gastoMedioKmPorLitro;
    }

    gastPercurso (km, precoCombustivel){
        return (km / this.gastoMedioKmPorLitro*precoCombustivel)
    }
}

modelo = prompt ('Qual o modelo do carro?');
marca = prompt ('Qual a marca do carro?');
cor = prompt ('Qual a cor do carro?');
gastoMedioKmPorLitro = prompt ('Quantos km o carro roda por litro?');
km = prompt ('Qual a distância do percurso em Km?');
precoCombustivel = prompt ('Qual o preço do litro do combustível?');
meuCarro = new Carros (modelo, marca, cor, gastoMedioKmPorLitro);
gasto = meuCarro.gastPercurso(km, precoCombustivel);
alert('Você gastará R$' + gasto.toFixed(2) + ' nesse percurso.');
document.getElementById("texto").innerHTML = "carro";