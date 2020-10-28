var canvas = document.getElementById('myCanvas');

var context = canvas.getContext('2d');



//desenhando uma linha
context.moveTo(200,0);
context.lineTo(1000,500);
context.stroke();
//retângulo
context.clearRect(0, 0, 1500, 500);//limpa tudo
context.fillStyle = "blue";//define cor
context.fillRect(100, 200, 250, 200); //define posição e tamanho


let screenWidth = 1000;
let screenHeight = 500;
var isGameLive = true;

class gameCharacter {
  constructor(x, y, width, height, color, speed){
    this.xPos = x;
    this.yPos = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ySpeed = speed;
    this.xSpeed = speed;
    this.maxSpeed = 4;
    this.bump = 0;
    }

    moveVert(){
      if (this.yPos > screenHeight - 50){
            this.ySpeed = -this.ySpeed;
            this.bump++;
      }

      if (this.yPos < screenHeight - 450 && this.bump > 0){
          this.ySpeed = -this.ySpeed;
      }
            this.yPos += this.ySpeed;
      }

////ou
//// moveVertically(){
//   if (this.yPos > screenHeight - 100 || this.yPos < 50){
//     this.speed = -this.speed;
//   }
//   this.yPos += this.speed;
// }


    move(){

      if(this.xPos <= 5){
        this.xPos += 10;
      }

      if(this.xPos >= 960){
        this.xPos -= 10;
      }

      if(this.yPos <= screenHeight - 480){
        this.yPos += 5;
      }

      if(this.yPos >= screenHeight - 50){
        this.yPos -= 5;
      }

          this.xPos += this.xSpeed;
          this.yPos += this.ySpeed;


      }
}

var player = new gameCharacter(50, 250, 35, 35, "yellow", 0);

var enemies = [
    new gameCharacter(350, 150, 35, 35, "rgb(0, 0, 255)", 3),
    new gameCharacter(250, 250, 35, 35, "rgb(0, 0, 255)", 6),
    new gameCharacter(450, 250, 35, 35, "rgb(0, 0, 255)", 5),
    new gameCharacter(550, 250, 35, 35, "rgb(0, 0, 255)", 4),
    new gameCharacter(650, 250, 35, 35, "rgb(0, 0, 255)", 3),
    new gameCharacter(750, 200, 35, 35, "rgb(0, 0, 255)", 4.5),
    new gameCharacter(850, 420, 35, 35, "rgb(0, 0, 255)", 6)
];

var goal = new gameCharacter(925, 250, 50, 36, "rgb(0,0,0)", 0);

//detectando teclas...

var isRightKeyPressed = false;
var isLeftKeyPressed = false;
var isUpKeyPressed = false;
var isDownKeyPressed = false;

document.onkeydown = function(event){
 switch(event.key){

   case "ArrowDown":
    isDownKeyPressed = true;
    player.xSpeed = 0;
    player.ySpeed = player.maxSpeed;
   break;

   case "ArrowUp":
    isUpKeyPressed = true;
    player.xSpeed = 0;
    player.ySpeed = -player.maxSpeed;
   break;

  case "ArrowRight":
    isRightKeyPressed = true;
    player.ySpeed = 0;
    player.xSpeed = player.maxSpeed;
   break;

  case "ArrowLeft":
    isLeftKeyPressed = true;
    player.ySpeed = 0;
    player.xSpeed = -player.maxSpeed;
   break;
 }
}

document.onkeyup = function(event) {
  switch(event.key){
    case 'ArrowRight':
            isRightKeyPressed = false;
            if (isLeftKeyPressed) {
                player.xSpeed = -player.maxSpeed;
            } else {
                player.xSpeed = 0;
            }
            break;

    case 'ArrowLeft':
      isLeftKeyPressed = false;
      if(isRightKeyPressed){
        player.xSpeed = player.maxSpeed;
      } else {
        player.xSpeed = 0;
      }
      break;

      case "ArrowDown":
       isDownKeyPressed = false;
       if(isUpKeyPressed){
         player.ySpeed = -player.maxSpeed;
       } else {
         player.ySpeed = 0;
       }
      break;

      case "ArrowUp":
       isUpKeyPressed = false;
       if(isDownKeyPressed){
       player.ySpeed = player.maxSpeed;
     } else {
       player.ySpeed = 0;
     }
      break;
  }
}

var checkCollisions = function (rect1, rect2) {
        let rect1x2 = rect1.xPos + rect1.width;
        let rect2x2 = rect2.xPos + rect2.width;
        let rect1y2 = rect1.yPos + rect1.height;
        let rect2y2 = rect2.yPos + rect2.height;

        return rect1.xPos < rect2x2 && rect1x2 > rect2.xPos && rect1.yPos < rect2y2 && rect1y2 > rect2.yPos;
    }





///sprites
var sprites = {};

var loadSprites = function(){

    sprites.player = new Image();
    sprites.player.src = 'images/hero.png';

    sprites.background = new Image();
    sprites.background.src = 'images/floor.png';

    sprites.enemy = new Image();
    sprites.enemy.src = 'images/enemy.png';

    sprites.goal = new Image();
    sprites.goal.src = 'images/chest.png';

}

loadSprites();

var draw = function() {
    context.clearRect(0, 0, screenWidth, screenHeight);
      context.drawImage(sprites.background, 0, 0);
     // context.fillStyle = player.color;
     // context.fillRect(player.xPos, player.yPos, player.width, player.height);
     // context.fillStyle = goal.color;
     // context.fillRect(goal.xPos, goal.yPos, goal.width, goal.height);

     context.drawImage(sprites.player, player.xPos, player.yPos);
     context.drawImage(sprites.goal, goal.xPos, goal.yPos);



    enemies.forEach(function(element){
      // context.fillStyle = element.color;
      // context.fillRect(element.xPos, element.yPos, element.width, element.height);
      context.drawImage(sprites.enemy, element.xPos, element.yPos);
});


}

var update = function(){

  if (checkCollisions(player, goal)){
    endGameLogic("Parabéns você ganhou!!");
  }

  player.move();

   enemies.forEach(function(element){
       if(checkCollisions(player, element)){
         endGameLogic("Você perdeu :(");
       }
        element.moveVert();
       });
}


var endGameLogic = function(text){
  isGameLive = false;
  alert(text);
  window.location = "";
}



var step = function(){
    //qualquer atualização necessário no quadro
    update();

    draw();
    if(isGameLive){
    window.requestAnimationFrame(step);
  }
}


step();
