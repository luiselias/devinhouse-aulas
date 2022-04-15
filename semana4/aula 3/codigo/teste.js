const meuArray = ['Ola', 'Ola', 'bem'];
const stringOla = 'Ola';

const troquemONome = function (elemento) {
    if (elemento === 'Ola') {
        return true;
    } else {
        return false;
    }
}

troquemONome(stringOla)

meuArray.filter(function(elemento) {
    return elemento === 'Ola';
}).forEach(function(elemento) {
    console.log(elemento);
});

