function Animal(nome) {
    this.nome = nome;
    this.qualEhOAnimal = function() {
        console.log(`Eu sou um ${this.nome}`);
    }
}

function Cachorro(nome, som) {
    Animal.call(this, nome);
    this.som = som;
    this.latir = function() {
        console.log(som);
    }
}

const toto = new Cachorro('cachorro', 'auauau');
toto.qualEhOAnimal(); //metodo da classe pai
toto.latir();
console.log(toto);
