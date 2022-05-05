function Aluno(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;

    this.alunoToString = function () {
        const aluno = document.createElement('h2');
        aluno.innerText = `Nome: ${this.nome}, Idade: ${this.idade}, Turma: ${this.turma}`;

        document.body.appendChild(aluno);
    }
}

const alunoLuis = new Aluno('Luis Carlos', 44, 'Senior');
alunoLuis.alunoToString();

const alunoMaria = new Aluno('Maria Siveira', 30, 'Senior');
alunoMaria.alunoToString();