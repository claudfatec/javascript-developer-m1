const { gets, print } = require('./funcoes-auxiliares');
num = gets();
for (let i = 1; i <= 10; i++) {
    prod= num*i;
    print(num + "x" + i + " = " + prod);
}
