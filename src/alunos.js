// const alunos = [
//     { nome: 'Maria', nota: 7 },
//     { nome: 'João', nota: 6 },
//     { nome: 'Pedro', nota: 4 },
//     { nome: 'Carlos', nota: 8 },
//     { nome: 'Marcos', nota: 5 },
//   ];
  
//   const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);
  
//   console.log(alunosAprovados);


//// ######### * O modelo acima achei muito simples ai eu encontrei para ficar mais completo no aprendizado* ######

                         /////////////////////////////////////////////////////////////////////

const alunos = ['Maria', 'João', 'Pedro', 'Carlos', 'Marcos', 'Eduardo', 'Josue'];
const notas = [3.5, 6, 7, 2.5, 10, 8, 1.6];

const diarioNotas = alunos.map((itemAluno, index) =>({
    nome:itemAluno,
    nota: notas[index]
}))

const Aprovados = diarioNotas.filter(aluno => aluno.nota >= 6);
const reprovados = diarioNotas.filter(aluno => aluno.nota < 6);

console.log('Alunos Aprovados:');
console.log(Aprovados);

console.log("\n");

console.log('Alunos Reprovados:');
console.log( reprovados);