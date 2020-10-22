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
        health: 100;
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






