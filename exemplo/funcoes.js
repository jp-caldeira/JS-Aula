//função é um bloco de código atribuído para executar uma tarefa

function produto (n1, n2){
    return n1 * n2;//usar sempre RETURN 
}

//executando:
produto(2,5);

//declaração vs expressão
//declaração:

function saudacoes(){
    return console.log('Olá');
}

//expressão:

let saudacoes = function(){
    return console.log("Olá");
}

//ambas são invocadas do mesmo jeito:
saudacoes();

//parametros

function digaOla(nome, sobrenome){
    return "Olá " + nome + " " + sobrenome;
}

digaOla("Fulano", "Silva");

//ESCOPO

let saludos = "Olá"; //global

function saudacoes(nome, sobrenome){
    return "Olá " + nome + " " + sobrenome;
}

saudacoes("João", "Mello");// retorna "Olá João Mello"
console.log(saludos); // retorna "Olá"

//escopo local

function saudacoes(nome, sobrenome){
    let hello = "Olá";
    return "Olá " + nome + " " + sobrenome;
}

saudacoes("João", "Mello");// retorna "Olá João Mello"
console.log(hello); //retorna UNDEFINED
