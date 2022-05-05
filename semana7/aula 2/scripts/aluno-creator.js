const alunoCreator = function (nome, idade, turma) {
    const alunoModelo = {
        nome: '',
        idade: null,
        turma: '',
        alunoToString: function() {
            const aluno = document.createElement('h2');
            aluno.innerText = `Nome: ${this.nome}, Idade: ${this.idade}, Turma: ${this.turma}`;
    
            document.body.appendChild(aluno);
        }
    };

    const alunoValores = {
        nome: {
            value: nome,
            writable: true,
            configurable: true,
            enumerable: true,
        },
        idade: {
            value: idade,
            writable: true,
        },
        turma: {
            value: turma,
        }
    };

    return Object.create(alunoModelo, alunoValores);
}
