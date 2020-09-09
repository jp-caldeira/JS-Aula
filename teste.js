
//Voltando um pouco aqui

//variaveis
let variavel = 'valor';

//constantes (php -- define('constante', 'valor'))
const constante = "valor";

//funções function nomedafuncao()
function myFunc(arg1, arg2){
  return true;
}

//array
let lista = [
  "banana",
  "maçã",
  "arroz"
];

//objeto literal (tipo array associativo)

let objeto = {
      "chave": "valor"
  }


console.log('Arquivo externo do javascript');

//letiaveis
let aluno = "João";

let idade = 33;

let aprovado = true;

console.log(aluno);
console.log(idade);
console.log(aprovado);

let alunos = ["João", "Gabi", "Maria"];
console.log(alunos);
alunos.push("Edu");
console.log(alunos);
let ultimoAluno = alunos.pop();
console.log(alunos);
console.log("Último aluno é: " + ultimoAluno);

//objetos

let aluno2 = {};

let aluno2 = {
      "nome": "João",
      "idade": 33,
      "nota": 5
};

console.log(aluno2);

//alterando objeto
aluno2.nome = "Mendonça";
aluno2.nota = 6;

console.log(aluno2);
//outro jeito

aluno2["idade"] = 33;

aluno2["turma"] = "FullStack PHP";

console.log(aluno2);

//condicionais:
if(aluno2.nota > 5){
  console.log(aluno2.nome + ", parabéns! Você foi aprovado");
} else {
  console.log(aluno2.nome + ", sinto muito. Você foi reprovado.");
}

if (aluno2.nome == "Maria"){
  console.log("Olá Maria");
} else {
  console.log("Quem é você?");
}

//if ternário - condicao ? true : false

console.log(aluno2.idade >= 18 ? aluno2.nome + " é maior de idade" : aluno2.nome + " é menor de idade");

//objetos

let student = {
    name: "Juana",
    lastName: "Heinz",
    fullName: function(){
      return student.name + " " + student.lastName;
    }
}

//console.log(student.fullName());

for (let key in student){
  console.log(student[key]);
  }


  let carro = {
      cor: "vermelho",
      placa: "XPTO-4342",
      ano: 2017,
      marca: "Volskwagen",
      ligar: function(){
        console.log("Carro ligado");
      },
      desligar: function(){
        console.log("Carro desligado");
      }
  }

  console.log(carro.marca);

  carro.ligar();
  carro.desligar();

  // for (let prop in carro){
  //   console.log(prop);
  // }

  for (let prop in carro){
    console.log(prop + ": " + carro[prop]);
  }
