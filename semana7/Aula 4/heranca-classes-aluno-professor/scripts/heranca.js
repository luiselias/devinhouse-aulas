class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    dadosDaPessoa() {
        console.log(`Nome ${this.nome}, Idade: ${this.idade}`);
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, turma) {
        super(nome, idade);
        this.turma = turma
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina;
    }
}

const luis = new Aluno('Luis Carlos', 44, 'Senior');
luis.dadosDaPessoa();

const carlos = new Professor('Carlos Alberto', 60,  'Praça é nossa');
console.log(carlos.dadosDaPessoa());


let mundo = 'terra';

function estouMarte() {
    let mundo = 'Marte';
    console.log('Em em ', mundo);
}
