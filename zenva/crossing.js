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
          this.xPos += this.xSpeed;
          this.yPos += this.ySpeed;
    }
}

var player = new gameCharacter(50, 225, 50, 50, "yellow", 0);

var enemies = [
    new gameCharacter(350, 150, 50, 50, "rgb(0, 0, 255)", 2),
    new gameCharacter(600, 250, 50, 50, "rgb(0, 0, 255)", 3),
    new gameCharacter(900, 420, 50, 50, "rgb(0, 0, 255)", 4)
];

document.onkeydown = function(event){
 switch(event.key){

   case "ArrowDown":
    player.xSpeed = 0;
    player.ySpeed = player.maxSpeed;
   break;

   case "ArrowUp":
    player.xSpeed = 0;
    player.ySpeed = -player.maxSpeed;
   break;

  case "ArrowRight":
    player.ySpeed = 0;
    player.xSpeed = player.maxSpeed;
   break;

  case "ArrowLeft":
    player.ySpeed = 0;
    player.xSpeed = -player.maxSpeed;
   break;
 }
}

document.onkeyup = function(event) {
    player.xSpeed = 0;
    player.ySpeed = 0;
}

var checkCollisions = function (rect1 = 0, rect2 = 0) {
        let rect1x2 = rect1.xPos + rect1.width;
        let rect2x2 = rect2.xPos + rect2.width;
        let rect1y2 = rect1.yPos + rect1.height;
        let rect2y2 = rect2.yPos + rect2.height;

        return rect1.xPos < rect2x2 && rect1x2 > rect2.xPos && rect1.yPos < rect2y2 && rect1y2 > rect2.yPos;
    }



var draw = function() {
    context.clearRect(0, 0, screenWidth, screenHeight);

     context.fillStyle = player.color;
     context.fillRect(player.xPos, player.yPos, player.width, player.height);

    enemies.forEach(function(element){
      context.fillStyle = element.color;
      context.fillRect(element.xPos, element.yPos, element.width, element.height);
});
}

var update = function(){

     player.move();
     enemies.forEach(function(element){
       if(checkCollisions(player, element)){
         alert("Colisão!!!");
       }
         element.moveVert();

    });
}


var step = function(){
    //qualquer atualização necessário no quadro
    update();
    checkCollisions();
    draw();
    window.requestAnimationFrame(step);
}

step();
