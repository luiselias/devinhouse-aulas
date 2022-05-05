let cont = 0
function verificaSeAindaTemProtoType(obj) {
    let distancia = '';
    for (let index = 0; index < cont; index++) {
        distancia += '=';        
    }
    cont++;
    console.log(`${distancia}>${obj.name || 'Object'}`);    
    if (obj.__proto__) {
        verificaSeAindaTemProtoType(obj.__proto__);
    }
}

// const teste = {
//     name: 'teste',
// };
// const outroTeste = Object.create(teste, {
//     name: {
//         value: 'outroTeste',
//     },
//     surname: {
//         value: 'Elias',
//     }
// })
//verificaSeAindaTemProtoType(teste)
//console.log('#####################\n');
//cont = 0
//verificaSeAindaTemProtoType(outroTeste)

class pai {
    constructor() {
        this.credo = 'pai';
    }
}

pai.prototype.data = 5

class filho extends pai {
    constructor() {
        super();
    }
    name = 'filho';
}

class neto extends filho {
    constructor() {
        super();
    }

    name = 'neto';
}

cont = 0
const netinho = new neto();
verificaSeAindaTemProtoType(neto)
console.log(pai.prototype);


