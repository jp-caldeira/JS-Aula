//closure: função dentro de outra função

function funcaoExterna(string){
    var variavelLocal = "Abc";

    function funcaoInterna(){
        return variavelLocal + " " + string;
    }
    return funcaoInterna();
}

funcaoExterna("Ananias"); // retorna "Abc Ananias";
funcaoInterna(); // retorna undefined (escopo local)

//CALLBACK - funções passada como parâmetro em outra func

function somar(n1, n2){ return n1 + n2; }
function subtrair(n1, n2){ return n1 - n2; }

function operacaoMat(n1, n2, callback){
    return callback(n1, n2);
}

operacaoMat(4, 17, somar); //retorna 21
operacaoMat(26, 12, subtrair); //retorna 14
