let pinguim ={
    "nome": "Shakespeare",
    "idade": 5,
    "origem": "Inglaterra",
}

pinguim.andar = function() {
    console.log("andar");
}

pinguim.podeVoar = false;

pinguim.voar = function() {
   if (pinguim.podeVoar) {
   //condicional para se pinguim pode voar
        console.log('Voou');
    } else {
        console.log('Pinguim não voa ainda');
    } 
}

// Objeto dentro de outro objeto:
let turma = {
    "alunas": {
        1:"adriana",
        2:"ana",
        3:"barbara"
    },
    "professoras": 10
}
