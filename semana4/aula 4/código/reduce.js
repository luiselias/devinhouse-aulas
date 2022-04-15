const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Como seria com o for

let somaDosNumerosx = 0;

numeros.forEach(function(valor) {
    somaDosNumerosx += valor;
});

console.log(somaDosNumerosx);

//###########

let somaDosNumerosComReduce = numeros.reduce(function (somaDosNumeros, valor) {
    return somaDosNumeros + valor;
}, 100);

//arrow functions com mais de um elementos exigem () - parenteses
somaDosNumerosComReduce = numeros.reduce((somaDosNumeros, valor) => somaDosNumeros += valor, 100);
console.log(somaDosNumerosComReduce);