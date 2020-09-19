let input = document.getElementById("input");
let botao1 = document.getElementById("botao1");
let output = document.getElementById("output");
let mensagem = document.getElementById("mensagem");



function displayOutput(){
  let texto = input.value;
  output.innerHTML = texto;
  }

function mostrarMensagem(){
  let texto2 = document.createTextNode("Digite o texto por favor");
  mensagem.append(texto2);

}

// botao1.onclick = function (){
//   displayOutput();
// }

botao1.addEventListener("click", displayOutput);

botao1.addEventListener("mouseover", mostrarMensagem);
