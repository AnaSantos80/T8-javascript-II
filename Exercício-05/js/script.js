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
// essa é a mãe


// Primeiro criar caixa com titulo, <p> e <a>.

for (let propriedade in livros) {
    // quero que o for repita o padrão de criação
    const titulo = document.createElement("h3");
    // essa é o filho
    // a Milena colocou no lugar de h3 ("li")
    titulo.textContent = livros[propriedade]["titulo"];
    listaCatalogo.appendChild(titulo);
    titulo.classList.add("livro__titulo")

    const paragrafo = document.createElement("p");
    paragrafo.textContent = livros[propriedade]["quemEscreveu"]
    listaCatalogo.appendChild(paragrafo);

    const link = document.createElement("a");
    link.setAttribute("href", livros[propriedade]["link"]);
    // o setAttribute é para adicionarr um atributo a uma tag. Adiciona dois valores sendo o primeiro o atributo e o segundo o valor do atributo: type="submit". 
    listaCatalogo.appendChild(link);
    link.textContent = "Leia aqui";



    const btn = document.createElement("button");
    // eu crio um elemento
    listaCatalogo.appendChild(btn);
    // aqui linco com a mãe
    btn.textContent = "Não lido";
    // eu crio o conteúdo
    btn.classList.add("botao-lido");
    // aqui eu estilizei adicionando uma class

    // Criando um toggle
    btn.addEventListener("click", function () {
        // Verifica se o título já está marcado como lido
        if (titulo.classList.contains("livro__titulo--lido")) {
            // marco o títuloo com onão lido
            titulo.classList.remove("livro__titulo--lido");
            // Volto o botão para verde e volto o texto inicial

            btn.classList.remove("botao-vermelho");
            btn.textContent = "Não lido";

        } else {
            // Marco o livro como lido - tick
            titulo.classList.add("livro__titulo--lido");

            // Deixar o botão vermelho e modifica o texto inicial
            btn.classList.add("botao-vermelho");
            btn.textContent = "Já lido";            
        };
    });



    // Para botões separados:
    // btn.addEventListener("click", function(){
    //     // Como aplicar a orelhinha. 
    //     // Pegue o botão e escute quando alguém clicar
    //     titulo.classList.add("livro__titulo--lido")
    //     // eu chamei o titulo porque a bolinha está lá. Fiz ela chamar a listagem do css e depois fiz ela adicionar uma das classes da listagem.
    // })

    // Botão desfazer
    // const btn2 = document.createElement("button");
    // listaCatalogo.appendChild(btn2);
    // btn2.textContent = "Desfazer";
    // btn2.classList.add("botao-desfazer");

    // Para botões separados:
    // btn2.addEventListener("click", function(){
    //     // pegue o botão e escute quando alguém clicar
    //     titulo.classList.remove("livro__titulo--lido")

    // })



    // var deixa a variável solta, é possivel acessar de fora. É como se ficasse global.

    // Escopo é a área de atuação da função.

    // Função callback é colocada como parâmetro de outra função.

    // Tuggle: Quando clico faz uma ação e depois clico novamente e desfaz.


}









