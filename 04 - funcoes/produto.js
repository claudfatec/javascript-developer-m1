/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

function aplicarDesconto(precoEtiqueta, desconto){
    return (precoEtiqueta - (precoEtiqueta * desconto/100));
}

function precoFinal(precoEtiqueta, formaPagamento){
    if (formaPagamento == 'Débito'){
        return aplicarDesconto(precoEtiqueta, 10);
    }
    else if (formaPagamento == 'Dinheiro' || formaPagamento == 'PIX'){
        return aplicarDesconto(precoEtiqueta, 15);
    }
    else if(formaPagamento == '2x'){
        return aplicarDesconto(precoEtiqueta, 0);
    }
    else if(formaPagamento == '+2x') {
        return aplicarDesconto(precoEtiqueta, -10);
    }
    else {
        return  999999999;
    }
}

//main
(function (){
var precoEtiqueta =  prompt("Qual o preço de etiqueta do produto?");
var formaPagamento = prompt("Qual a forma de pagamento?");
preco=precoFinal(precoEtiqueta, formaPagamento);
if (preco == 999999999){
    alert("Recarregue a página (F5) e informe Forma de Pagamento: Débito, Dinheiro, PIX, 2x ou +2x");
}
else{
    alert('R$ ' + preco.toFixed(2));
}
})();