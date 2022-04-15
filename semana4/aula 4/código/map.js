const alunos = [
    {
        nome: 'Luis',
        idade: 44,
    },
    {
        nome: 'Maria',
        idade: 21,
    },
    {
        nome: 'Pedro',
        idade: 11,
    },
];

//usando for
const nomes = [];

alunos.forEach(function(aluno) {
    nomes.push(aluno.nome);
});
console.log(nomes);
//###########


//############
const nomesComMap = alunos.map(function(aluno){
    return aluno.nome;
});

console.log(nomesComMap);
//###############

const nomesComMapArrowFunction = alunos.map(aluno => aluno.nome);
console.log(nomesComMapArrowFunction);

//Exemplo de uso de template string
const multiplicador = 1;
const numero = 1;

const texto = `${multiplicador} X ${numero} = ${multiplicador * numero}`;

console.log(texto);
//########################