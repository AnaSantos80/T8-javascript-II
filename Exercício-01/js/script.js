const alunas = ["Raquel Pereira", "Talita Barbosa", "Lia Lobo", "Diana Moraes", "Angelica Gacia", "Simara Conceição", "Simone Santos", "Monique Almeida", "Priscila Alves",];

const lista = document.getElementById("lista-alunas");

//maneira mais simplificada que a localizada abaixo
alunas.forEach(function(aluna) {
    let item = document.createElement("li");

    item.textContent = aluna;

    lista.appendChild(item);
})



// let soma = 0;
// meuTitulo.addEventListener("click", function logar(){
//     console.log(soma++)
// });

// não irá contar mais os cliques irei alterar a cor do título

const meuTitulo = document.querySelector(".titulo");

meuTitulo.addEventListener("click", function (){
    // meuTitulo.getElementsByClassName.color = "red";
    meuTitulo.classList.add("vermelha");
})


//"aluna" cada parametro que ele vai pegar
//"alunas" Array





// const lista = document.getElementById("lista-alunas")
// outra forma de escrever

// for (let i=0; i<alunas.length; i++){
//     // let ul= document.getElementById("lista-alunas")
//     //pode ficar dentro do "for", mas como irei utilizar outras vezes chamo do lado de fora, aqui uso mais memória
//     let li= document.createElement("li")
//     ul.appendChild(li)
//     //insere um elemento filho
//     li.textContent = alunas[i]
// }

// // i<alunas.length (comparação) 

