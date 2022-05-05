const pinscher = {
    nome: 'totó',
    raca: 'pinscher',
    peso: 3.5,
    latir: function() {
        console.log('Auau');
    }
};

const viraLata = {
    nome: 'tainha',
    raca: 'vira-lata',
    peso: 6,
    latir: function() {
        console.log('Auau');
    }
};

const viraLataString = JSON.stringify(viraLata);

console.log(viraLataString);
console.log(JSON.parse(viraLataString));
