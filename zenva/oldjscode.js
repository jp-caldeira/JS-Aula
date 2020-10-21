var maxHealth = 100;

var currentHealth = 50.5;

currentHealth = maxHealth;

var isGameOver = false;

isGameOver = true;


//let vs var vs const
const maxHealth = 100;
var currentHealth = 50.5;


if (currentHealth < 0){
  var isGameOver = false;
  let isNotGameOver = false;
}

console.log(isGameOver); // undefined
console.log(isNotGameOver); //erro - não consegue acessar a variável fora do if.

////////////////strings/////////////

var characterName = "Fulaninho";
var age = 30;

let message =
`Hi, my name is ${characterName} and my age is ${age}`;//interpolation

console.log(message);

let length = characterName.length;
console.log(length);
let upperName = characterName.toUpperCase();
console.log(upperName);
let lowerName = characterName.toLowerCase();
console.log(lowerName);
characterName = characterName.toLowerCase();
console.log(characterName);

let ful = characterName.slice(0, 3);//retorna 'ful'
console.log(ful);

///operators 1///
// + -  * / % ** //

var health = 50;

health = health + 10; // 60

health = health % 50; // 10 -> resto da divisão
var isEven = health % 2 == 0;

var exponent = health ** 2; //100

// +=, -=, *=, /= ///
health -= 20; // health = health - 20;

console.log(health);

health += 10;

console.log(health);

health *= 1.5;

console.log(health);

health /= 2;

console.log(health);

health++;

console.log(health);

health = health + 1;

console.log(health);

health += 1;

console.log(health);

//com strings///

var hello = "Hello";

var world = "world";

var result = hello + ", " + world;

console.log(result);

var exclamacao = "!";

result += exclamacao;
result += exclamacao;

console.log(result);

// > >= < <= == != === //
var number1 = 5;
var number2 = 10;

var result = number1 > number2;

console.log(result);

result = number1 == number2;

console.log(result);

result = number1 != number2;

console.log(result);

var string1 = "Hello";

var string2 = "World";

result = string1 == string2;

console.log(result);

// !, ||, && //

result = !result; //inverte

result = number1 > number2 && string1 == string2; // só retorna true se ambas forem true

number2 = number1;

result = number1 == number2 || string1 == string2;//OR - retorna true se uma for true

// ternário ? : //

number1 = 5;
number2 = 10;

result = number1 > number2 ? number1 : number2; //testa a condicao num1 > num2. se true retorna num1, false retorna number2

///////////////////Arrays////////////////

var inventory = ["machado", "faca", "pão", "peixe"];

console.log(inventory[0]);//machado
console.log(inventory[1]);//faca
console.log(inventory[2]);//pão
console.log(inventory[3]);//peixe

//modificando
inventory[2] = "açúcar";
//agora inventory = ["machado", "faca", "açúcar", "peixe"];

//FUNÇÕES

inventory.length; // 4
inventory[0].length; // retorna o tamanho do item 0 do Arrays
console.log("número de itens no array: " + inventory.length);
console.log("primeiro item do array: " + inventory[0]);
console.log("tamanho do primeiro item do array: " + inventory[0].length);

inventory.push("água");//adiciona item na ultima posição;
var water = invetory.pop();//retira o último item e armazena na variável water;

///arrays multidimensionais///

var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1]
];

var firstWorld = levels[0];//[1.1, 1.2, 1.3]
var firstLevel = levels[0][0];//[1.1]
levels[0][1] = 1.4;

//removendo e adicionando itens

var removedItem = levels[1].pop(); // 2.4

levels[2].push(3.2);

console.log(levels);

levels[2].push(3.3);

console.log(levels);

console.log(levels[2][2]);

///if else etc///

if(test condition){
  //código a ser executado se a condição for verdadeira//
}

var keyPressed = 'l';
var xPos = 0;
let endPos = 5;
let beginPos = 0;

if (keyPressed == "l"){
} else if (keyPressed == 'r'){
  xPos -= 1;
} else {
  xPos = 0;
}

///outro;
if (keyPressed == "l"){
  if(xPos < endPos){
      xPos += 1;
    }
} else if (keyPressed == 'r'){
  if(xPos > beginPos){
  xPos -= 1;
}
}

if (keyPressed == "l" && xPos < endPos){
    xPos += 1;
} else if (keyPressed == 'r' && xPos > beginPos){
  xPos -= 1;
}
