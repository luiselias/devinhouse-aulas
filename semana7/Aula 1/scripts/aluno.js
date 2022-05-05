function criaAluno (nome, idade, turma) {
    return {
        exibeAluno: function() {
            const aluno = document.createElement('span');
            aluno.innerText = `Meu nome é ${nome}, minha idade é ${idade} anos e estou na turma ${turma}\n`;
            
            const pai = document.querySelector('body');
            pai.appendChild(aluno);
        },
    };
};

const aluno1 = criaAluno('Luis Carlos', 44, '7C');
aluno1.exibeAluno();
const aluno2 = criaAluno('Maria de Souza', 30, '1F');
aluno2.exibeAluno();
const aluno3 = criaAluno('Zé Bonitinho', 44, '4D');
aluno3.exibeAluno();