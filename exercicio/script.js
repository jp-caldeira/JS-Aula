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
