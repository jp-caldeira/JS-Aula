///////while loops/////////////

let endPos = 5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

// while (pos < endPos) {
//     pos++;
//     console.log(`posição é ${pos}`);
// }

while(!isGameOver){

   pos++;

  if(xPos >= endPos || pos == enemyPos){
    isGameOver = true;
  }
}

////break///

let playerPos = 0;
let enemyPosition = 4;
let endPosition = 10;


while(playerPos < endPosition){

   if(playerPos % 2 != 0){
    playerPos++;
   }

    playerPos+=2;
    console.log(playerPos);
  if(playerPos == enemyPosition){
    console.log("wasted");
    break;
  }
}

///CONTINUE

while(playerPos < endPosition){

   if(playerPos % 2 == 1){
     playerPos+=2;
     console.log("if -- " + playerPos);
     continue;
   }

    playerPos++;
    console.log(playerPos);

  if(playerPos == enemyPosition){
    console.log("wasted");
    break;
  }

}

console.log("fim do jogos");

//// RETURN

function somarCinco(numA){
  var a = 5;
  var result = numA + 5;
  return result;
  console.log("o resultado é " + result);
}

//outro exemplo...

function movePlayer(){
    while(xPos < endPos){
      xPos++;
      console.log(xPos);
      if(xPos == enemyPos){
        console.log("wasted");
        return; //aqui ele encerra tanto o loop quanto a função - o "over" não será impresso no console
      }
     }
  console.log("over");
}

//// FOR

meuArray = ["abobrinha", "chocolate", "amendôas", "chinelos"];

for (var i = 0; i < meuArray.length; i++){
      console.log(meuArray[i]);
}

var items = ["axe", "shirt", "knife"];
var finalString = "In my inventory I have: ";

for (var i = 0; i < items.length; i++){
  var itemName = items[i];
  finalString += itemName + " ";  
}

console.log(finalString);

finalString = finalString.slice(0, finalString.length - 1);

finalString += ".";

console.log(finalString);

///FOREACH 

meuArray.forEach(function(element){
  finalString += element + " ";
});

array.forEach(element => {
  
});

function logElements(element, index, array){
  console.log("a[" + index + "] = " + element);
}

[10, 25, 67].forEach(logElements);
