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
];


const totalDerrotas = lutadoresUFC.reduce((derrotas, lutador) => derrotas += lutador.derrotas, 0);

console.log('Total de derrotas', totalDerrotas);
