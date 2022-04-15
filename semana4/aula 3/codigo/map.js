const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tabuada = numeros.map(numero => {
    return `2 x ${numero} = ${numero * 2}`;
});

console.log('tabuada', tabuada);