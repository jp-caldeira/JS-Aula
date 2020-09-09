//Variaveis $
// $variavel = "VALOR";
let variavel = "VALOR";

//Cosntantes define("CONSTANTE", "VALOR");
const CONSTANTE = "VALOR"

//Funcoes function nomeDaFuncao() {}
function nomeDaFuncao(arg1, arg2) {
    return true;
}

//Laço de repetição
for (let i = 0 ; i < 10 ; i++) {
    //Código do laço
}
//Array = [PHP] ARRAY ENUMERATIVO
let lista = [
    "Banana",
    "maçã",
    "cogumelo"
];

//Objetos Literais $objeto = ["chave" => "VALOR"]
let objeto = {
    "chave": "VALOR"
}

//Acessando Arrays: VARIAVEL[CHAVE]
lista[0]

// FUNCOES DE NOTIFICACAO
// alert [PHP]ECHO
//alert("Ola usuário");

// ESCRITA NO CONSOLE
console.log("Olá mundo");

let pet = {
    "nome": "Jujuba",
    "raça": "indefinida",
    "peso": "pesada",
    "idade": "só deus sabe"
}

let filmes = [
  "Indiana Jones e a Caveira de Cristal",
  "Batman - aquele que o Jim Carrey é o Charada",
  "SuperXuxa contra o baixo-astral",
  "Mad Max - A estrada da fúria",
  "Standy By Me"
]

function DigaOla(){
  return alert("Olá, como você está?");
}



function inverteFilmes(array){
      let invertidos = [];
  for (let i = 1; i <= array.length; i++){
      let filme = array[array.length - i];
      invertidos.push(filme);
}
    return console.log("Lista de filmes invertida: ", invertidos);
}

// for(let i = filmes.length - 1; i >= 0; i--){
//   let filmes = filmes[i];
//   array_invertido.push(filme);
// }

//
// let novofilme = array.pop();
// invertidos.push(novofilme);
//let tamanho = array.length - i;
// let newMovie = array.pop();
// invertidos[tamanho] = newMovie;
