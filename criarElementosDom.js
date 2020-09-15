//createElement
//---> cria novos elementos HTML (recebe uma tag html como parâmetro)
var lista = document.querySelector('ul');

var novoLi = document.createElement('li');

//createTextElement
//---> cria contéudo de uma tag HTML
var textoDoLi = document.createTextElement('sou um elemento!');
//ou
let texto = document.createTextNode("este é um texto");

//Append()
//--->insere o elemento criado dentro de um elemento previamente selecionado
novoLi.append(textoDoLi);
lista.append(novoLi);

//removeChild
//----> elimina um filho dentro de um elemento previamente selecionado
//-> recebe como parametro um nó
var lista = document.querySelector('ul');

var filhos = lista.children; //coleção de nós filhos html
var filhoParaApagar = filhos[2];//elmento HTML

lista.removeChild(filhoParaApagar);
