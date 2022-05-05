function Aluno(nome, turma) {
    this.nome = nome;
    this.turma = turma;

    this.alunoToString = function() {
        console.log(`Nome: ${this.nome}, Turma: ${this.turma}`);
    }
}

const luis = new Aluno('Luis', 'Senior');
luis.alunoToString();

Aluno.prototype.falaNome = function () {
    console.log(this.nome);
}

luis.falaNome();

class Professor {
    constructor() {}
}

const carlos = new Professor();

Professor.prototype.dizAlo = function() {
    console.log('Diz alô');
}

carlos.dizAlo();