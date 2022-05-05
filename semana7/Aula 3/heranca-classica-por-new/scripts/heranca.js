function Animal(nome) {
    this.nome = nome;
    this.qualEhOAnimal = function() {
        console.log(`Eu sou um ${this.nome}`);
    }
}

function Cachorro(nome, som) {    
    this.som = som;
    this.nome = nome;
    this.latir = function() {
        console.log(som);
    }
}


Cachorro.prototype = new Animal()

const toto = new Cachorro('Dogão', 'auauau');
toto.qualEhOAnimal(); //metodo da classe pai
toto.latir();
console.log(toto);
