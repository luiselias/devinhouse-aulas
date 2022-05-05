const Aluno = function (nome) {
    this.nome = nome;
};

Aluno.prototype.nome = 'luis';

const luis = Object.create(Aluno, {
    nome: {
        value: 'Carlos',
    }
});

console.log(luis.nome);