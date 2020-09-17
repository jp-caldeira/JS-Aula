var texto1 = "Olá mundo";

console.log(texto1.length);
//retorna 9 (inclui espaços em branco)

console.log(texto1.indexOf("m"));
//retorna 4

console.log(texto1.indexOf('x'));
//retorna -1 (false)

console.log(texto1.slice(0,3));
//retorna 'Olá' ---> slice(posicaoInicial, posicaoFinal)

var texto2 = "     Olá mundo    ";

console.log(texto2.length);//retorna 18 (inclui espaços em branco)

var texto2trim = texto2.trim();//corta espaços antes e depois

console.log(texto2trim.length);//retorna 9 

var texto3 = "Olá mundo tudo bem com você?";

var arraySplit = texto3.split(" ");
//transforma string em array, separando os itens de acordo com o parâmetro indicado

console.log(arraySplit);
//retorna => 6 ["Olá", "mundo", "tudo", "bem", "com", "você?"]








