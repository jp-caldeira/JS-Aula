//array e seus métodos

//for orf - pode operar sobre array ou strings

let meuarray = [1,2,3];

for (var numero of meuarray){
  console.log(numero);
}

//retorna:
//1
//2
//3

var myString = "Olá";

for (var letra of myString){
  console.log(letra);
}
// O
//l
//á

//foreach - recebe como parâmetro uma função

var myArray = [1,2,3];

myArray.forEach(function(numero){
    console.log(numero);
});
//1
//2
//3

//map() - recebe callback como parâmetro e devolve um novo array_invertido

var myArray = [1,2,3];
var dobroDoArray = myArray.map(function(parametro){
    return parametro * 2;

});

//retorna [2,4,6]

//filter - cria novo array com todos os elementos que cumpram a condição do callback

var myArray = [1,2,3];
var impares = myArray.filter(function (numero) {
  return numero % 2 != 0;
});

//retorna [1,3]

//reduce
// retorna um único valor e recebe 2 parametros. pode receber um valor inicial para o contador, depois da callback
var myArray = [1,2,3];
var adicionar = myArray.reduce(function(acumulador, elementoAtual){
  return acumulador + elementoAtual;
}, 0);

//retorna adicionar = 6

//join
//une todos os elementos do array em uma string
var frutas = ["maçã", "laranja", "abacaxi"];

var texto = frutas.join(", ");
//devolve "maçã, laranja, abacaxi"
var texto2 = frutas.join();
//devolve maçã,laranja,abacaxi (sem espaços)

//find
//retorna o valor do primeiro elemento que cumpre a condição
var frutas = ["maçã", "laranja", "abacaxi"];
var match = frutas.find(function (fruta) {
    return fruta === "maçã";
});
console.log(match); //retorna "maçã"
