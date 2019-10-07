let formulario = document.querySelector(".transacao__form");
// capturei o formulario para criar um evento quando alguém for clicar no botão. Depois irei criar o addEventListener
let extrato = document.querySelector(".extrato__table")
// capturei a tabela para poder criar o tbody/sessão de conteúdo (mãe)

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    // para não recarregar a pg e perder os dados coloco o preventDefault
    let linha = document.createElement("tr");
    // criei o tr(linha) e preciso guardar em algum lugar, indicado na próxima linha (filho)
    extrato.appendChild(linha);

    let nomeTransacao = document.getElementById("transacaoInputNome");
    // o que está entre parênteses é o nome do id que está dentro do input
    let valor = document.getElementById("transacaoInputValor");
    let data = document.getElementById("transacaoInputData");
    // peguei as informações digitadas pelo usuário para mostrar no campo abaixo, mas preciso dos valores e irei guarddar em uma variável

    let textoNome = nomeTransacao.value;
    // aqui captura o valor escrito pelo usuário dentro do input. A estrutura é sempre o nome da variável que dei para o input seguida de um ponto value (.value)
    let textoValor = valor.value;
    let textoData = data.value

    let coluna1 = document.createElement("td");
    let coluna2 = document.createElement("td");
    let coluna3 = document.createElement("td");
    // criei as TDs, mas precisa guradá-las, pois estão "flutuando". Agora eles precisam ser adotados

    coluna1.textContent = textoNome;
    coluna2.textContent = textoValor;
    coluna3.textContent = textoData;
    // coloquei valores para os TDs e esses valores são os conteúdos digitados pelos usuários

    linha.appendChild(coluna1);
    linha.appendChild(coluna2);
    linha.appendChild(coluna3);
    // as colunas estão sendo adotadas pelas linhas

    formulario.reset()
    // limpar os campos depois do usuário dar o enter 
})





