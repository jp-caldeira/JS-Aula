let cepInserido = document.getElementById('CEP');
let rua = document.getElementById('rua');
let numeroCasa = document.getElementById('numeroCasa');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

cepInserido.onfocus = function(){
  console.log("usuário selecionado o campo CEP");
}



cepInserido.onchange = function(){
  let cep = event.target.value;
  fetch('https://viacep.com.br/ws/'+ cep + '/json/').then(function(retorno){
return retorno.json();
}).then(function(data){
  rua.value = data.logradouro
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;

});


}
