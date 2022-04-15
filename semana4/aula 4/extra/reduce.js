const array =  [1,2,3,4,5];

const total = array.reduce(function (totalizador, elemento) {
    return totalizador += elemento;
}, 0);

console.log(total);


const lutadores = [
    {pais: 'Brasil'},
    {pais: 'Brasil'},
    {pais: 'Alemanha'},
    {pais: 'EUA'},
    {pais: 'EUA'},
];

const paises = lutadores.reduce((paisesUnicos, elemento) => {
    if (!paisesUnicos.includes(elemento.pais)) {
        paisesUnicos.push(elemento.pais);
    }
    return paisesUnicos;
}, []);

console.log(paises);