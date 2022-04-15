const arrayVazio = [];
try {
    console.log('Passou sem erro');
} catch (error) {
    arrayVazio.push({ propriedadeQualquer: 'Huhuuuuu' });
    console.log('Passou com erro');
} finally {
    console.log('Estou passeando pelo Finnaly');
}


let conta  = 0;

conta = conta - 50;

if (conta < 0) {
    throw new Error('Saldo insuficiente');
}

console.log(conta);






