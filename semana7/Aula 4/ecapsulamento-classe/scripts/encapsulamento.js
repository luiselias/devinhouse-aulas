class Aluno {
    #nome
    #idade
    #turma

    constructor(nome, idade, turma) {
        this.#nome = nome;
        this.#idade = idade;
        this.#turma = turma;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    get turma() {
        return this.#turma;
    }

    set turma(novaTurma) {
        this.#turma = novaTurma;
    }

    dadosDoAluno() {
        const aluno = document.createElement('span');
        aluno.innerText = `Aluno ${this.#nome} tem a idade de ${this.#idade} anos e esta na turma ${this.#turma}\n`;

        document.body.appendChild(aluno);
    }
}

const roberval = new Aluno('Roberval o ladrão de chocolates', 99, 'Tv Colosso')
roberval.dadosDoAluno();

roberval.turma = 'Bozo'
roberval.dadosDoAluno();


