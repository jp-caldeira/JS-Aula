////////CLASSES


class gameCharacter {

      constructor(name, xPos, health){
        this.name = name;
        this.xPos = xPos;
        this.health = health;
      }

    move(x) {
      this.xPos += x;
    }
}

var gc1 = new gameCharacter("Joao", 0, 100);
gc1.name; //"Joao"

//herança

class humanCharacter extends gameCharacter {

      constructor(name, xPos, health){
          super(name, xPos, health);
          this.classification = "Human";
          }
}

var hc1 = new humanCharacter("Alf", 0, 100);
