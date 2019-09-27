const eu = {
    nome: "Ana",
    profissao: "Desenvolvedora",
    idade: 38,
    site: "https://www.futurelearn.com/",
    "estado-civil": "solteira",
    // estadoCivil: "solterira",  
    // "conta-bancaria": "123-4"
}

// const meuPerfil = document.getElementById("sou-a-mae");

// const titulo = document.createElement("p");

// titulo.textContent = "Eu sou";
// meuPerfil.appendChild(titulo);

// const nome = document.createElement("p");
// nome.textContent = eu.nome;
// meuPerfil.appendChild(nome);

// const profissao = document.createElement("p");
// profissao.textContent = eu.profissao;
// meuPerfil.appendChild(profissao);

// const idade = document.createElement("p");
// idade.textContent = eu.idade;
// meuPerfil.appendChild(idade);

// const estadoCivil = document.createElement("p");
// // criei a variável e atribuí um valor a MediaKeyStatusMap.
// estadoCivil.textContent = eu["estado-civil"];
// meuPerfil.appendChild(estadoCivil);

// const link = document.createElement("a");
// link.setAttribute("href", "https://www.futurelearn.com/");
// link.setAttribute("target", "_blank");
// link.textContent = "Acesse meu site";
// meuPerfil.appendChild(link);


// Img
// const gatinho = document.createElement("img");
// gatinho.setAttribute("src", eu["gatinho-preferido"]);
// meuPerfil.appendChild(gatinho);


// para acessar uma propriedade (objeto.idade  ou  objeto["estado-civil"] esse modo é para uma propriedade que tem caracter especial, exemplo(-))

// variavel não recebe aspas, senão vira string normal


// for é específico para objeto, deve ser usado para "coisas iguais" o índice passa a ser propriedade, no forin, é um loop, vou chamar sempre com colchete.

// tenho que criar paragrafo, dar conteúdo e dizer onde o paragrafo vai ficar.

// propriedade são os elementos: nome, idade etc. Propriedade funciona como variável

// objeto- eu, é sempre o nome que atribuo.

// método recebe como uma string a tag que eu quero criar.

const meuPerfil = document.getElementById("sou-a-mae");

for (let propriedade in eu) {
// para cada propriedade no objeto
    let criaParagrafo = document.createElement("p");
    meuPerfil.appendChild(criaParagrafo);
    criaParagrafo.textContent = eu[propriedade]
   }


for (let propriedade in eu) {
    let criaLink = document.createElement("a");
    meuPerfil.appendChild(criaLink);
    criaLink.setAttribute
    // precisa terminar
}