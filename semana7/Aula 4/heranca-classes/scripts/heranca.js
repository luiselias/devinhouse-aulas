class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    qualEhOAnimal() {
        console.log(`Eu sou o animal ${this.nome}`);
    }
}

class Cachorro extends Animal {
    constructor(nome, som) {
        super(nome);
        this.nome = nome;
        this.som = som;
    }

    latir() {
        console.log(this.som);
    }
}

class Pinscher extends Cachorro {
    constructor(nome, som) {
        super(nome, som);
    }
    
    meuEstadoEmocional() {
        console.log('Nunca estou satisfeito com nada!');
    }
}

const toto = new Cachorro('cachorro', 'Auauauau');
console.log(toto.qualEhOAnimal());
console.log(toto.latir());
console.log(toto);

const pacoca = new Pinscher('cachorro', 'auauauaa');
console.log(pacoca.qualEhOAnimal());
console.log(pacoca.latir());
console.log(pacoca.meuEstadoEmocional());
