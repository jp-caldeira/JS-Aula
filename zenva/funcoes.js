///FUNÇÔES///

var currentHealth = 50;
var healAmount = 10;

function heal(){
  currentHealth += healAmount;
  // console.log("Energia recuperada! Agora você tem " + currentHealth + " de saúde.");

}

function nomes(){
  console.log("oi");
  function nested(){
   console.log("olha eu aqui");
  }
}

heal();// executa a funcão. agora currentHealth = 60;
console.log(currentHealth); // 60
nested(); // dá erro - a função só pode ser acessada dentro do escopo da outro função

///PARÂMETROS///

function healing(amount){
  currentHealth += amount;
  console.log(`Agora currentHealth é ${currentHealth}`);
}

healing(10);//agora currentHealth é 70;

function healin10(amount = 10){
    currentHealth += amount;
}

healin10(); // aumenta automaticamente o currentHealth em 10;
healin10(5); //agora aumenta em cinco. o valor do parâmetro é opcional porque já foi anteriormente na função

///RETURN///

var maxHealth = 100;


function calcPercent(dividendo, divisor){
  return (dividendo / divisor) * 100;
}

function functionName(healAmount = 10) {

  var newHealth = currentHealth + healAmount;

  currentHealth = newHealth > maxHealth ? maxHealth : newHealth;

  return calcHealth(currentHealth, maxHealth);

}
