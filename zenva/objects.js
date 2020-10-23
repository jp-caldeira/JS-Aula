//objetos

var personagem = {
        nome: "Fulaninho",
        xPos: 0,
        itens: ["machado", "chapéu", "peixe"],
        move: function(x){
            this.xPos += x;
        }
};

///acessando:
console.log(personagem.nome);
console.log(personagem["nome"]);

//alterando:
console.log(personagem.itens);
personagem.itens = ["chinelo havaianas", "mexerica"];
console.log(`Agora seus itens são ${personagem.itens}`);

//usando função
console.log(personagem.xPos);
personagem.move(5);
console.log(`Agora sua posição é ${personagem.xPos}`);

//adicionando atributos e funções
personagem.yPos = 0;

//alterando função
personagem.move = function(x, y){
    this.xPos += x;
    this.yPos += y;
}

//assinalando variaveis e etc
console.log(personagem.nome);
var gc = personagem;
gc.nome = "Ananias";//gc não é só uma cópia como também faz referência ao objeto
console.log(personagem.nome);//agora nome é ananias
//gc.nome = "Ananias" e personagem.nome também "Ananias"

/////GETTER

var person2 = {
        nome: "Aldo",
        class: "Humano",
        health: 100,
        get title(){
            return this.nome + " o " + this.class;
        },
        set maxHealth(h){
            this.health = h;
        },
        xPos: 0,
        itens: ["pão", "manteiga"],
        move: function(x){
            this.xPos += x;
        }
}

person2.title;//acessar como uma propriedade e não função
///SETTER
person2.maxHealth = 150;

//outras maneiras de criar getter e setters após criar um objeto

Object.defineProperty(variavel, 'nomeDoGetter', {
    get: function() {
      ////
    },
});

Object.defineProperty(person2, "saúde", {
  get: function(){
    return "Health: " + health;
  }
});

///define setters

var o = {};
o.__defineSetter__('value', function(val) { this.anotherValue = val; });
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5

//define GETTER

var person3 = {
      nome: "Anderson",
      health: 100,
      dinheiro: 0,
};

person3.__defineGetter__("showMeTheMoney", function(){ return this.dinheiro; });


/////////////OBJECT FUNCTIONS

//constructor function

function gameCharacter(name, xPos, health){
        this.name = name;
        this.xPos = xPos;
        this.health = health;
        this.move = function(x){
            this.xPos += x;
        }
        this.class = "Human";
}

var hero = new gameCharacter("Fulano", 0, 100);//criando um novo objeto

console.log(hero.name);

var aldaberto = new gameCharacter("Aldaberto", 2, 100);
console.log(aldaberto.health);

//pra alterar é do mesmo jeito:

aldaberto.health = 150;
console.log(aldaberto.health);

//pra adicionar propriedades idem:
aldaberto.sagacidade = 1000; //mas só o aldaberto tem sagacidade, neste exemplo
aldaberto.maxSagaz = function(x){
    this.sagacidade += x;
}

////object prototype - definindo uma nova propriedade ao constructor
var gc1 = new gameCharacter("Joao", 0, 100);
gc1.yPos = 5; //só o gc1 tem a propriedade yPos

var gc2 = new gameCharacter("Robson", 0, 100);
gc2.yPos;//undefined -- a propriedade não existe neste objeto

gameCharacter.prototype.yPos = 5; //agora todos os objetos criados com o construtor terão a propriedade

//também com funções

var heal = function(amount){
   this.health += amount;
   return "Now health is " + this.health;
}

gameCharacter.prototype.heal = heal;

gc2.heal(10); /// "Now health is 110";

//dá pra assinalar a função direto também:

gameCharacter.prototype.moveY = function(y) {
   this.yPos += y;
}

gc2.moveY(5);
gc2.yPos; // 10;
