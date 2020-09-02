console.log('Arquivo externo do javascript');

//variaveis
var aluno = "João";

var idade = 33;

var aprovado = true;

console.log(aluno);
console.log(idade);
console.log(aprovado);

var alunos = ["João", "Gabi", "Maria"];
console.log(alunos);
alunos.push("Edu");
console.log(alunos);
var ultimoAluno = alunos.pop();
console.log(alunos);
console.log("Último aluno é: " + ultimoAluno);

//objetos

var alunos2 = {};

var alunos2 = {
      "nome": "João",
      "idade": 33,
      "aprovado": true
};

console.log(alunos2);

//alterando objeto
alunos2.nome = "Mendonça";
alunos2.nota = 7;

console.log(alunos2);
//outro jeito

alunos2["idade"] = 34;

console.log(alunos2);
