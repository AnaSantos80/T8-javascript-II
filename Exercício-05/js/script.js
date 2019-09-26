const livros = {
    1: {
        "titulo": "JavaScript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-java"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const listaCatalogo = document.getElementById("lista-do-catalogo");

// Primeiro criar caixa com titulo, <p> e <a>.



for (let propriedade in livros) {
    const titulo = document.createElement("h3");
    titulo.textContent = livros[propriedade]["titulo"];
    listaCatalogo.appendChild(titulo);

    const paragrafo = document.createElement("p");
    paragrafo.textContent = livros[propriedade]["quemEscreveu"]
    listaCatalogo.appendChild(paragrafo);

    const link = document.createElement("a");
    link.textContent = livros[propriedade]["link"]
    listaCatalogo.appendChild(link);
}










