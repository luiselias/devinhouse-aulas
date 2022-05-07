function aluno(nome, idade, turma) {
    const nomeAluno = nome;
    const idadeAluno = idade;
    let turmaAluno = turma;

    function dadosAluno() {
        const aluno = document.createElement('span');
        aluno.innerText = `Nome: ${nomeAluno}, Idade: ${idadeAluno}, turma: ${turmaAluno}`;
        
        document.body.appendChild(aluno);
    }

    return {
        getNome: () => nomeAluno,
        getIdade: () => idadeAluno,
        getTurma: () => turmaAluno,

        setTurma: novaTurma => turmaAluno = novaTurma,
        dadosAluno,            
    }
}

const jhon = aluno('Jhon Wick', 45, 'Continente Hotel');
jhon.dadosAluno();