// let cepInserido = document.getElementById('CEP');
// let rua = document.getElementById('rua');
// let numeroCasa = document.getElementById('numeroCasa');
// let bairro = document.getElementById('bairro');
// let cidade = document.getElementById('cidade');
// let estado = document.getElementById('estado');

function selectId(id){
  return document.getElementById(id);
}

let form = selectId('form1');

let cep_input = selectId('CEP');
let rua = selectId('rua');
let numeroCaso = selectId('numeroCasa');
let bairro = selectId('bairro');
let cidade = selectId('cidade');
let estado = selectId('estado');
let nome = selectId('nome');

//let nome = document.querySelector('input[name="nome"]');
//console.log(nome);

cep_input.onfocus = function(){
  console.log("usuário selecionado o campo CEP");
}

cep_input.onchange = function(){
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

function empty(input){
  return input.value.trim() === "";
}

function errorMessage(message){
  errorListUl.innerHTML += "<li>" + message + "</li>";
}

let errorListUl = document.querySelector('#error-list ul');
let errorList = selectId('error-list');


form.onsubmit = function(event){

      errorListUl.innerHTML = '';

      if(empty(nome)){
          errorMessage("Campo <b>nome</b> não preenchido");
      }

      if(empty(rua)){
          errorMessage("Campo <b>rua</b> não preenchido");
      }

      if(empty(cep_input)){
          errorMessage("Campo <b>CEP</b> não preenchido");
      }

      if(empty(mensagem)){
          errorMessage("Campo <b>mensagem</b> não preenchido");
      }

      if(errorListUl.querySelectorAll('li').length > 0 ){
        event.preventDefault();
        errorList.hidden = "";
      }



}
