const aluno1 = {
    nome: 'Luis Carlos Elias',
    idade: 44,
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

function imprimeDadosDoAluno(aluno) {
    console.log(`Nome ${aluno.nome} e idade ${aluno.idade}`);
}


imprimeDadosDoAluno(aluno1)