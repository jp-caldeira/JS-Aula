let searchbar = document.querySelector('#search-bar');
//console.log(searchbar);

//let div_adventures = document.querySelectorAll('.adventure');
let adventures = document.getElementsByClassName('adventure');

//console.log(div_adventures);

let arrayAdventures = [];

for (var i = 0; i < adventures.length; i++) {
    arrayAdventures.push(adventures[i].innerHTML);
}



 searchbar.addEventListener('keyup', function(event){
   let text = searchbar.value;

 for (var i = 0; i < arrayAdventures.length; i++) {
   if (arrayAdventures[i].indexOf(text) < 0){
     adventures[i].style.display = 'none';
   } else {
     adventures[i].style.display = 'block';
   }
 }
});


// for (var variable in div_adventures) {
//
//   if (object.hasOwnProperty(variable)) {div_adventures}
//
// console.log(arrayAdventures);
