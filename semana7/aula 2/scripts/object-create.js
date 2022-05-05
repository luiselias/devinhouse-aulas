const alunoLuis = alunoCreator('Luis Carlos Elias', 44, 'Senior');

alunoLuis.alunoToString();

console.log(alunoLuis);

alunoLuis.nome = 'Luiz Carlos';
alunoLuis.idade = 55;

alunoLuis.alunoToString();

delete alunoLuis.nome;
alunoLuis.alunoToString();

delete alunoLuis.turma;
alunoLuis.alunoToString();
