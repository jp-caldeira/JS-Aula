let class1 = document.getElementsByClassName("class1");
//console.log(class1);
//alert(class1[0].innerHTML);

let botao1 = document.getElementById("botao1");
//alert(botao1.innerHTML);

let divs = document.getElementsByTagName("DIV");
//console.log(divs);

let first = document.querySelector('.class1');
//console.log(first);

let all = document.querySelectorAll('.class1');

let div1 = document.getElementById('div1');
var innerDivs = div1.getElementsByClassName('class1');

console.log(innerDivs[0].innerHTML);
console.log(div1.innerHTML);
console.log(div1.innerText);
console.log(div1.textContent);
// console.log(all);
// console.log(all[0]);
// console.log(all[0].innerHTML);
// console.log(all[0].classList);
// console.log(all[0].classList.value);

let div1Class = div1.getAttribute('class');
// console.log(div1.getAttribute('class'));
// console.log(div1.getAttribute('id'));
// console.log(div1.getAttribute('value'));

let div1HTML = div1.innerHTML;
var div1Color = div1.style.backgroundColor;

let div1ComputedStyle =
window.getComputedStyle(div1).backgroundColor;

div1.setAttribute('class', 'class2');
console.log(div1.getAttribute('class'));

//div1.innerHTML = "Goodbye<div class='class1'>World</div>";
//div1.style.backgroundColor = '#0000ff';
div1.setAttribute('style', 'height: 200px; background-color:#0000ff');

let newDiv = document.createElement('div');
newDiv.innerHTML = "<h2>hello there</h2>";
newDiv.setAttribute('style','background-color: #00ff00');
newDiv.setAttribute('id', 'newDiv');
//newDiv.removeAttribute('style');
div1.appendChild(newDiv);

//document.body.removeChild(div1);
//div1.removeChild(newDiv);

botao1.addEventListener('click', function(event){
  target = event.target;
  alert(target.innerHTML);
  console.log("o " + target.id + " foi clicado");
});

// document.addEventListener('DOMContentLoaded',
// function(){
//   alert("página carregada");
// });

document.getElementById('div1').addEventListener('mouseover',
function(event){
  event.target.style.backgroundColor = '#00ff00';
})

var form = document.getElementById('form');

form.addEventListener('submit',
function(event){
  event.preventDefault();
  var textInput = form.elements[0];
  alert(textInput.value);
})
