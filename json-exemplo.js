let professoresObj = {
            "nome": "Aninha",            
            "curso": "Full Stack"

};

//convertendo para json ---> JSON.stringify

let profJSON = JSON.stringify(professoresObj);

console.log(profJSON);//retorna {"nome":"Aninha","curso":"Full Stack"}

//json para objeto ---> JSON.parse

let cursosJSON = '{ "nome": "FullStack", "categoria": "Programação" }';

let cursosObj = JSON.parse(cursosJSON);

console.log(cursosObj);
//retorna objeto




