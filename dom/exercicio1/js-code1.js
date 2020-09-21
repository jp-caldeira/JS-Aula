// let botao = document.getElementsByClassName("card-button");
// let cartaoResposta = document.getElementsByClassName('card-answer');
//
// console.log(botao);
// console.log(cartaoResposta);
//
// botao.addEventListener('click', function(event){
//   if (cartaoResposta.style.display == "none"){
//    cartaoResposta.style.display = "Block";
//   // cartaoResposta.setAttribute("style", "display: block");
//   botao.innerHTML = "Esconder";
//   } else if (cartaoResposta.style.display = "Block") {
//  cartaoResposta.style.display = "none";
//  botao.innerHTML = "Mostrar";
// }
// });

let cards = document.getElementsByClassName("card");

for (var cardIndex in cards){
  let cartao = cards[cardIndex];
  let button = cartao.querySelector(".card-button");


   button.addEventListener('click', function(event){
    let currentButton = event.target;
    let currentCard = currentButton.parentNode;
    let currentAnswer = currentCard.querySelector(".card-answer");

    if (currentButton.innerHTML == "Mostrar"){
      currentAnswer.style.display = "block";
      currentButton.innerHTML = "Esconder";
    } else if (currentButton.innerHTML == "Esconder"){
      currentAnswer.style.display = "none";
      currentButton.innerHTML = "Mostrar";
    }
  })
      }
