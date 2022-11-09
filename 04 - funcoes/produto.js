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

function aplicarJuro(precoEtiqueta, juro){
    return (precoEtiqueta + (precoEtiqueta * juro/100))
}

function precoFinal(precoEtiqueta, formaPagamento){
    if (formaPagamento == 'Débito'){
        return aplicarDesconto(precoEtiqueta, 10);
    }
    else if (formaPagamento == 'Dinheiro' || formaPagamento == 'PIX'){
        return aplicarDesconto(precoEtiqueta, 15);
    }
    else if(formaPagamento == '2x'){
        return precoEtiqueta;
    }
    else if(formaPagamento == '+2x') {
        return aplicarJuro(precoEtiqueta, 10);
    }
    else {
        return  0;
    }
}

//main
(function (){
preco=precoFinal(100, 'PIuX');
console.log('R$ ' + preco.toFixed(2));
})();