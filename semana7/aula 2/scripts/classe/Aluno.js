class Aluno {
    constructor(nome, idade, turma) {
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
    }

    alunoToString () {
        const aluno = document.createElement('h2');
        aluno.innerText = `Nome: ${this.nome}, Idade:` +
        `${this.idade}, Turma: ${this.turma}`;

        document.body.appendChild(aluno);
    }
}
