var titulo = document.querySelector("h1");

//titulo.textContent = "olá seja bem-vindo";

var itens = document.querySelectorAll("li");

var containerClass = document.getElementsByClassName("container");

var meuTitulo = document.getElementById("tituloPrincipal");

meuTitulo.style.color = "olive";

meuTitulo.style.fontFamily = "cursive";

var meuBotao = document.querySelector(".btn-ver-mais");

meuBotao.style.backgroundColor = "green";

meuBotao.style.borderColor = "black";

//setar atributo ----> setAttribute("nome do atributo", "valor do atributo")
meuBotao.setAttribute("id", "meu-botao");

//obter valor do atributo  ---> getAtribute("string")
meuBotao.getAttribute("id");//retorna "meu-botao"
meuBotao.getAttribute("title");//retorna null

//removendo atributo por completo ----> removeAttribute()
meuBotao.removeAttribute("id");

//verificando a existência de um atributo ---> hasAttribute() ----> retorna booleano
meuBotao.hasAttribute("id");

