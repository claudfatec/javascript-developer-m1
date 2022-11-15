//exerc. 1
num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(i*num);
}

//exerc. 2
num = [2, 4, 136, 5, 6, 7, 8];
for (let i = 0; i < num.length; i++) {
    if (num[i]  % 2 == 0) {
        console.log(num[i]);
    }
}

// exerc.3
lista = ["terry", "very", "crab", "vinny"];
for (let i = 0; i < lista.length; i++) {
    if (lista[i].startsWith("v")) {
        console.log(lista[i]);
    }
}

// exerc 4
const num4 = [];
for (let i = 10; i <=50 ; i++) {
    if (i %2 ==0){
        num4.push(i);
        console.log(i);
    };
}

//exerc 5
lista  = [2, 7, 3, 8, 10, 4];
for (let i = 0; i<lista.length; i++){
    if (lista[i]<5){
        console.log('Nota: ' + lista[i] + ' Recuperação.');
    }
}

//exerc 6
// poderia ser assim: console.log(Math.max(2, 7, 3, 8, 106, 4));
lista = [2, 7, 3, 8, 10, 4];
maior = -1;

for (let i = 0; i < lista.length; i++) {
if (maior < lista[i]) {
    maior = lista[i];
}
}
console.log('A maior nota foi ' + maior);