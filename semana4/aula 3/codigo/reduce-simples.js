const valores = [1, 2, 3, 4, 5];

const total = valores.reduce(function (totalizador, valor) {
    return totalizador += valor;
}, 0);

console.log(total);


const lutadoresUFC = [
    {
        nome: 'Anderson Silva',
        pais: 'Brasil',
        vitorias: 34,
        empates: 0,
        derrotas: 11,
    },
    {
        nome: 'Conor McGregor',
        pais: 'Irlanda',
        vitorias: 22,
        empates: 0,
        derrotas: 6,
    },
    {
        nome: 'Vitor Belfort',
        pais: 'Brasil',
        vitorias: 26,
        empates: 0,
        derrotas: 14,
    },
    {
        nome: 'Ronda Rousey',
        pais: 'USA',
        vitorias: 12,
        empates: 0,
        derrotas: 2,
    },
    {
        nome: 'Jose Aldo',
        pais: 'Brasil',
        vitorias: 30,
        empates: 0,
        derrotas: 7,
    }
]

const totalVitorias = lutadoresUFC.reduce(function (totalizador, lutador) {
    return totalizador += lutador.vitorias;
}, 0);

console.log('Total de viórias', totalVitorias);

const listaDePaises = lutadoresUFC.reduce(function (paises, lutador) {
    if (!paises.includes(lutador.pais)) {
        paises.push(lutador.pais);
    }
    return paises;
}, []);

console.log('Lista de paises', listaDePaises);

const vitoriasPorPais = lutadoresUFC.reduce(function (porPais, lutador) {
    const paisCorrente = porPais.find(pais => pais.nome === lutador.pais);
    if (!paisCorrente) {
        porPais.push({ nome: lutador.pais, vitorias: lutador.vitorias });
    } else {
        paisCorrente.vitorias += lutador.vitorias;
    }
    return porPais;
}, []);

console.log('Vitorias por país', vitoriasPorPais);

try {
    
} catch (error) {
    
}