//pegando dados de api ---> método fetch

// fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
// .then(function(response){
//     if(response.ok){
//     return response.json(); 
//     } else {
//         throw Error('Erro na requisição');
//     }
// })
// .then(function(dados){
//     console.log(dados);
// })
// .catch(function(erro){
//     console.log(erro);
// })

//parte 2 - formulário

let campoNome = document.querySelector('input[name="nome"]');
let campoEmail = document.querySelector('input[name="email"]');
let campoEstado = document.querySelector('select[name="estado"]');
let formulario = document.querySelector('.meuForm');

//pegando os dados e colocando no select

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then(function(response){
    if(response.ok){
    return response.json(); 
    } else {
        throw Error('Erro na requisição');
    }
})
.then(function(dados){
    for(estado of dados){
        let option = document.createElement('option');
        let optionText = document.createTextNode(estado.nome + "(" + estado.sigla + ")");
        option.append(optionText);
        campoEstado.append(option);
    }
})
.catch(function(erro){
    console.log(erro);
})

//-------pegando elementos do formulários--------------------------

let elementosForm = formulario.elements;
// console.log(elementosForm);
let nomeUsuario = elementosForm[0];
// console.log(nomeUsuario.value);

// console.log(elementosForm[0]);
// console.log(elementosForm[0].name);
// console.log(elementosForm[0].value);

campoNome.onchange = function() {
    console.log(this.value);
};

//ou....
//nomeUsuario.onchange = function() {
//    console.log(this.value);
//};


campoEmail.onchange = function(){
    console.log(this.value);
};

//estado é diferente pois select
campoEstado.onchange = function(){
    console.log(this.options[this.selectedIndex].value);
};



campoNome.onfocus = function(){
    console.log("entrou no campo nome");
}

campoNome.onblur = function(){
    console.log("saiu do campo nome");
}

campoEmail.onfocus = function(){
    console.log("entrou no campo email");
}

campoEmail.onblur = function(){
    console.log("saiu do campo email");
}

formulario.onsubmit = function(event){
    event.preventDefault();
    console.log("Formulário enviado");
    console.log(campoNome.value);
    console.log(campoEmail.value);
    console.log(campoEstado.options[campoEstado.selectedIndex].value);
}