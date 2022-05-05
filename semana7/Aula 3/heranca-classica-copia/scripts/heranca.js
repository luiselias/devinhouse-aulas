function Animal() {}

Animal.prototype.nome = 'Animal';
Animal.prototype.qualEhOAnimal = function() {
    console.log(`Eu sou um ${this.nome}`);
};

function Cachorro(nome, som) {
    this.som = som;
    this.nome = nome;
    this.latir = function() {
        console.log(som);
    }
}

function Gato(nome, som) {
    this.som = som;
    this.nome = nome;
    this.miar = function() {
        console.log(som);
    }
}

Cachorro.prototype = Animal.prototype;
Gato.prototype = Animal.prototype;

const toto = new Cachorro('Peludão', 'auauauUUUUU');
toto.qualEhOAnimal(); //metodo da classe pai
toto.latir();
console.log(toto);

const toto = new Cachorro('Peludão', 'auauauUUUUU');
toto.qualEhOAnimal(); //metodo da classe pai
toto.latir();
console.log(toto);
