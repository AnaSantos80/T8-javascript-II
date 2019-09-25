const alunas = ["Raquel Pereira", "Talita Barbosa", "Lia Lobo", "Diana Moraes", "Angelica Gacia", "Simara Conceição", "Simone Santos", "Monique Almeida", "Priscila Alves",];

const lista = document.getElementById("lista-alunas");
na gaveta (const lista) o método (getElementById) vai procurar no DOM qualquer coisa que tenha uma "lista-alunas" 

//maneira mais simplificada que a localizada abaixo
alunas.forEach(function(aluna) {
    tradução: com base no array alunas, faça um laço de repetição do tipo forEach que siga os seguintes paços (que é criar o function)
    no function - apelide o item array de aluna.


    é um metodo só para o Array, qualquer array que eu quiser percorrer uso o (forEach)
    o parametro (aluna) é cada item 

    let item = document.createElement("li");
    eu crio a graveta (let item) eu peço p o DOM criar um novo elemento eu guardo esse elemento na gaveta.Array

    item.textContent = aluna;
    crio o conteúdo de texto do item e digo que ele é aluna, a é um apelido para o item do array.Array

    lista.appendChild(item);
    eu falo para a (lista) que ela é mãe do (item)
})



let soma = 0;
meuTitulo.addEventListener("click", function logar(){
    console.log(soma++)
});
não irá contar mais os cliques irei alterar a cor do título


const meuTitulo = document.querySelector(".titulo");

meuTitulo.addEventListener("click", function (){
    // meuTitulo.getElementsByClassName.color = "red";
    aqui altero a cor pelo js

    meuTitulo.classList.add("vermelha");
    aqui a cor é alterada pelo CSS
})


//"aluna" cada parametro que ele vai pegar
//"alunas" Array



const lista = document.getElementById("lista-alunas")
outra forma de escrever


laço de repetição pura, 
for (let i=0; i<alunas.length; i++){
    // let ul= document.getElementById("lista-alunas")
    //pode ficar dentro do "for", mas como irei utilizar outras vezes e não vai mudar chamo do lado de fora, aqui uso mais memória
    let li= document.createElement("li")
    ul.appendChild(li)
    //insere um elemento filho
    
    li.textContent = alunas[i]
}

// i<alunas.length (comparação)
alunas[i] é cada item

