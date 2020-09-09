let titulo = document.querySelector("h1");

//titulo.textContent = "olá seja bem-vindo";

let itens = document.querySelectorAll("li");

let containerClass = document.getElementsByClassName("container");

let meuTitulo = document.getElementById("tituloPrincipal");

meuTitulo.style.color = "olive";

meuTitulo.style.fontFamily = "cursive";

let meuBotao = document.querySelector(".btn-ver-mais");

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
if (meuBotao.hasAttribute("id")){
  console.log("tem id");
} else {
  console.log("não tem id");
}
