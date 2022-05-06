function aluno(nome, idade, turma) {
    const nomeNomeDoAluno = nome;
    const idadeDoAluno = idade;
    let turmaDoAluno = turma;

    function dadosDoAluno() {
        const aluno = document.createElement('span');
        aluno.innerText = `Aluno ${nomeNomeDoAluno} tem a idade de ${idadeDoAluno} anos e esta na turma ${turmaDoAluno}\n`;

        document.body.appendChild(aluno);
    }

    return {
        getNome: () => nomeNomeDoAluno,
        getIdade: () => idadeDoAluno,
        getTurma: () => turmaDoAluno,
        setTurma: novaturma => turmaDoAluno = novaturma,
        dadosDoAluno,
    }

}

const roberval = aluno('Roberval o ladrão de chocolates', 99, 'Tv Colosso')
roberval.dadosDoAluno();

roberval.setTurma('Bozo');
roberval.dadosDoAluno();

console.log(roberval.nome);


