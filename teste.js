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

var aluno2 = {};

var aluno2 = {
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

var student = {
    name: "Juana",
    lastName: "Heinz",
    fullName: function(){
      return student.name + " " + student.lastName;
    }
}

//console.log(student.fullName());

for (var key in student){
  console.log(student[key]);
  }


  var carro = {
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

  // for (var prop in carro){
  //   console.log(prop);
  // }
 
 
  for (var prop in carro){
    console.log(prop + ": " + carro[prop]);
  }

  

  