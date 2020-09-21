//console.log



let filmes = [
    'Vingadores',
    'Akira',
    'Silent Voice',
    'Pantera Negra',
    'Mulan'
];

let array_invertido = [];
// // VARIAVEL ; CONDICAO ; INCREMENTO
for (let i = filmes.length -1 ; i >= 0 ; i--) {
    let filme = filmes[i];
    array_invertido.push(filme);
}
// array_invertido = filmes.reverse();
console.log("LISTA ARRAY INVERTIDO: \n", array_invertido, filmes);

///
function exibeMensagem(){
  console.log(event);
  console.log("elemento em foco");
}

document.body.onkeydown = function(event){
  //event.preventDefault();
  //console.log("EVENT:", event.key);
}

//exemplos de form

//click: quando o botão é clicado (ocorroe no botão)

//focus: quando campo é selecionado
//blur: executa ao sair do input
//change: executa quando o valor de um campo é alterado

//onsubmit: executa quando o formulário é disparado
