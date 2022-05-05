const meuNome = 'Luis Carlos';

/*Criar função para Aluno
nome
idade
turma
metodo que imprime no HTML os dados do Aluno*/

function Cachorro(nome, raca, peso) {
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
    this.latir = function() {
        console.log('Auau');
    }

    this.cachorroToString = function () {
        console.log(`Nome: ${this.nome}, Raça: ${this.raca}, Peso: ${this.peso}`);
    }
}

const pinscher = new Cachorro('totó', 'pinscher', 3.5);
pinscher.cachorroToString();
console.log(pinscher);
console.log(pinscher.nome, pinscher.peso, pinscher.dono);

const viraLata = new Cachorro('tainha', 'vira-lata', 6);

console.log(typeof pinscher);
console.log(pinscher instanceof  Cachorro);



